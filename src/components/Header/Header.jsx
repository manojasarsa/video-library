import "./header.css";
import { Link } from "react-router-dom";
import { useAuth, useCategory } from "../../contexts";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {

    const { state, logout } = useAuth();

    const { categoryState, categoryDispatch } = useCategory();

    const navigate = useNavigate();

    return (
        <div>
            <header class="main_header">
                <div class="navigation nav_add flex flex_justify_between flex_align_center" id="header_box">

                    <div class="nav_left logo">
                        <Link className="logo_name" to="/">PLAY NOW </Link>
                    </div>

                    <div className="nav_center searchbar">
                        <input
                            name="search"
                            value={categoryState.searchQuery}
                            className="input input_search search"
                            type="text"
                            placeholder="Search Videos"
                            onChange={(e) => categoryDispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value })}
                        />

                        <i class="fa-solid fa-magnifying-glass search_icon"
                            onClick={() => navigate("/videolisting")}>
                        </i>
                    </div>

                    <div class="nav_right flex flex_justify_between flex_align_center">

                        <NavLink className="nav_btn" to="/videolisting"
                            style={({ isActive }) => isActive ? { color: 'var(--grey-color)' } : { color: 'var(--white-color)' }} >
                            EXPLORE
                        </NavLink>

                        <NavLink className="nav_btn" to="/playlist"
                            style={({ isActive }) => isActive ? { color: 'var(--grey-color)' } : { color: 'var(--white-color)' }} >
                            PLAYLIST
                        </NavLink>

                        <NavLink className="nav_btn" to="/liked"
                            style={({ isActive }) => isActive ? { color: 'var(--grey-color)' } : { color: 'var(--white-color)' }} >
                            LIKED
                        </NavLink>

                        <NavLink className="nav_btn" to="/watchlater"
                            style={({ isActive }) => isActive ? { color: 'var(--grey-color)' } : { color: 'var(--white-color)' }} >
                            WATCH LATER
                        </NavLink>

                        <NavLink className="nav_btn" to="/history"
                            style={({ isActive }) => isActive ? { color: 'var(--grey-color)' } : { color: 'var(--white-color)' }} >
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