import "./playlistvideocard.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../contexts";

const PlaylistVideoCard = ({ video }) => {

    const { playlistId } = useParams();

    const { title, vidImage, _id } = video;

    const { deleteVideoFromPlaylist } = usePlaylist();

    return (

        <div className="card_image flex">
            <div className="card_vertical">
                <div className="card_vertical_info flex flex_col flex_justify_start">

                    <div className="playlist_video_wrapper flex ">

                        <Link to={`/videos/${_id}`}>
                            <img className="img_responsive adjust_image" src={vidImage} alt={title} />
                        </Link>

                        <div className="playlist_title flex flex_justify_between flex_align_center delete_video">

                            {title}

                            <i
                                className="far fa-trash-can delete_all_icon"
                                onClick={() => deleteVideoFromPlaylist(playlistId, _id)}> </i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { PlaylistVideoCard };