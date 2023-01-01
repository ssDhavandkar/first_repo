var express = require("express");
var app = express();
app.get("/", function(req,res){
    res.send("Keep calm your docker is working :) ");
});
app.listen(4400);
console.log("server is running at port no 4400");