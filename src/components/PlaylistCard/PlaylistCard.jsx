import "./playlistcard.css";
import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../../contexts";

const PlaylistCard = ({ playlist }) => {

    const { title, videos, _id } = playlist;

    const navigate = useNavigate();

    const { deletePlaylist } = usePlaylist();

    const playlistVideosHandler = () => {
        navigate(`/playlist/${_id}`)
    }

    return (

        <div className="playlist_card">
            <div className="playlist_info">

                <img
                    className="img_responsive adjust_image"
                    src="assets/playlist.jpg"
                    alt="playlist"
                    onClick={() => playlistVideosHandler()}
                />

                <h3 className="playlist_title flex flex_justify_between flex_align_center">
                    {title} ({videos.length})
                    <span>
                        <i
                            className="far fa-trash-can delete_all_icon"
                            onClick={() => deletePlaylist(_id)}> </i>
                    </span>
                </h3>
            </div>
        </div>

    );
}

export { PlaylistCard };