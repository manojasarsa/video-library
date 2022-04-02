import "./videolisting.css";
import { Header} from "../../components";
import { useVideos } from "../../contexts";

const VideoListing = () => {
      return (
            <div>
                  <Header />

                  <div className="videos_container">
                        
                        <div class="nav_right flex flex_justify_between flex_align_center">
                              <button className="nav_categories" >MUSIC BANDS</button>
                              <button className="nav_categories" >VLOGS</button>
                              <button className="nav_categories" >STANDUP COMEDY</button>
                              <button className="nav_categories" >SPORTS</button>
                              <button className="nav_categories" >WEB DEV</button>
                        </div>
                  </div>
            </div>
      );
}

export {VideoListing};