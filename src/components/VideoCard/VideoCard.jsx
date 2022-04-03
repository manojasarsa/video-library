import "./videocard.css";
import * as FaIcons from "react-icons/fa";

const VideoCard = ({video}) => {

      const {  title, description, vidImage, creator, category } = video;

      // console.log("HI")

      // console.log("video: ", video);

      console.log("videos in card: ", video);
      console.log("video-title:", title );
      console.log("d", description );
      console.log("act", category);
      console.log("i", vidImage);
      console.log("c", creator);

      return (
            <div className="parent flex ">
                  <div className="card_container flex flex_col">
                        <div className="card_img_container">
                              <img className="card_img" src= {vidImage} alt= {title} />
                        </div>
                        <div className="card_details_box flex ">

                              <img className="avatar_img" src= {vidImage} alt= {title} />

                              <div className="video_details_box ">
                                    <div className="card_title"> {title} </div>
                                                                
                                    <div className="channel_box flex flex_justify_between">

                                          <div className="creator_box flex">
                                                <div className="channel_name"> {creator} </div>
                                                <FaIcons.FaCheckCircle className="verify_icon" />
                                          </div>
                                          
                                          <div className="nav_right flex flex_justify_between flex_align_center">
                                                <FaIcons.FaThumbsUp className="sidebar_icons" />
                                                <FaIcons.FaClock className="sidebar_icons" />
                                                <FaIcons.FaFolderPlus className="sidebar_icons" />
                                          </div>
                                    </div>
                              </div>  
                        </div>
                  </div>
            </div>
      );
}

export {VideoCard};