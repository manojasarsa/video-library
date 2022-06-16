import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider, AuthProvider, WatchLaterProvider, HistoryProvider } from "./contexts";
import { LikesProvider } from "./contexts/likesContext";
import { PlaylistProvider } from "./contexts/playlistContext";
import { CategoryProvider } from "./contexts/categoryContext";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <CategoryProvider>
                <VideoProvider>
                    <AuthProvider>
                        <WatchLaterProvider>
                            <LikesProvider>
                                <HistoryProvider>
                                    <PlaylistProvider>
                                        <App />
                                    </PlaylistProvider>
                                </HistoryProvider>
                            </LikesProvider>
                        </WatchLaterProvider>
                    </AuthProvider>
                </VideoProvider>
            </CategoryProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
