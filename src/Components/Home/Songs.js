import "./Songs.css";
import SongItem from "./SongItem";

const Songs = (props) => {
     let allSongs=props.songList.map((elem)=>
        <SongItem name= {elem.name} singer={elem.singer} length={elem.length} image={elem.image} id={elem.id} viewCount={elem.viewcount}/>
    )
  return (
    <div className="Song-box">
      {allSongs}
    </div>
  );
};
export default Songs;
