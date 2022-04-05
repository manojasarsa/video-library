import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import { useAuth } from "./authContext";
// import { likesReducer } from "../reducer/likesReducer";

const HistoryContext = createContext();

const historyReducer = (state, action) => {
	switch (action.type) {
	case "SET_HISTORY_LIST":
		return {
			...state,
			historyItems: action.payload,
		};
		default:
			return state;
	}
};

const HistoryProvider = ({ children }) => {
      
	const [ historyState, historyDispatch ] = useReducer(historyReducer, {
		historyItems: [],
	});

	const { state: { token } } = useAuth();

	useEffect(() => {
		token
		? (async () => {
			try {
				const response = await axios.get("/api/user/history", {
					headers: { authorization: token },
				});

				if (response.status === 200) {
					historyDispatch({ type: "SET_HISTORY_LIST", payload: response.data.history });
				}
				} catch (err) {
					console.error("error", err);
				}
		})()
		: historyDispatch({ type: "SET_HISTORY_LIST", payload: [] });
	}, [token]);

	const addToHistoryList = async (video) => {
		try {
			const response = await axios.post(
			"/api/user/history",
			{
				video,
			},
			{
				headers: { authorization: token },
			}
			);

			if (response.status === 201) {
				historyDispatch({ type: "SET_HISTORY_LIST", payload: response.data.history });
			}
		} catch (err) {
			console.error("error occurred", err.message);
		}
	};

	const removeFromHistoryList = async (videoId) => {
	  	try {
			const response = await axios.delete(`/api/user/history/${videoId}` ,
			{
				headers: { authorization: token }
			});

			if(response.status === 200 ) {
				historyDispatch({type: "SET_HISTORY_LIST", payload: response.data.likes})
			}
	  	} catch(err) {
		  	console.error("error occured", err.message);
	  	}
  	}

      const removeAllHistory = async (videoId) => {
      try {
            const response = await axios.delete("/api/user/history/all" ,
            {
                  headers: { authorization: token }
            });

            if(response.status === 200 ) {
                  historyDispatch({type: "SET_HISTORY_LIST", payload: response.data.history})
            }
      } catch(err) {
            console.error("error occured", err.message);
      }
}

	return (
	<HistoryContext.Provider value={{ historyState, historyDispatch, addToHistoryList, removeFromHistoryList, removeAllHistory }}>
	  {children}
	</HistoryContext.Provider>
  );
};

const useHistoryList = () => useContext(HistoryContext);

export { useHistoryList, HistoryProvider };