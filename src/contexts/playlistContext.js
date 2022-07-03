import axios from "axios";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { createContext, useReducer, useContext, useEffect } from "react";
import { useAuth } from "./authContext";
import { playlistReducer } from "../reducer/playlistReducer";

toast.configure();

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {

    const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
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
                    console.error("error is", err);
                }
            })()
            : playlistDispatch({ type: "GET_PLAYLISTS", payload: [] });
    }, [token]);

    const createPlaylist = async (playlistName, video) => {

        if (!playlistName.playlist) {
            toast("Enter name of playlist", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
        } else {

            console.log("playlistArray", playlistState.playlistsItems);
            
            const samePlaylist = playlistState.playlistsItems?.find((eachPlaylist) => 
                eachPlaylist.title === playlistName.playlist
            )

            console.log("samePlaylist", samePlaylist);
            console.log("newone", playlistName.playlist);

            if (samePlaylist) {
                toast("Playlist exist with same name", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
            } else {
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
                        toast("Playlist created", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
                        playlistDispatch({ type: "CREATE_PLAYLIST", payload: response.data.playlists });

                        let lengthOfPlaylists = response.data.playlists.length -1;


                        if (video) {
                            await addVideoToPlaylist( response.data.playlists[lengthOfPlaylists]._id, video);
                        }
                    }
                } catch (err) {
                    console.error("error occurred", err.message);
                }
            }
        }
    };

    const deletePlaylist = async (playlistId) => {
        try {
            const response = await axios.delete(`/api/user/playlists/${playlistId}`,
                {
                    headers: { authorization: token }
                });

            if (response.status === 200) {
                toast.success("Playlist deleted", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
                playlistDispatch({ type: "DELETE_PLAYLIST", payload: response.data.playlists })
            }
        } catch (err) {
            console.error("error occured", err.message);
        }
    }

    const addVideoToPlaylist = async (playlistId, video) => {
        try {
            const response = await axios.post(`/api/user/playlists/${playlistId}`,
                {
                    video
                },
                {
                    headers: { authorization: token }
                });

            if (response.status === 201) {
                toast(`Added to playlist ${response.data.playlist.title}`, { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
                playlistDispatch({ type: "ADD_VIDEO_TO_PLAYLIST", payload: response.data.playlist });
            }
        } catch (err) {
            console.error("error occured", err.message);
        }
    }

    const deleteVideoFromPlaylist = async (playlistId, videoId) => {
        try {
            const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,
                {
                    headers: { authorization: token }
                });

            if (response.status === 200) {
                toast(`Deleted from playlist ${response.data.playlist.title}`, { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
                playlistDispatch({ type: "DELETE_VIDEO_FROM_PLAYLIST", payload: response.data.playlist })
            }
        } catch (err) {
            console.error("error occured", err.message);
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