const express = require ("express");
const db = require("./ ") //fill in path 
//const {server name} = require("@name/server/ ") 
const { , }= require("./schemas")
//const path = require ("path");




//app
const app =express();
app.get('/', function (req, res)){
    res.send ('')
})


//middleware
app.use(..({origin:true, credentials: true}));



//port
const port = process.env.PORT || //3001?;
const startServer (serve name) = asyn ()=>{
    await.server.start();

    app.use(express.urlencoded({extended:true}));
    app.use(express.json()):
    //app.use ("/", [expressMiddleware]?(server));
}

// if (process.env. === "")
// app.use(express.static(path.join(_dirname, "...")))


// app.listen