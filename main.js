const express = require("express");
const mustacheExpress = require("mustache-express");
const data = require("./data.js");
const fs = require("fs");
var app = express();

// console.log(data);

// Tells Express to use Mustache as the engine
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

// Serves static files
app.use(express.static("public"));

// Configures Webroot
app.get("/", function(req, res){
  res.render("home", data)
});

// Tell js to listen to port 3000
 app.listen(3000, function() {
   console.log("Application Running");
 });
