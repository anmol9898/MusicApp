import "./SongItem.css";
import { useState, useEffect } from "react";

const SongItem = (props) => {
  const [viewCount, setViewCount] = useState(props.viewCount+1);
  const [isPlaying, setIsPlaying] = useState(false);
  // let viewCountObject={};
  const viewHandler = () => {
    setViewCount((prevCount) => {
      return prevCount + 1;
    });
    // viewCountObject[props.name]={viewCount};
    console.log(`view for ${props.name} is ${viewCount}`);
    // console.log("viewcount object",viewCountObject);
  };

  const playHandler = () => {
    const audio = document.getElementById("audio");
    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    } else {
      setIsPlaying(true);
      audio.play();
    }
  };

  return (
    <div className="song-item">
      <link
        href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
        rel="stylesheet"
      />
      <img src={props.image}></img>
      <div className="song-item__description">
        <h4 onClick={viewHandler}>{props.name}</h4>
        <div>{props.singer}</div>
      </div>
      <button onClick={(viewHandler, playHandler)}>
        {isPlaying ? <i className="bx bx-pause" /> : <img src="/Assets/play.png" />}
      </button>

      <div className="song-item__length">
        <h5>{props.length}</h5>
      </div>
      <img className="menu-img" src="/Assets/menu2.png" />
      <div>
        <audio id="audio">
          <source src="/Assets/song1.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default SongItem;

// if (localStorage.getItem(props.id) === null) {
//   setViewCount(0);
//   console.log("viewcount in if is", viewCount);
// } else {
//   let localValue = Number(localStorage.getItem(props.id));
//   console.log("local storage getitem is", localValue);
//   setViewCount(`${localValue}` + `${viewCount}`);
//   console.log("viewcount in else is", viewCount);
// }
// setViewCount(viewCount + 1);
// localStorage.setItem(props.id, viewCount);
