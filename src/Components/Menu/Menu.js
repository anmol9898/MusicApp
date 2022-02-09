import "./Menu.css";
import {useEffect} from 'react';

const Menu = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="Menu">
      

      <header>My App</header>
      
      <ul title="Playlists:-">
        {/* <li><a href="#"></a>Punjabi</li>
        <li>English</li>
        <li>Marathi</li> */}
        <li><a href="#"><i className="fas fa-qrcode"></i>Dashboard</a></li>
        <li><a href="#"><i className="fas fa-link"></i>Shortcuts</a></li>
        <li><a href="#"><i className="fas fa-stream"></i>Overview</a></li>
        <li><a href="#"><i className="fas fa-calendar-week"></i>Events</a></li>
        <li><a href="#"><i className="fas fa-question-circle"></i>Abouts</a></li>
        <li><a href="#"><i className="fas fa-sliders-h"></i>Services</a></li>
        <li><a href="#"><i className="fas fa-envelope"></i>Contacts</a></li>
      </ul>
    </div>
  );
};
export default Menu;
