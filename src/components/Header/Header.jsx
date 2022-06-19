import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useCategory, useVideos } from "../../contexts";
import { NavLink, useNavigate } from "react-router-dom";
import { debounce } from "../../utils/debounce";
import { useRef } from "react";

const Header = () => {

    const { state, logout } = useAuth();

    const { categoryState, categoryDispatch } = useCategory();

    const { videosDispatch } = useVideos();

    const navigate = useNavigate();

    const inputBox = useRef(null);

    const location = useLocation();

    const { pathname } = location;

    const searchHandler = e => { 

        // categoryDispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
        // categoryDispatch({ type: "SET_CATEGORY", payload: "all" });
        
        if (e.target.value) {
            debounce(() => {
            navigate("/videolisting");
            categoryDispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
        }, 1000)();
    }
    };

    return (
        <div>
            <header className="main_header">
                <div className="navigation nav_add flex flex_justify_between flex_align_center" id="header_box">

                    <div className="nav_left logo">
                        <Link className="logo_name" to="/">PLAY NOW </Link>
                    </div>

                    <header className="nav_center searchbar">

                        <input
                            // value={categoryState?.searchQuery}
                            name="search"
                            className="input input_search search"
                            type="search"
                            placeholder="Search Videos..."
                            onChange={searchHandler}
                            autoFocus={categoryState?.searchQuery && pathname === "/videolisting"}
                        />

                        {/* <i className="fa-solid fa-magnifying-glass search_icon"
                            onClick={() => navigate("/videolisting")}>
                        </i> */}

                    </header>

                    <div className="nav_right flex flex_justify_between flex_align_center">

                        <NavLink className="nav_btn" to="/videolisting"
                            style={({ isActive }) => isActive ? { color: 'var(--white-color)', fontWeight: 500 } : { color: 'var(--light-grey-color)', fontWeight: 500 }} >
                            EXPLORE
                        </NavLink>

                        <NavLink className="nav_btn" to="/playlist"
                            style={({ isActive }) => isActive ? { color: 'var(--white-color)', fontWeight: 500 } : { color: 'var(--light-grey-color)', fontWeight: 500 }} >
                            PLAYLIST
                        </NavLink>

                        <NavLink className="nav_btn" to="/liked"
                            style={({ isActive }) => isActive ? { color: 'var(--white-color)', fontWeight: 500 } : { color: 'var(--light-grey-color)', fontWeight: 500 }} >
                            LIKED
                        </NavLink>

                        <NavLink className="nav_btn" to="/watchlater"
                            style={({ isActive }) => isActive ? { color: 'var(--white-color)', fontWeight: 500 } : { color: 'var(--light-grey-color)', fontWeight: 500 }} >
                            WATCH LATER
                        </NavLink>

                        <NavLink className="nav_btn" to="/history"
                            style={({ isActive }) => isActive ? { color: 'var(--white-color)', fontWeight: 500 } : { color: 'var(--light-grey-color)', fontWeight: 500 }} >
                            HISTORY
                        </NavLink>

                        {state.isAuth &&
                            <Link className="nav_btn" to="/logout">
                                <i onClick={logout} className="fa-solid fa-right-from-bracket logout_btn"></i>
                            </Link>
                        }
                    </div>
                </div>
            </header>
        </div>
    )
};

export { Header };