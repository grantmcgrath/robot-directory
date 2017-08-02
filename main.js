const express = require("express");
const mustacheExpress = require("mustache-express");
const data = require("./data");
const fs = require("fs");
var app = express();

// Tells Express to use Mustache as the engine
app.engine("mustache", mustacheExpress()):
app.set("views", "./views");
app.set("engine", "mustache");

// Serves static files
app.use(express.static("public"));

// Configures Webroot
app.get("/", function(req, res){
  res.render("home")
});

// Tell js to listen to port 3000
 app.listen(3000, function() {
   console.log("Application Running");
 });
