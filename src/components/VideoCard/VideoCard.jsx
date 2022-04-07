import "./videocard.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useLikedList, useWatchLaterList, useHistoryList, usePlaylist } from "../../contexts";

const VideoCard = ({video}) => {

      const [playlistModal, setPlaylistModal] = useState(false);

      const [playlistName, setPlaylistName] = useState({playlist: ""});

      const { state } = useAuth();

      const { likesState, addToLikedList, removeFromLikedList } = useLikedList();

      const { watchLaterState, addToWatchLaterList, removeFromWatchLaterList } = useWatchLaterList();

      const { historyState, addToHistoryList, removeFromHistoryList } = useHistoryList();

      const { playlistState, createPlaylist, addVideoToPlaylist } = usePlaylist();

      const { title, vidImage, creator, _id } = video;

      const likedItemExist = likesState.likedItems.find((vid) => vid._id === video._id);

      const watchLaterItemExist = watchLaterState.watchLaterItems.find((item) => item._id === video._id);

      const historyItemExist = historyState.historyItems.find((item) => item._id === video._id);

      let location = useLocation();

      const isHistory = location.pathname === "/history";

      const playlistHandler = () => createPlaylist(playlistName);

      const modalHandler = () => setPlaylistModal(true);

      return (
            
            <div className="card_image flex">
                  <div className="card_vertical">
                        <div className="card_vertical_info flex flex_col flex_justify_start">

                              {historyItemExist
                              ? ( <>

                              <Link to = {`/videos/${_id}`}>
                                    <img className="img_responsive adjust_image" src={vidImage} alt={title} />
                              </Link>
                              {isHistory && <Link to="/history" className="icon_btn" onClick={() => removeFromHistoryList(video._id)}>
                                    <i className="far fa-trash-can delete_btn"></i>
                              </Link> }

                              </>)

                              : <Link to = {`/videos/${_id}`}
                                    onClick={() => addToHistoryList(video)}>
                                    <img className="img_responsive adjust_image" src={vidImage} alt={title} />
                              </Link>
                              }
                              
                              <div className="card_details_box flex ">
                                    
                                    <img className="avatar_img" src= {vidImage} alt= {title} />

                                    <div className="video_details_box ">

                                          <div className="card_title "> {title} </div>
                                                                  
                                          <div className="channel_box flex flex_justify_between">

                                                <div className="creator_box flex">
                                                      <div className="channel_name"> {creator} </div>
                                                      <i className="verfiy_icon fa-solid fa-circle-check"></i>
                                                </div>
                                                
                                                <div className="icon_box flex flex_justify_between flex_align_center">

                                                      { likedItemExist
                                                      ? <button className="icon_btns" onClick={() => removeFromLikedList(video._id)}>
                                                            <i className="fa fa-thumbs-up like_icons"></i>
                                                      </button>
                                                      : state.isAuth ? <button className="icon_btn" onClick={() => addToLikedList(video)}>
                                                            <i className="far fa-thumbs-up like_icons"></i>
                                                      </button>
                                                      : <Link className="icon_btn" to="/login" onClick={() => addToLikedList(video)}>
                                                            <i className="far fa-thumbs-up like_icons"></i>
                                                      </Link>
                                                      }

                                                      { watchLaterItemExist
                                                      ? <button className="icon_btns" onClick={() => removeFromWatchLaterList(video._id)}>
                                                            <i className="fa fa-clock like_icons"></i>
                                                      </button>
                                                      : state.isAuth ? <button className="icon_btn" onClick={() => addToWatchLaterList(video)}>
                                                            <i className="far fa-clock like_icons"></i>
                                                      </button>
                                                      : <Link className="icon_btn" to="/login" onClick={() => addToWatchLaterList(video)}>
                                                            <i className="far fa-clock like_icons"></i>
                                                      </Link>
                                                      }

                                                      { state.isAuth ? <button className="icon_btn" onClick={() => modalHandler()}>
                                                            <i className="fa fa-folder-plus like_icons"></i>
                                                      </button>
                                                      : <Link to="/login" className="icon_btn" >
                                                      <i className="fa fa-folder-plus like_icons"></i>
                                                      </Link>
                                                      }

                                                      {/* PLAYLIST MODAL */}

                                                      <div  className="playlist_modal_container flex flex_col flex_justify_center flex_align_center" 
                                                            style={playlistModal === true ? {display: "flex"} : {display: "none"}} >

                                                            <div className="create_playlist_wrapper" >

                                                                  <h3 className="space_between btn_modal_close flex flex_justify_between">

                                                                        Playlist
                                                                        <i class="fa-solid fa-circle-xmark icons" onClick={() => setPlaylistModal(false) }></i>

                                                                  </h3>                            

                                                                  <div className="lists_playlist flex flex_col">

                                                                        {playlistState.playlistsItems?.map((data, i) => {

                                                                              return data.videos.find((vid) => vid._id === video._id) 

                                                                              ? (                                            
                                                                                    <i className="fa-solid fa-check playlist_one icons icon_circle_plus flex flex_justify_start flex_align_center"> 
                                                                                          {data.title} 
                                                                                    </i>
                                                                              ) : (
                                                                                    <i className="fa-solid fa-plus playlist_one icons icon_circle_plus" 
                                                                                          key={data._id}
                                                                                          onClick={() => addVideoToPlaylist(data._id, video)}> 
                                                                                          {data.title} 
                                                                                    </i>
                                                                              );
                                                                        })}
                                                                  </div>

                                                                  <div className="add_new_playlist">

                                                                        <div className="input_playlist_wrapper">
                                                                              <input 
                                                                                    type="text"
                                                                                    className="input"
                                                                                    placeholder="Enter Playlist Name"
                                                                                    onChange={(e) => 
                                                                                          setPlaylistName((prev) => ({
                                                                                                ...prev,
                                                                                                playlist: e.target.value,
                                                                                          }))
                                                                                    }
                                                                              />
                                                                        </div>

                                                                        <button className="btn_playlist_create center" onClick={() => playlistHandler()} >

                                                                        <i class="fa-solid fa-circle-check icon_circle_plus"></i> Create New Playlist  
                                                                        </button>

                                                                  </div>
                                                            </div>
                                                      </div>                                         
                                                </div>
                                          </div>
                                    </div>  
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export {VideoCard};