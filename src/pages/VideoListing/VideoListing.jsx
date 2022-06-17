import "./videolisting.css";
import { Header, VideoCard } from "../../components";
import { useVideos } from "../../contexts";
import { getFilteredList, searchByName } from "../../utils/filterMethod";
import { useCategory } from "../../contexts";
import { useState } from "react";

const VideoListing = () => {

    const { categoryState, categoryDispatch, getActiveCategory } = useCategory();

    const { videosState } = useVideos();

    const { videos } = videosState;

    const filteredList = getFilteredList(videos, categoryState.categoryName);

    const getSearchedItem = searchByName(filteredList, categoryState.searchQuery);

    return (
        <div>
            <Header />

            <div className="videos_container">
                <div class="nav_right flex flex_justify_center flex_align_center vid_categories">
                    <button  
                        onClick={() => {
                            getActiveCategory("all");
                            categoryDispatch({ type: "SET_CATEGORY", payload: "ALL" })}}
                        className="nav_categories" id="all">
                        ALL
                    </button>

                    <button  
                        onClick={() => { 
                            getActiveCategory("music");
                            categoryDispatch({ type: "SET_CATEGORY", payload: "MUSIC" }); 
                        }}
                        className="nav_categories" id="music">
                        MUSIC
                    </button>

                    <button  
                        onClick={() => { 
                            getActiveCategory("vlogs");
                            categoryDispatch({ type: "SET_CATEGORY", payload: "VLOGS" }); 
                        }}
                        className="nav_categories" id="vlogs">
                        VLOGS
                    </button>

                    <button  
                        onClick={() => { 
                            getActiveCategory("standup");
                            categoryDispatch({ type: "SET_CATEGORY", payload: "STANDUP COMEDY" });
                        }}
                        className="nav_categories" id="standup">
                        STANDUP COMEDY
                    </button>

                    <button  
                        onClick={() => { 
                            getActiveCategory("sports");
                            categoryDispatch({ type: "SET_CATEGORY", payload: "SPORTS" });
                        }}
                        className="nav_categories" id="sports">
                        SPORTS
                    </button>

                    <button  
                        onClick={() => { 
                            getActiveCategory("web");
                            categoryDispatch({ type: "SET_CATEGORY", payload: "WEB DEV" });
                        }}
                        className="nav_categories" id="web">
                        WEB DEV
                    </button>

                </div>

                <div className="videolist flex flex_wrap">
                    {getSearchedItem.map((item) =>
                        <VideoCard key={item._id} video={item} />)}
                </div>
            </div>
        </div>
    );
}

export { VideoListing };