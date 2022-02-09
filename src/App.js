import { Database } from "./Database";
import Songs from "./Components/Home/Songs";
import Navbar from "./Components/NavigationBar/Navbar";
import Menu from "./Components/Menu/Menu";
import PlayBar from "./Components/PlayBar/PlayBar";
import "./App.css";

function App(props) {
  var songDummy = Database;
 
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">

      <input type="checkbox" id="check"></input>
      <label for="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>

        <Menu />
        <Songs songList={songDummy}/>
       <PlayBar></PlayBar>
      </header>
    </div>
  );
}

export default App;
