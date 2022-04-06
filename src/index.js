import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router} from "react-router-dom";
import { VideoProvider, AuthProvider, WatchLaterProvider, HistoryProvider} from "./contexts";
import { LikesProvider } from "./contexts/likesContext";
import { PlaylistProvider } from "./contexts/playlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
        <Router>
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
        </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
