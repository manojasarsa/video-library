import "./home.css";
import { Header} from "../../components";

const Home = () => {
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

                  <button className="join_btn">
                        JOIN US
                  </button>

                  <div className="categories flex flex_col flex_justify_center flex_align_center">
                        <h2 className="categories_heading">
                        EXPLORE ALL GENRES AND FIND WHAT YOU LOVE</h2>
                        
                        <div className="category flex flex_justify_center flex_align_center">
                              <img className="category_img" src="assets/bandBlue.jpg" alt="band" />
                              <h2 className="category_name">Music Bands</h2>
                        </div>
                        
                        <div className="category flex flex_justify_center flex_align_center">
                              <img className="category_img" src="assets/vlog.jpg" alt="band" />
                              <h2 className="category_name">Vlogs</h2>
                        </div>
                        
                        <div className="category flex flex_justify_center flex_align_center">
                              <img className="category_img" src="assets/standUp.jpg" alt="band" />
                              <h2 className="category_name">Standup Comedy</h2>
                        </div>

                        <div className="category flex flex_justify_center flex_align_center">
                              <img className="category_img" src="assets/fBallStadium.jpg" alt="band" />
                              <h2 className="category_name">Sports</h2>
                        </div>

                        <div className="category flex flex_justify_center flex_align_center">
                              <img className="category_img" src="assets/webDev.jpg" alt="band" />
                              <h2 className="category_name">Web Dev</h2>
                        </div>
                  </div>

                  <h5 className="footer">© 2022 MANOJ ASARSA. All Rights Reserved</h5>
            </div>
        </div>
    );
}

export {Home};