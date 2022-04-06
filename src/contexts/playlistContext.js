import axios from "axios";
import { toast } from "react-hot-toast";
import { createContext, useReducer, useContext, useEffect } from "react";
import { useAuth } from "./authContext";
// import { playlistReducer } from "../reducer/playlistReducer";

const PlaylistContext = createContext();

const playlistReducer = (state, action) => {

	switch (action.type) {

            case "GET_PLAYLISTS":
                  return {
                        ...state,
                        playlistsItems: action.payload,
                  };
            case "CREATE_PLAYLIST":
                  return {
                        ...state,
                        playlistsItems: action.payload,
                  };
            case "DELETE_PLAYLIST":
                  return {
                        ...state,
                        playlistsItems: action.payload,
                  };
            case "ADD_VIDEO_TO_PLAYLIST":
                  return {
                        ...state,
                        playlistsItems: state.playlistsItems.map((playlist) => playlist._id === action.payload._id ? action.payload : playlist) 
                  };
            case "DELETE_VIDEO_FROM_PLAYLIST":
                  return {
                        ...state,
                        playlistsItems: state.playlistsItems.map((playlist) => playlist._id === action.payload._id ? action.payload : playlist)
                  };
		default:
			return state;
	}
};

const PlaylistProvider = ({ children }) => {
      
	const [ playlistState, playlistDispatch ] = useReducer(playlistReducer, {
		playlistsItems: [],
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
                              toast.error("Error occured while fetching playlist")
				}
		})()
		: playlistDispatch({ type: "GET_PLAYLISTS", payload: [] });
	}, [token]);

	const createPlaylist = async (playlistName) => {
		try {
			const response = await axios.post(
			"/api/user/playlists",
			{
				playlist: { title: playlistName.playlist }
			},
			{
				headers: { authorization: token },
			}
			);

			if (response.status === 201) {
                        toast.success("Playlist created.", { position: "top-right" });
				playlistDispatch({ type: "CREATE_PLAYLIST", payload: response.data.playlists });
			}
		} catch (err) {
			console.error("error occurred", err.message);
                  toast.error("Error occurred while creating playlist")
		}
	};

	const deletePlaylist = async (playlistId) => {
	  	try {
			const response = await axios.delete(`/api/user/playlists/${playlistId}` ,
			{
				headers: { authorization: token }
			});

			if(response.status === 200 ) {
                        toast.success("Playlist deleted.", { position: "top-right" });
				playlistDispatch({ type: "DELETE_PLAYLIST", payload: response.data.playlists })
			}
	  	} catch(err) {
		  	console.error("error occured", err.message);
                  toast.error("Error occurred while deleting playlist")
	  	}
  	}

      const addVideoToPlaylist = async (playlistId, video) => {
            try {
                  const response = await axios.delete(`/api/user/playlists/${playlistId}` ,
                  {
                        video
                  },
                  {
                        headers: { authorization: token }
                  });

                  if(response.status === 200 ) {
                        toast.success("Added to playlist ${playlistId.title}.", { position: "top-right" });
                        playlistDispatch({ type: "ADD_VIDEO_TO_PLAYLIST", payload: response.data.playlists });
                  }
            } catch(err) {
                  console.error("error occured", err.message);
                  toast.error("Error occurred while adding into playlist")
            }
      }

      const deleteVideoFromPlaylist = async (playlistId, videoId) => {
            try {
                  const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}` ,
                  {
                        headers: { authorization: token }
                  });
      
                  if(response.status === 200 ) {
                        toast.success("Deleted from playlist ${playlistId.title}.", { position: "top-right" });
                        playlistDispatch({ type: "DELETE_VIDEO_FROM_PLAYLIST", payload: response.data.playlists })
                  }
            } catch(err) {
                  console.error("error occured", err.message);
                  toast.error("Error occurred while deleting from playlist")
            }
      }

	return (
            <PlaylistContext.Provider value={{ playlistState, playlistDispatch, createPlaylist, deletePlaylist, addVideoToPlaylist, deleteVideoFromPlaylist }}>
                  {children}
            </PlaylistContext.Provider>
      );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };