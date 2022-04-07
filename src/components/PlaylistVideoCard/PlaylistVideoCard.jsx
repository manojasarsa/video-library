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
                                    
                                    <img src= {vidImage} alt= {title} />

                                    <div className="playlist_title flex flex_justify_between flex_align_center">

                                          {title}

                                          <i 
                                          className="far fa-trash-can delete_all_icon"
                                          onClick={() => deleteVideoFromPlaylist(playlistId, _id)}> </i>
                                                         
                                    </div>  
                              </div>
                        </div>
                  </div>
            </div>

            // <div className="card_playlist">
            //       <div className="playlist_info">

            //             <img 
            //                   className="img_responsive adjust_image" 
            //                   src="assets/playlist.jpg" 
            //                   alt= "playlist"
            //                   onClick={() => playlistVideosHandler()} 
            //             />
                        
            //             <h3 className="playlist_title flex flex_justify_between flex_align_center">
            //                   {title} ({videos.length})
            //                   <span>
            //                         <i 
            //                         className="far fa-trash-can delete_all_icon"
            //                         onClick={() => deleteVideoFromPlaylist(playlistId, videoId)}> </i>
            //                   </span>
            //             </h3>
            //       </div>
            // </div>
      );
}

export { PlaylistVideoCard };