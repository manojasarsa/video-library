import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router} from "react-router-dom";
import { VideoProvider, AuthProvider } from "./contexts";
import { LikesProvider } from "./contexts/likesContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
        <Router>
            <AuthProvider>
                <LikesProvider>
                    <VideoProvider>
                        <App />    
                    </VideoProvider>
                  </LikesProvider>
            </AuthProvider>
        </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
