import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import { useAuth } from "./authContext";
// import { playlistReducer } from "../reducer/playlistReducer";

const PlaylistContext = createContext();

const playlistReducer = (state, action) => {

	switch (action.type) {

            case "GET_PLAYLISTS":
                  return {
                        ...state,
                        playlistItems: action.payload,
                  };
            case "CREATE_PLAYLIST":
                  return {
                        ...state,
                        playlistItems: action.payload,
                  };
            case "DELETE_PLAYLIST":
                  return {
                        ...state,
                        playlistItems: action.payload,
                  };
            case "ADD_TO_PLAYLIST":
                  return {
                        ...state,
                        playlistItems: action.payload,
                  };
            case "DELETE_FROM_PLAYLIST":
                  return {
                        ...state,
                        playlistItems: action.payload,
                  };
		default:
			return state;
	}
};

const PlaylistProvider = ({ children }) => {
      
	const [ playlistState, playlistDispatch ] = useReducer(playlistReducer, {
		playlistItems: [],
	});

	const { state: { token } } = useAuth();

	useEffect(() => {
		token
		? (async () => {
			try {
				const response = await axios.get("/api/user/playlists", {
					headers: { authorization: token },
				});

				if (response.status === 200) {
					playlistDispatch({ type: "GET_PLAYLISTS", payload: response.data.playlists });
				}
				} catch (err) {
					console.error("error", err);
				}
		})()
		: playlistDispatch({ type: "GET_PLAYLISTS", payload: [] });
	}, [token]);

	const createPlaylist = async (playlist) => {
		try {
			const response = await axios.post(
			"/api/user/playlists",
			{
				playlist: { title: playlist }
			},
			{
				headers: { authorization: token },
			}
			);

			if (response.status === 201) {
				playlistDispatch({ type: "CREATE_PLAYLIST", payload: response.data.playlists });
			}
		} catch (err) {
			console.error("error occurred", err.message);
		}
	};

	const deletePlaylist = async (playlistId) => {
	  	try {
			const response = await axios.delete(`/api/user/playlists/${playlistId}` ,
			{
				headers: { authorization: token }
			});

			if(response.status === 200 ) {
				playlistDispatch({ type: "DELETE_PLAYLIST", payload: response.data.playlists })
			}
	  	} catch(err) {
		  	console.error("error occured", err.message);
	  	}
  	}

      const addToPlaylist = async (playlistId, video) => {
            try {
                  const response = await axios.delete(`/api/user/playlists/${playlistId}` ,
                  {
                        video
                  },
                  {
                        headers: { authorization: token }
                  });

                  if(response.status === 200 ) {
                        playlistDispatch({ type: "ADD_TO_PLAYLIST", payload: response.data.playlists })
                  }
            } catch(err) {
                  console.error("error occured", err.message);
            }
      }

      const deleteFromPlaylist = async (playlistId, videoId) => {
            try {
                  const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}` ,
                  {
                        headers: { authorization: token }
                  });
      
                  if(response.status === 200 ) {
                        playlistDispatch({ type: "DELETE_FROM_PLAYLIST", payload: response.data.playlists })
                  }
            } catch(err) {
                  console.error("error occured", err.message);
            }
      }

	return (
            <PlaylistContext.Provider value={{ playlistState, playlistDispatch, createPlaylist, deletePlaylist, addToPlaylist, deleteFromPlaylist }}>
                  {children}
            </PlaylistContext.Provider>
      );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };