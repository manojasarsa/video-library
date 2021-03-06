import "./singlevideo.css";
import { Link, useParams } from "react-router-dom";
import { Header, PlaylistModal } from "../../components";
import { VideoIframe } from "../../utils/VideoIframe";
import { useAuth, useLikedList, useWatchLaterList, useVideos } from "../../contexts";
import { useState } from "react";

const SingleVideo = () => {

    const [playlistModal, setPlaylistModal] = useState(false);

    const [playlistName, setPlaylistName] = useState({ playlist: "" });

    const { videoId } = useParams();

    const { videosState } = useVideos();

    const { videos } = videosState;

    const matchedVideo = videos?.find((vid) => vid._id === videoId);

    const { state } = useAuth();

    const { likesState, addToLikedList, removeFromLikedList } = useLikedList();

    const { watchLaterState, addToWatchLaterList, removeFromWatchLaterList } = useWatchLaterList();

    const likedItemExist = likesState.likedItems.find((vid) => vid._id === matchedVideo._id);

    const watchLaterItemExist = watchLaterState.watchLaterItems.find((item) => item._id === matchedVideo._id);

    const modalHandler = () => setPlaylistModal(true);

    return (
        <div>
            <Header />

            <div style={{ marginTop: "12rem" }} className="single_video_container">

                <div className="single_video_wrapper">

                    <div className="video_player">

                        <VideoIframe videoId={matchedVideo._id} />

                        <div className="video_info" >

                            <h1 className="channel_info flex flex_justify_between flex_align_center">
                                {matchedVideo?.title}

                                <div className="nav_icons flex flex_justify_between flex_align_center">

                                    {likedItemExist
                                        ? <button className="icon_btns" onClick={() => removeFromLikedList(matchedVideo._id)}>
                                            <i className="fa fa-thumbs-up action_icons"></i>
                                        </button>
                                        : state.isAuth ? <button className="icon_btn" onClick={() => addToLikedList(matchedVideo)}>
                                            <i className="far fa-thumbs-up action_icons"></i>
                                        </button>
                                            : <Link className="icon_btn" to="/login" onClick={() => addToLikedList(matchedVideo)}>
                                                <i className="far fa-thumbs-up action_icons"></i>
                                            </Link>
                                    }

                                    {watchLaterItemExist
                                        ? <button className="icon_btns" onClick={() => removeFromWatchLaterList(matchedVideo._id)}>
                                            <i className="fa fa-clock action_icons"></i>
                                        </button>
                                        : state.isAuth ? <button className="icon_btn" onClick={() => addToWatchLaterList(matchedVideo)}>
                                            <i className="far fa-clock action_icons"></i>
                                        </button>
                                            : <Link className="icon_btn" to="/login" onClick={() => addToWatchLaterList(matchedVideo)}>
                                                <i className="far fa-clock action_icons"></i>
                                            </Link>
                                    }

                                    {state.isAuth ? <button className="icon_btn" onClick={() => modalHandler()}>
                                        <i className="fa fa-folder-plus like_icons"></i>
                                    </button>
                                        : <Link to="/login" className="icon_btn" >
                                            <i className="fa fa-folder-plus like_icons"></i>
                                        </Link>
                                    }

                                    <PlaylistModal 
                                        video={matchedVideo} 
                                        playlistModal={playlistModal} 
                                        setPlaylistModal={setPlaylistModal} 
                                        playlistName={playlistName} 
                                        setPlaylistName={setPlaylistName}     
                                    />

                                </div>
                            </h1>
                            <h3 className="creator_name">
                                {matchedVideo?.creator}
                                <i className="verfied_icon icons fa-solid fa-circle-check"></i>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SingleVideo };