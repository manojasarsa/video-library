import "./history.css";

import { Header} from "../../components";

const History = () => {
      return (
            <div>
                  <Header />
                  
                  <div className="list_wrapper">
                        <div className="list_container flex flex_col flex_justify_center flex_align_center">
                              <i className="fa-solid fa-clock music_icon"></i>
                              <h3 className="playlist_title">No History</h3>
                              <button className="nav_categories">Start watching</button>
                        </div>
                  </div>
            </div>
      )
}

export {History};