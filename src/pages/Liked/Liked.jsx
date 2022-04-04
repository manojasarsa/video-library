import "./liked.css";
import { Header} from "../../components";

const Liked = () => {
      return (
            <div>
                  <Header />
                  
                  <div className="list_wrapper">
                        <div className="list_container flex flex_col flex_justify_center flex_align_center">
                              <i className="fa-solid fa-thumbs-up music_icon"></i>
                              <h3 className="playlist_title">No Liked Video</h3>
                              <i className="fa-solid fa-plus add_btn"></i>
                        </div>
                  </div>
            </div>
      );
}

export {Liked};