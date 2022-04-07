import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useReducer, useContext, useEffect } from "react";
import { useAuth } from "./authContext";
import { historyReducer } from "../reducer/historyReducer";
toast.configure();

const HistoryContext = createContext();

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
				toast("Removed from History", {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000});
				historyDispatch({type: "SET_HISTORY_LIST", payload: response.data.history})
			}
	  	} catch(err) {
		  	console.error("error occured", err.message);
	  	}
  	}

      const removeAllHistory = async () => {
      try {
            const response = await axios.delete("/api/user/history/all" ,
            {
                  headers: { authorization: token }
            });

            if(response.status === 200 ) {
			toast("Cleared History", {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000});
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