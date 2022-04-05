import "./videolisting.css";
import { Header, VideoCard} from "../../components";
import { useVideos } from "../../contexts";

const VideoListing = () => {

      const { videosState, videosDispa} = useVideos();

      const { videos, categories } = videosState;


      // const getFilteredList = (videoList, categories) => {
      //       const filteredList = [];

      //       let count = 0;
      //       for (let category in categories) {
      //             if (categories[category]) {
      //                   let newList = videoList.filter((item) => category === item.categoryName.toLowerCase());
      //                   filteredList.push(...newList);
      //             } else {
      //                   count ++;
      //             }
      //       }
      //       return count === 5 ? videoList : filteredList;
      // }


      // const filteredList = getFilteredList(videos, categories);
      
      return (
            <div>
                  <Header />

                  <div className="videos_container">
                        <div class="nav_right flex flex_justify_between flex_align_center">
                              <button className="nav_categories" >MUSIC</button>
                              <button className="nav_categories" >VLOGS</button>
                              <button className="nav_categories" >STANDUP COMEDY</button>
                              <button className="nav_categories" >SPORTS</button>
                              <button className="nav_categories" >WEB DEV</button>
                        </div>
                        
                        <div className="videolist flex flex_wrap">
                              {videos.map((item) => <VideoCard key={item._id} video={item} /> )}
                        </div>
                  </div>
            </div>
      );
}

export {VideoListing};