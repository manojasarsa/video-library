import "./videolisting.css";
import { useReducer } from "react";
import { Header, VideoCard} from "../../components";
import { useVideos } from "../../contexts";
import { categoryReducer } from "../../reducer/categoryReducer";

const VideoListing = () => {

      const [ categoryState, categoryDispatch ] = useReducer(categoryReducer, {
            categoryName: ""
      });

      const { videosState } = useVideos();

      const { videos } = videosState;

      const getFilteredList = (videoList, category) => {
      const newList = videoList.filter((item) => item.category === category);
      return newList.length > 0 ? newList : videoList
      }

      const filteredList = getFilteredList(videos, categoryState.categoryName);

      return (
      <div>
            <Header />

            <div className="videos_container">
                  <div class="nav_right flex flex_justify_between flex_align_center">
                        <button onClick={()=> categoryDispatch({ type: "SET_CATEGORY" , payload: "MUSIC"})}
                              className="nav_categories" >MUSIC</button>
                        <button onClick={()=> categoryDispatch({ type: "SET_CATEGORY" , payload: "VLOGS"})}
                              className="nav_categories" >VLOGS</button>
                        <button onClick={()=> categoryDispatch({ type: "SET_CATEGORY" , payload: "STANDUP COMEDY"})}
                              className="nav_categories" >STANDUP COMEDY</button>
                        <button onClick={()=> categoryDispatch({ type: "SET_CATEGORY" , payload: "SPORTS"})}
                              className="nav_categories" >SPORTS</button>
                        <button onClick={()=> categoryDispatch({ type: "SET_CATEGORY" , payload: "WEB DEV"})}
                              className="nav_categories" >WEB DEV</button>
                  </div>

                  <div className="videolist flex flex_wrap">
                        {filteredList.map((item) =>
                        <VideoCard key={item._id} video={item} />)}
                  </div>
            </div>
      </div>
      );
}

export {VideoListing};