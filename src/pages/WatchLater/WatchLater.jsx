import "./watchlater.css";
import { Header} from "../../components";

const WatchLater = () => {
      return (
            <div>
                  <Header />
                  
                  <div className="list_wrapper">
                        <div className="list_container flex flex_col flex_justify_center flex_align_center">
                              <i className="fa-solid fa-clock music_icon"></i>
                              <h3 className="playlist_title">Empty Watch Later List</h3>
                              <i className="fa-solid fa-plus add_btn"></i>
                        </div>
                  </div>
            </div>
      );
}

export {WatchLater};