import "./videolisting.css";
import { Header, VideoCard } from "../../components";
import { useVideos } from "../../contexts";
// import { categoryReducer } from "../../reducer/categoryReducer";
import { getFilteredList, searchByName } from "../../utils/filterMethod";
// import { createContext, useState, useEffect, useContext, useReducer } from "react";
import { useCategory } from "../../contexts";



const VideoListing = () => {

    const { categoryState, categoryDispatch } = useCategory();

    const { videosState } = useVideos();

    const { videos } = videosState;

    const filteredList = getFilteredList(videos, categoryState.categoryName);

    const getSearchedItem = searchByName(filteredList, categoryState.searchQuery);

    return (
        <div>
            <Header />

            <div className="videos_container">
                <div class="nav_right flex flex_justify_between flex_align_center">
                    <button onClick={() => categoryDispatch({ type: "SET_CATEGORY", payload: "ALL" })}
                        className="nav_categories" >ALL</button>
                    <button onClick={() => categoryDispatch({ type: "SET_CATEGORY", payload: "MUSIC" })}
                        className="nav_categories" >MUSIC</button>
                    <button onClick={() => categoryDispatch({ type: "SET_CATEGORY", payload: "VLOGS" })}
                        className="nav_categories" >VLOGS</button>
                    <button onClick={() => categoryDispatch({ type: "SET_CATEGORY", payload: "STANDUP COMEDY" })}
                        className="nav_categories" >STANDUP COMEDY</button>
                    <button onClick={() => categoryDispatch({ type: "SET_CATEGORY", payload: "SPORTS" })}
                        className="nav_categories" >SPORTS</button>
                    <button onClick={() => categoryDispatch({ type: "SET_CATEGORY", payload: "WEB DEV" })}
                        className="nav_categories" >WEB DEV</button>
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