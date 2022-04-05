import { createContext, useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";

const VideoContext = createContext();

const videosReducer = (state, action) => {
	switch (action.type) {

	case "SET_VIDEOS_LIST":
		return {
			...state,
			videos: action.payload,
		};

      case "SET_CATEGORY_LIST":
            return {
                  ...state,
                  categories: action.payload,
            };
	default:
		return state;
	}
};

export {videosReducer};

const VideoProvider = ({children}) => {

      // const [videos, setVideos] = useState([]);
      const [loader, setLoader] = useState(false);
      const [error, setError] = useState("");

      const [ videosState, videosDispatch ] = useReducer(videosReducer, {
		videos: [],
            categories: []
	});

      useEffect(() => {
            ( async() => {
                  try{
                  setLoader(true);
                  setError("");
                  const response = await axios.get("/api/videos");
                  if(response.status === 200) {
                        setLoader(false);
                        // setVideos(response.data.videos);
                        videosDispatch({ type: "SET_VIDEOS_LIST", payload: response.data.videos });
                  }
                  } catch(error) {
                  setError(error);
                  setLoader(false);
                  }
            }) ()
      },[])

      useEffect(() => {
            ( async() => {
                  try{
                  setLoader(true);
                  setError("");
                  const response = await axios.get("/api/categories");
                  if(response.status === 200) {
                        setLoader(false);
                        // setVideos(response.data.videos);
                        videosDispatch({ type: "SET_CATEGORY_LIST", payload: response.data.categories });
                  }
                  } catch(error) {
                  setError(error);
                  setLoader(false);
                  }
            }) ()
      },[])


      return (
            <VideoContext.Provider value={{ videosState, videosDispatch, loader, error }}>
                  {children}
            </VideoContext.Provider>
      )
}

const useVideos = () => useContext(VideoContext);

export {useVideos, VideoProvider};