import "./SongItem.css";
import { useState, useEffect } from "react";

const SongItem = (props) => {
  const [viewCount, setViewCount] = useState(0);
  // const [localStorageVar,setLocalStorageVar]=useState(0);
  const viewHandler = () => {
    if (localStorage.getItem(props.id) === null) {
      setViewCount(0);
      console.log("viewcount in if is", viewCount);
    } else {
      let localValue=Number(localStorage.getItem(props.id));
       console.log("local storage getitem is",localValue);
      setViewCount(`${localValue}`+`${viewCount}`);
      console.log("viewcount in else is", viewCount);
    }
    setViewCount(viewCount + 1);
    localStorage.setItem(props.id, viewCount);
  };

  //    useEffect(()=>{
  //       if(localStorage.getItem(props.id)===null){
  //          setViewCount(0);
  //       }
  //       console.log("viewCount is",viewCount)

  //    //    console.log(localStorage.getItem(props.id));
  //    //    setViewCount(Number(localStorage.getItem(props.id)));
  //    // console.log("props id -",props.id);
  //    // console.log("UseEffect viewcount is",localStorage.getItem(props.id));
  //   },[])

  return (
    <div className="song-item">
      <img src={props.image}></img>
      <div className="song-item__description">
        <h4 onClick={viewHandler}>{props.name}</h4>
        <div>{props.singer}</div>
      </div>
      <button onClick={viewHandler}>
        <img src="/Assets/play.png"></img>
      </button>

      <div className="song-item__length">
        <h5>{props.length}</h5>
      </div>
      <img className="menu-img" src="/Assets/menu2.png"></img>
      {/* {localStorage.setItem(props.id,localStorageVar)} */}
    </div>
  );
};

export default SongItem;
