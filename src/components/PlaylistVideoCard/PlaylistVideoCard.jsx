import "./playlistvideocard.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePlaylist, useAuth, useHistoryList} from "../../contexts";

const PlaylistVideoCard = ({video}) => {

      const { playlistId } = useParams();

      const navigate = useNavigate();

      const { state } = useAuth();

      const { title, vidImage, creator, _id } = video;

      const { deleteVideoFromPlaylist } = usePlaylist();
      

      return (
            
            <div className="card_image flex">
                  <div className="card_vertical">
                        <div className="card_vertical_info flex flex_col flex_justify_start">

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

                                                </div>
                                          </div>
                                    </div>  
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export { PlaylistVideoCard };