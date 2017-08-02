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
app.get("/", function(request, response){
  response.render("home", data)
});

// Something I tried/I couldn't figure this out.
// app.get("/card/:user", function(request, response) {
//   response.render("card", {
//     card: data[request.params.user]
//   });
// });

app.get("/:user", function(req, res) {
      let user = req.params.user;
      for (i = 0; i < data.users.length; i++) {
        if (data.users[i].username === user) {
          res.render("card", data.users[i])
        }
      }
    });

// Tell js to listen to port 3000
 app.listen(3000, function() {
   console.log("Application Running");
 });
