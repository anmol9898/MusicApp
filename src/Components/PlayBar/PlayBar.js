import { type } from "@testing-library/user-event/dist/type";
import "./PlayBar.css";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PlayBar = () => {
  return (
    <div className="playbox">
      <input type="range" className="my-progress-bar" min="0" max="100" />
      <div className="song-icons">
      <i className="fa-solid fa-circle-play"></i>
      </div>
    </div>
  );
};
export default PlayBar;
