import Mockman from "mockman-js";
import { Home } from "../pages";
import { VideoListing } from "../pages";
import { Playlist } from "../pages";
import { Liked } from "../pages";
import { WatchLater } from "../pages";
import { History } from "../pages";
import { Login } from "../pages";
import { Logout } from "../pages";
import { SignUp } from "../pages";
import { ForgotPwd } from "../pages";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

const NavRoutes = () => {
      return (
          <Routes>
              <Route path="/" element = {<Home />} />
              <Route path="/videolisting" element = {<VideoListing />} />
              <Route 
                  path="*" 
                  element = { <p>OOPS! Page Not Found</p> }>    
              </Route>
              <Route 
                  path="/playlist" 
                  element= {
                        <Playlist />
                  }
              ></Route>
              <Route 
                  path="/liked" 
                  element= {
                        <Liked />
                  }
              ></Route>
              <Route 
                  path="/watchlater" 
                  element= {
                        <WatchLater />
                  }
              ></Route>
              <Route 
                  path="/history" 
                  element= {
                        <History />
                  }
              ></Route>
              <Route path="/login" element = {<Login />} />
              <Route path="/logout" element = {<Logout />} />
              <Route path="/signup" element = {<SignUp />} />
              <Route path="/forgotpwd" element = {<ForgotPwd />} />
              <Route path="/mock" element = {<Mockman />} />
          </Routes>
      )
}

export {NavRoutes};