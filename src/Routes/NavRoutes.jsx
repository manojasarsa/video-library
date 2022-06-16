import Mockman from "mockman-js";
import { Home, VideoListing, Playlist, Liked, WatchLater, History, Login, Logout, SignUp, SingleVideo, PlaylistVideos } from "../pages";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videolisting" element={<VideoListing />} />

            <Route
                path="/playlist"
                element={
                    <PrivateRoutes>
                        <Playlist />
                    </PrivateRoutes>
                }
            ></Route>
            <Route
                path="/liked"
                element={
                    <PrivateRoutes>
                        <Liked />
                    </PrivateRoutes>
                }
            ></Route>
            <Route
                path="/watchlater"
                element={
                    <PrivateRoutes>
                        <WatchLater />
                    </PrivateRoutes>
                }
            ></Route>
            <Route
                path="/history"
                element={
                    <PrivateRoutes>
                        <History />
                    </PrivateRoutes>
                }
            ></Route>

            <Route path="/videos/:videoId" element={<SingleVideo />} />
            <Route path="/playlist/:playlistId" element={<PlaylistVideos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mock" element={<Mockman />} />
            <Route path="*" element={<p>OOPS! Page Not Found</p>} />
        </Routes>
    )
}

export { NavRoutes };