import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const VideoContext = createContext();

const VideoProvider = ({children}) => {

      const [videos, setVideos] = useState([]);
      const [loader, setLoader] = useState(false);
      const [error, setError] = useState("");

      useEffect(() => {
            ( async() => {
                  try{
                  setLoader(true);
                  setError("");
                  const response = await axios.get("/api/videos");
                  if(response.status === 200) {
                        setLoader(false);
                        setVideos(response.data.videos);
                  }
                  } catch(error) {
                  setError(error);
                  setLoader(false);
                  }
            }) ()
      },[])

      return (
            <VideoContext.Provider value={{videos, loader, error}}>
                  {children}
            </VideoContext.Provider>
      )
}

const useVideos = () => useContext(VideoContext);

export {useVideos, VideoProvider};