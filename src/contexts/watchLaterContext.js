import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useReducer, useContext, useEffect } from "react";
import { useAuth } from "./authContext";
import { watchLaterReducer } from "../reducer/watchLaterReducer";
toast.configure();

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
      
	const [ watchLaterState, watchlaterDispatch ] = useReducer(watchLaterReducer, {
		watchLaterItems: [],
	});

	const { state: { token } } = useAuth();

	useEffect(() => {
		token
		? (async () => {
			try {
				const response = await axios.get("/api/user/watchlater", {
					headers: { authorization: token },
				});

				if (response.status === 200) {
					watchlaterDispatch({ type: "SET_WATCHLATER_LIST", payload: response.data.watchlater });
				}
				} catch (err) {
					console.error("error", err);
				}
		})()
		: watchlaterDispatch({ type: "SET_WATCHLATER_LIST", payload: [] });
	}, [token]);

	const addToWatchLaterList = async (video) => {
		try {
			const response = await axios.post(
			"/api/user/watchlater",
			{
				video,
			},
			{
				headers: { authorization: token },
			}
			);

			if (response.status === 201) {
				toast("Added to Watch Later", {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000});
				watchlaterDispatch({ type: "SET_WATCHLATER_LIST", payload: response.data.watchlater });
			}
		} catch (err) {
			console.error("error occurred", err.message);
		}
	};

	const removeFromWatchLaterList = async (videoId) => {
	  	try {
			const response = await axios.delete(`/api/user/watchlater/${videoId}` ,
			{
				headers: { authorization: token }
			});

			if(response.status === 200 ) {
				toast("Removed from Watch Later", {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000});
				watchlaterDispatch({type: "SET_WATCHLATER_LIST", payload: response.data.watchlater})
			}
	  	} catch(err) {
		  	console.error("error occured", err.message);
	  	}
  	}

	return (
            <WatchLaterContext.Provider value={{ watchLaterState, watchlaterDispatch, addToWatchLaterList, removeFromWatchLaterList }}>
                  {children}
            </WatchLaterContext.Provider>
  );
};

const useWatchLaterList = () => useContext(WatchLaterContext);

export { useWatchLaterList, WatchLaterProvider };