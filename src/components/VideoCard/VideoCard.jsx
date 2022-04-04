import "./videocard.css";
import * as FaIcons from "react-icons/fa";

const VideoCard = ({video}) => {

      const {  title, vidImage, creator } = video;

      return (
            
            <div className="card_image flex">
                  <div className="card_vertical">
                        <div className="card_vertical_info flex flex_col flex_justify_start">

                              <img className="img_responsive adjust_image" src={vidImage} alt={title} />
                              
                              <div className="card_details_box flex ">
                                    
                                    <img className="avatar_img" src= {vidImage} alt= {title} />

                                    <div className="video_details_box ">

                                          <div className="card_title "> {title} </div>
                                                                  
                                          <div className="channel_box flex flex_justify_between">

                                                <div className="creator_box flex">
                                                      <div className="channel_name"> {creator} </div>
                                                      <FaIcons.FaCheckCircle className="verify_icon" />
                                                </div>
                                                
                                                <div className="icon_box flex flex_justify_between flex_align_center">
                                                      <FaIcons.FaThumbsUp className="sidebar_icons" />
                                                      <FaIcons.FaClock className="sidebar_icons" />
                                                      <FaIcons.FaFolderPlus className="sidebar_icons" />
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