import "./playlist.css";
import { Header, PlaylistCard } from "../../components";
import { usePlaylist } from "../../contexts";
import { useState } from "react";


const Playlist = () => {

    const { playlistState, createPlaylist } = usePlaylist();

    const [playlistModal, setPlaylistModal] = useState(false);

    const [playlistName, setPlaylistName] = useState({ playlist: "" });

    const playlistsCounter = playlistState.playlistsItems.length;

    const playlistHandler = () => {

        createPlaylist(playlistName);
        setPlaylistModal(false);
    }

    return (
        <div>
            <Header />

            {playlistsCounter !== 0
                ?
                <div className="history_container flex flex_col">

                    <div className="listItems_wrapper">
                        <div className="create_playlist flex flex_justify_between">

                            <h3>Playlist ({playlistsCounter})</h3>

                            <button
                                className="icon_btn create_playlist_btn"
                                onClick={() => setPlaylistModal(true)}
                            >
                                <div className="playlist_add_btns flex flex_align_center">
                                    <i className="fa-solid fa-plus add_btn"></i>
                                    <span className="playlist_text add_btn">Playlist</span>
                                </div>

                            </button>

                        </div>
                    </div>

                    <div className="playlist_container flex flex_wrap">
                        {playlistState.playlistsItems.map((playlist) => <PlaylistCard key={playlist._id} playlist={playlist} />)}
                    </div>

                </div>
                :
                <div className="list_wrapper">

                    <div className="create_playlist flex flex_justify_between">

                        <h3>Playlist ({playlistsCounter})</h3>

                        <button
                            className="icon_btn create_playlist_btn"
                            onClick={() => setPlaylistModal(true)}
                        >
                            <div className="playlist_add_btns flex flex_align_center">
                                <i className="fa-solid fa-plus add_btn"></i>
                                <span className="playlist_text add_btn">Playlist</span>
                            </div>
                        </button>

                    </div>
                </div>
            }

            {/* Playlist Modal */}

            <div className="modal_container flex flex_col flex_justify_center flex_align_center" style={playlistModal === true ? { display: "flex" } : { display: "none" }}>

                <div className="create_playlist_modal" >

                    <div className="modal_wrapper flex flex_col flex_justify_center">

                        <div className="modal_close_btn flex flex_justify_between">
                            <h2 >Playlist</h2>
                            <i class="fa-solid fa-circle-xmark" onClick={() => setPlaylistModal(false)}></i>
                        </div>

                        <div>
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
                            className="create_playlist_btn center flex flex_justify_center"
                            onClick={() => playlistHandler()}
                        >
                            <i className="fa-solid fa-plus add_btn tools_icon icon_circle_plus"> <span > Playlist</span></i>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export { Playlist };