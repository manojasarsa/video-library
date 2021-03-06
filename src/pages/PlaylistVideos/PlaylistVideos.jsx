import "./playlistvideos.css";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../contexts";
import { Header } from "../../components";
import { PlaylistVideoCard } from "../../components";

const PlaylistVideos = () => {

    const { playlistId } = useParams();

    const { playlistState } = usePlaylist();

    const playlistPresent = playlistState.playlistsItems.find((playlist) => playlist._id === playlistId)

    const videosInPlaylistPresent = playlistPresent?.videos;

    return (
        <div>
            <Header />

            <div className="list_wrapper play_container">
                <div>
                    <h1>
                        {playlistPresent.title} ({videosInPlaylistPresent.length})
                    </h1>

                    <div className="playlist_video_wrapper flex">

                        {videosInPlaylistPresent.length === 0
                            ? <h3>Playlist Empty!</h3>
                            : videosInPlaylistPresent.map((video) => <PlaylistVideoCard key={video._id} video={video} />)}

                    </div>

                </div>
            </div>
        </div>
    )
}

export { PlaylistVideos };