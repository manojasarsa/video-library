import "./videolisting.css";
import { Header, VideoCard} from "../../components";
import { useVideos } from "../../contexts";

const VideoListing = () => {

      const { videos } = useVideos();
      
      return (
            <div>
                  <Header />

                  <div className="videos_container">
                        <div class="nav_right flex flex_justify_between flex_align_center">
                              <button className="nav_categories" >MUSIC</button>
                              <button className="nav_categories" >VLOGS</button>
                              <button className="nav_categories" >STANDUP COMEDY</button>
                              <button className="nav_categories" >SPORTS</button>
                              <button className="nav_categories" >WEB DEV</button>
                        </div>
                        
                        <div className="videolist flex flex_wrap">
                              {videos.map((item) => <VideoCard key={item._id} video={item} /> )}
                        </div>
                  </div>
            </div>
      );
}

export {VideoListing};