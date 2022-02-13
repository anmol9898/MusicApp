const express = require("express");
const morgan = require('morgan');
const mongoose = require("mongoose");
const path = require("path")


const app = express();
// const PORT = process.env.PORT || 3001;
const PORT = 3001;
//logging the routes requested in console

app.use(morgan('tiny'));

const MONGODB_application = "mongodb+srv://mongo:anmol1234@cluster0.shqjs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const MONGODB_application_music = "mongodb+srv://mongo:anmol1234@cluster0.shqjs.mongodb.net/music?retryWrites=true&w=majority";

mongoose.connect(MONGODB_application,
    // mongoose.connect( "localhost://27017",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

mongoose.connection.on("connected", () => {
    console.log("mongooose is connected!! ");
})
// Schema
const Schema = mongoose.Schema;
const SongsSchema = new Schema({
    id: Number,
    name: String,
    singer: String,
    length: String,
    image: String,
});
// Model
const songsModel = mongoose.model("SongsModel", SongsSchema);

// Saving data to our database
const data = {
    id: 20,
    name: "rakh hosla",
    singer: "hard boy",
    length: "5:50",
    image: "/Assets/song1.jpeg",
}
//instance of the model
const newSongsModel = new songsModel(data);

// .save();
newSongsModel2.save((error) => {
    if (error)
        console.log("oops error :-", error);
    else
        console.log("data is saved in the db-mongo,music");
})

//defining ROUTES inside our server
app.get('/api', (req, res) => {

    const data = {
        id: 1,
        name: "Kar har maidan fateh",
        singer: "hardy sandhu",
        length: "5:30",
        image: "/Assets/song1.jpeg",

    }
    res.json(data);
    // res.send("hello world");
});

app.get('/api/name', (req, res) => {
    const data = {
        username: "simran",
        age: 24
    };
    res.json(data);
});


app.listen(PORT, () => console.log(`Server is starting at ${PORT}`));
// console.log(`Server is starting at ${PORT}`);