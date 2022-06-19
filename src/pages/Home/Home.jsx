import "./home.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import { useAuth, useCategory } from "../../contexts";

const Home = () => {

    const { state } = useAuth();

    const { categoryDispatch, getActiveCategory } = useCategory();

    return (
        <div className="main_container">

            <Header />

            <div className="main_heading">
                <h1>TAPE YOUR THOUGHTS</h1>

                <div className="heading_icons">
                    PL<i class="fa-solid fa-play icon"></i>Y
                    PA<i class="fa-solid fa-pause icon"></i>SE
                    ST<i class="fa-solid fa-stop icon"></i>P
                    RE<i class="fa-solid fa-backward icon"></i>IND
                </div>


                <div className="join_btn_container">
                    {state.isAuth
                        ? <Link to="/videolisting" className="join_btn" >
                            EXPLORE
                        </Link>
                        : <Link to="/login" className="join_btn" >
                            JOIN US
                        </Link>
                    }
                </div>

                <div className="categories flex flex_col flex_justify_center flex_align_center">
                    <h2 className="categories_heading">
                        EXPLORE ALL GENRES AND FIND WHAT YOU LOVE</h2>

                    <Link 
                        to="/videolisting" 
                        className="category flex flex_justify_center flex_align_center"
                        id="music"
                        onClick={() => { 
                            getActiveCategory("music");
                            categoryDispatch({ type: "SET_CATEGORY", payload: "MUSIC" });
                        }} >
                        <img className="category_img" src="assets/bandBlue.jpg" alt="band" />
                        <h2 className="category_name">Music</h2>
                    </Link>

                    <Link 
                        to="/videolisting" 
                        className="category flex flex_justify_center flex_align_center"
                        id="vlogs"
                        onClick={() => { 
                            getActiveCategory("vlogs");
                            categoryDispatch({ type: "SET_CATEGORY", payload: "VLOGS" });
                        }} >
                        <img className="category_img" src="assets/vlog.jpg" alt="band" />
                        <h2 className="category_name">Vlogs</h2>
                    </Link>

                    <Link 
                        to="/videolisting" 
                        className="category flex flex_justify_center flex_align_center"
                        id="standup"
                        onClick={() => { 
                            getActiveCategory("standup");
                            categoryDispatch({ type: "SET_CATEGORY", payload: "STANDUP COMEDY" });
                        }} >
                        <img className="category_img" src="assets/standUp.jpg" alt="band" />
                        <h2 className="category_name">Standup Comedy</h2>
                    </Link>

                    <Link 
                        to="/videolisting" 
                        className="category flex flex_justify_center flex_align_center"
                        id="sports"
                        onClick={() => { 
                            getActiveCategory("sports");
                            categoryDispatch({ type: "SET_CATEGORY", payload: "SPORTS" });
                        }} >
                        <img className="category_img" src="assets/fBallStadium.jpg" alt="band" />
                        <h2 className="category_name">Sports</h2>
                    </Link>

                    <Link 
                        to="/videolisting" 
                        className="category flex flex_justify_center flex_align_center"
                        id="web"
                        onClick={() => { 
                            getActiveCategory("web");
                            categoryDispatch({ type: "SET_CATEGORY", payload: "WEB DEV" });
                        }} >
                        <img className="category_img" src="assets/webDev.jpg" alt="band" />
                        <h2 className="category_name">Web Dev</h2>
                    </Link>

                </div>

                <footer>
                    <h5 className="footer">© 2022 MANOJ ASARSA. All Rights Reserved</h5>
                </footer>
            </div>
        </div>
    );
}

export { Home };