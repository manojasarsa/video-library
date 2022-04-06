import "./playlist.css";
import { Header, VideoCard} from "../../components";
import { usePlaylist } from "../../contexts";
import { Link } from "react-router-dom";
import { useState } from "react";


const Playlist = () => {

      const { playlistState, createPlaylist } = usePlaylist();

      const [playlistModal, setPlaylistModal] = useState(false);

      const [playlistName, setPlaylistName] = useState({playlist: ""});

      // const { playlistsItems } = playlistState;

      // console.log("state value ",playlistState)

      const playlistsCounter = playlistState.playlistsItems.length;

      console.log("counterValue", playlistsCounter);

      const playlistHandler = () => {
            
            createPlaylist(playlistName);
            setPlaylistModal(false);
      }

      console.log("PlayList Array: ", playlistState.playlistsItems);
      
      return (
            <div>
                  <Header />

                  { playlistsCounter !== 0
                  ?
                  <div className="history_container flex flex_col">

                        {/* <div className="clear_all_btn">

                              <h3>Playlist ({playlistsCounter})</h3>

                              <button className="icon_btn" onClick={() => setPlaylistModal(true)}>
                                    <i className="fa-solid fa-plus add_btn"> <span className="playlist_text">Playlist</span></i>
                              </button>

                        </div> */}

                        <div className="listItems_wrapper">
                              <div className="create_playlist flex flex_justify_between">

                                    <h3>Playlist ({playlistsCounter})</h3>

                                    <button 
                                          className="icon_btn create_playlist_btn" 
                                          onClick={() => setPlaylistModal(true)} 
                                    >
                                          <i className="fa-solid fa-plus add_btn">
                                                <span className="playlist_text">Playlist</span>
                                          </i>
                                    </button>

                              </div>
                        </div>



                        {/* <div className="history_list videolist flex flex_wrap">
                              { playlistState.playlistsItems.map((playlist) => <VideoCard key={playlist._id} playlist={playlist} /> ) }
                        </div> */}

                  </div>
                  : 
                  <div className="list_wrapper"> 

                        <div className="create_playlist flex flex_justify_between">

                              <h3>Playlist ({playlistsCounter})</h3>

                              <button 
                                    className="icon_btn create_playlist_btn" 
                                    onClick={() => setPlaylistModal(true)} 
                              >
                                    <i className="fa-solid fa-plus add_btn">
                                          <span className="playlist_text">Playlist</span>
                                    </i>
                              </button>

                        </div>

                        {/* <div className="list_container flex flex_col flex_justify_center flex_align_center">
                              <i className="fa-solid fa-music music_icon"></i>
                              <h3 className="playlist_title">Empty Playlist</h3>
                              <i className="fa-solid fa-plus add_btn"></i>
                        </div> */}
                  </div>
                  }

                  

                  {/* Modal */}

                  <div className="create_playlist_modal_wrapper" style={playlistModal === true ? {display: "flex"} : {display: "none"}}>

                        <div className="create_playlist_modal" >

                              <div className="space_between modal_close_button flex flex_justify_between">

                                    <h4 className="">Playlist</h4>
                                    <i class="fa-solid fa-circle-xmark" onClick={() => setPlaylistModal(false) }></i>

                              </div>

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

                              <button 
                                    className="btn_playlist_create center"
                                    onClick={() => playlistHandler()}
                              >
                                    <i className="fa-solid fa-plus add_btn tools_icon icon_circle_plus"> <span className="playlist_text">Playlist</span></i>
                              </button>
                        </div>
                  </div>
                  
            </div>
      );
}

export {Playlist};