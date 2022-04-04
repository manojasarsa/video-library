import "./liked.css";
import { Link } from "react-router-dom";
import { Header, VideoCard} from "../../components";
import { useLikedList } from "../../contexts";

const Liked = () => {

      const { likesState } = useLikedList();
      const likedListCounter = likesState.likedItems.length;

      return (
            <div>
                  <Header />
                  
                  { likedListCounter !== 0
                  ?
                  <div>

                        { likedListCounter === 0 
                              ? <h2 className="cart_title">LIKED VIDEOS </h2>
                              : <h2 className="cart_title">LIKED VIDEOS({likedListCounter})</h2>
                        }

                        <div className="videolist flex flex_wrap">
                              {likesState.likedItems.map((video) => <VideoCard key={video._id} video={video} /> )}
                        </div>

                  </div>
                  : 
                  <div className="list_wrapper">
                        <div className="list_container flex flex_col flex_justify_center flex_align_center">
                              <i className="fa-solid fa-thumbs-up music_icon"></i>
                              <h3 className="playlist_title">No Liked Video</h3>
                              <i className="fa-solid fa-plus add_btn"></i>
                        </div>
                  </div>
                  }
                  
            </div>
      );
}

export {Liked};