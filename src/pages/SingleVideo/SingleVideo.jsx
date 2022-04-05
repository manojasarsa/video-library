import "./singlevideo.css";
import { useParams } from "react-router-dom";
import { Header} from "../../components";
import { VideoIframe } from "../../utils/VideoIframe";
import { useVideos } from "../../contexts";

const SingleVideo = () => {

      const { videoId } = useParams();

      const { videos } = useVideos();

      const matchedVideo = videos?.find((vid) => vid._id === videoId);

      return (
            <div>
                  <Header />

                  <div className="single_video_container">
                        
                        <div className="video-wrapper">
                              <VideoIframe videoId = {matchedVideo._id}/>
                        </div>

                  </div>

            </div>
      )
}

export {SingleVideo};