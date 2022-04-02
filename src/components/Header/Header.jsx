import "./header.css";

const Header = () => {

    return (
            <div>
                  
                  <header class="main_header">
                  <div class="navigation nav_add flex flex_justify_between flex_align_center" id="header_box">

                        <div class="nav_left logo">
                              <h3 className="logo_name">PLAY NOW</h3>
                        </div>
                  
                        <div class="nav_right flex flex_justify_between flex_align_center">
                              <button className="nav_btn">HOME</button>
                              <button className="nav_btn">PLAYLIST</button>
                              <button className="nav_btn">LIKED</button>
                              <button className="nav_btn">WATCH LATER</button>
                              <button className="nav_btn">HISTORY</button>
                        </div>
                  </div>
                  </header>
            </div>
    );
}

export {Header};