import "./playlist.css";
import { Header} from "../../components";

const Playlist = () => {
      return (
            <div>
                  <Header />
                  
                  <div className="list_wrapper">
                        <div className="list_container flex flex_col flex_justify_center flex_align_center">
                              <i className="fa-solid fa-music music_icon"></i>
                              <h3 className="playlist_title">Empty Playlist</h3>
                              <i className="fa-solid fa-plus add_btn"></i>
                        </div>
                  </div>
            </div>
      );
}

export {Playlist};