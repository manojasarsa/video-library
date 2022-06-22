import { usePlaylist } from "../../contexts";

export const PlaylistModal = ({ video, playlistModal, setPlaylistModal, playlistName, setPlaylistName }) => {

    const { playlistState, createPlaylist, addVideoToPlaylist, deleteVideoFromPlaylist } = usePlaylist();

    const playlistHandler = () => {
        createPlaylist(playlistName, video);
    }

    return (
        <div className="modal_container flex flex_col flex_justify_center flex_align_center"
            style={playlistModal === true ? { display: "flex" } : { display: "none" }} >

            <div className="create_playlist_wrapper" >

                <div className="modal_wrapper flex flex_col flex_justify_center">

                    <div className="modal_close_btn flex flex_justify_between">

                        <h3>Playlist</h3>
                        <i class="fa-solid fa-circle-xmark " onClick={() => setPlaylistModal(false)}></i>
                    </div>

                    {/* List all the playlists available in playListItems array */}

                    <div className="lists_playlist flex flex_col">

                        {playlistState.playlistsItems?.map((eachPlaylist, i) => {

                            // checking all videos in eachPlaylist with the given video if present or not

                            return eachPlaylist.videos.find((vid) => vid._id === video._id)

                                ? (
                                    <div className="playlist_list_btns flex flex_align_center">
                                        <i
                                            className="fa-solid playlist_one fa-check icon_circle_plus"
                                            onClick={() =>
                                                deleteVideoFromPlaylist(eachPlaylist._id, video._id)
                                            }>
                                        </i>
                                        <span className="play_title">
                                            {eachPlaylist.title}
                                        </span>
                                    </div>

                                ) : (
                                    <div className="playlist_list_btns flex flex_align_center">
                                        <i
                                            className="fa-solid fa-plus playlist_one icons icon_circle_plus"
                                            key={eachPlaylist._id}
                                            onClick={() =>
                                                addVideoToPlaylist(eachPlaylist._id, video)
                                            }>
                                        </i>
                                        <span className="play_title">{eachPlaylist.title}</span>
                                    </div>
                                );
                        })}
                    </div>

                    <div className="add_new_playlist">

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

                    </div>
                    <button className="create_playlist_btn flex flex_justify_center" onClick={() =>
                        playlistHandler()
                    }>
                        <i class="fa-solid fa-circle-check icon_circle_plus">
                            <span > Create New Playlist</span>
                        </i>
                    </button>
                </div>
            </div>
        </div>
    )
}