const express = require("express");
const morgan = require('morgan');
const mongoose = require("mongoose");
const path = require("path")

const app = express();
// const PORT = process.env.PORT || 3001;
const PORT = 3001;

app.use(morgan('tiny'));
//defining routes inside our server

app.get('/api', (req, res) => {
    const data = {
        username: "anmol",
        age: 23
    };
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

// app.listen(3001,()=>{
//     mongoose.connect("localhost:\3001", {useNewUrlParser:true},(error,result)=>{
//         if (error) throw error
//         console.log("connection succesful");
//     })
// })
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'))
  })
 
app.listen(PORT,()=>console.log(`Server is starting at ${PORT}`));
console.log(`Server is starting at ${PORT}`);