import { Database } from "./Database";
import Songs from "./Components/Home/Songs";
import Navbar from "./Components/NavigationBar/Navbar";
import "./App.css";

function App(props) {
  var songDummy = Database;
 
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>

        <Songs songList={songDummy}/>
       
      </header>
    </div>
  );
}

export default App;
