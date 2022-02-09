import "./Navbar2.css";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
        <div className="branding">
          <img className="logo" src="./Assets/logo.jpeg" />
          <a href="#">Musify</a>
        </div>
        <div className="nav-links">
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Songs</a>
              <i className="bx bx-chevron-down arrow arrow1"></i>
              <ul className="submenu-1 submenu">
                  <li><a href="#">Bhangra</a></li>
                  <li><a href="#">Kawali</a></li>
                  <li><a href="#">English</a></li>
                  <li className="more"><a href="#">More</a><i className="bx bx-chevron-right arrow more-arrow"></i> 
                  
                    <ul className="submenu-more submenu">
                        <li><a href="#">Shaadi</a></li>
                        <li><a href="#">Lohri</a></li>
                        <li><a href="#">Holi</a></li>
                    </ul>
                </li>      
                  
              </ul>
            </li>
            <li>
              <a href="#">Playlist</a>
              <i className="bx bx-chevron-down arrow arrow2"></i>
              <ul className="submenu-2 submenu">
                  <li><a href="#">50 magical dhamakedar</a></li>
                  <li><a href="#">Love</a></li>
                  <li><a href="#">Sad</a></li>

              </ul>
            </li>
            <li>
              <a href="#">Themes</a>
              <i className="bx bx-chevron-down arrow arrow3"></i>
              <ul className="submenu-3 submenu">
                  <li><a href="#">Shaadi</a></li>
                  <li><a href="#">Lohri</a></li>
                  <li><a href="#">Holi</a></li>

              </ul>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
