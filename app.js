var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var app = express();

//mongoose.connect("mongodb://localhost/1000cp");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//mongoose/model config
app.get("/", function(req, res){
    res.render("landing");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server is running"); 
});