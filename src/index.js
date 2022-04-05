import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router} from "react-router-dom";
import { VideoProvider, AuthProvider, WatchLaterProvider, HistoryProvider} from "./contexts";
import { LikesProvider } from "./contexts/likesContext";

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
                                <App />    
                            </HistoryProvider>
                        </LikesProvider>
                    </WatchLaterProvider>
                </AuthProvider>
            </VideoProvider>
        </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
