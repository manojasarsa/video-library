import "./watchlater.css";
import { Link } from "react-router-dom";
import { Header, VideoCard } from "../../components";
import { useWatchLaterList } from "../../contexts";

const WatchLater = () => {

    const { watchLaterState } = useWatchLaterList();
    const watchLaterCounter = watchLaterState.watchLaterItems.length;

    return (

        <div>
            <Header />

            {watchLaterCounter !== 0
                ?
                <div>

                    <div className="liked_list videolist flex flex_wrap">
                        {watchLaterState.watchLaterItems.map((video) => <VideoCard key={video._id} video={video} />)}
                    </div>

                </div>
                :
                <div className="list_wrapper">
                    <div className="list_container flex flex_col flex_justify_center flex_align_center">
                        <i className="fa-solid fa-clock music_icon"></i>
                        <h3 className="playlist_title">Empty Watch Later List</h3>
                        <Link to="/videolisting"> <i className="fa-solid fa-plus add_btn"></i> </Link>
                    </div>
                </div>
            }

        </div>
    );
}

export { WatchLater };