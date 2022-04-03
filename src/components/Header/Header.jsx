import "./header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";

const Header = () => {

      const { state, logout } = useAuth();

    return (
            <div>
                  <header class="main_header">
                  <div class="navigation nav_add flex flex_justify_between flex_align_center" id="header_box">

                        <div class="nav_left logo">
                              <Link className="logo_name" to="/">PLAY NOW </Link>
                        </div>
                  
                        <div class="nav_right flex flex_justify_between flex_align_center">
                              <Link className="nav_btn" to="/videolisting">EXPLORE</Link>
                              <Link className="nav_btn" to="/playlist">PLAYLIST</Link>
                              <Link className="nav_btn" to="/liked">LIKED</Link>
                              <Link className="nav_btn" to="/watchlater">WATCH LATER</Link>
                              <Link className="nav_btn" to="/history">HISTORY</Link>
                              {state.isAuth && 
                                    <Link className="nav_btn" to="/logout">
                                          <i onClick={logout} className="fa-solid fa-right-from-bracket logout_btn"></i>
                                    </Link>
                              }
                        </div>
                  </div>
                  </header>
            </div>
    );
}

export {Header};