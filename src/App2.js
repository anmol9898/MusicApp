//this app component is created
//to design the components in grid try
//this is the exact copy of app.js

import { Database } from "./Database";
import Songs from "./Components/Home/Songs";
import Navbar from "./Components/NavigationBar/Navbar";
import Menu from "./Components/Menu/Menu";
import PlayBar from "./Components/PlayBar/PlayBar";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import "./App.css";
import "./grid.css";

function App2(props) {
  var songDummy = Database;

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
      flexGrow: 1,
    },
  }),
);
// export default function FullWidthGrid() {
//   const classes = useStyles();

  // return (
  //   <div className="App grid-container">
  //         <div className="item item-header "><Navbar /></div>
  //         <div className="item item-left ">
  //               <input type="checkbox" id="check"></input>
  //               <label for="check">
  //               <i className="fas fa-bars" id="btn"></i>
  //               <i className="fas fa-times" id="cancel"></i>
  //               </label>
  //               <Menu />
  //         </div>
  //         <div className="item item-center "><Songs songList={songDummy} /></div>
  //         <div className="item item-right "></div>
  //         <div className="item item-bottom "> <PlayBar></PlayBar></div>
          

  
  //   </div>
  // );

  return (
    <div style={{ width: '90%', backgroundColor: 'green', 
                  padding: '10px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              GEEKSFORGEEKS ---> GRID COMPONENT DEMO
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>1/4 Size</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>1/4 Size</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>1/4 Size</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>1/4 Size</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>1/2 Size</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>1/2 Size</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Full Size</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App2;
