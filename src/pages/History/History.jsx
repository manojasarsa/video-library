import "./history.css";
import { useHistoryList } from "../../contexts";
import { Header, VideoCard } from "../../components";
import { Link } from "react-router-dom";

const History = () => {


    const { historyState, removeAllHistory } = useHistoryList();
    const historyCounter = historyState.historyItems.length;

    return (
        <div>
            <Header />

            {historyCounter !== 0
                ?
                <div className="history_container flex flex_col">
                    <div className="clear_all_btn">
                        <button className="icon_btn" onClick={() => removeAllHistory()}>
                            <i className="far fa-trash-can delete_all_icon"> <span className="clear_all_text">CLEAR ALL</span></i>
                        </button>
                    </div>
                    <div className="history_list videolist flex flex_wrap">
                        {historyState.historyItems.map((video) => <VideoCard key={video._id} video={video} />)}
                    </div>
                </div>
                :
                <div className="list_wrapper">
                    <div className="list_container flex flex_col flex_justify_center flex_align_center">
                        <i className="fa-solid fa-clock-rotate-left music_icon"> </i>
                        <h3 className="playlist_title">No History</h3>
                        <Link to="/videolisting"> <i className="fa-solid fa-plus add_btn"></i> </Link>
                    </div>
                </div>
            }

        </div>
    )
}

export { History };