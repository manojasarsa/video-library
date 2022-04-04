import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import { useAuth } from "./authContext";
import { likesReducer } from "../reducer/likesReducer";

const LikesContext = createContext();

const LikesProvider = ({ children }) => {
      
	const [ likesState, likesDispatch ] = useReducer(likesReducer, {
		likedItems: [],
	});

	const { state: { token } } = useAuth();

	useEffect(() => {
		token
		? (async () => {
			try {
				const response = await axios.get("/api/user/likes", {
					headers: { authorization: token },
				});

				if (response.status === 200) {
					likesDispatch({ type: "SET_LIKED_LIST", payload: response.data.likes });
				}
				} catch (err) {
					console.error("error", err);
				}
		})()
		: likesDispatch({ type: "SET_LIKED_LIST", payload: [] });
	}, [token]);

	const addToLikedList = async (video) => {
		try {
			const response = await axios.post(
			"/api/user/likes",
			{
				video,
			},
			{
				headers: { authorization: token },
			}
			);

			if (response.status === 201) {
				likesDispatch({ type: "SET_LIKED_LIST", payload: response.data.likes });
			}
		} catch (err) {
			console.error("error occurred", err.message);
		}
	};

	const removeFromLikedList = async (videoId) => {
	  	try {
			const response = await axios.delete(`/api/user/likes/${videoId}` ,
			{
				headers: { authorization: token }
			});

			if(response.status === 200 ) {
				likesDispatch({type: "SET_LIKED_LIST", payload: response.data.likes})
			}
	  	} catch(err) {
		  	console.error("error occured", err.message);
	  	}
  	}

	return (
	<LikesContext.Provider value={{ likesState, likesDispatch, addToLikedList, removeFromLikedList }}>
	  {children}
	</LikesContext.Provider>
  );
};

const useLikedList = () => useContext(LikesContext);

export { useLikedList, LikesProvider };