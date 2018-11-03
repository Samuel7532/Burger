// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Server lIstening on http://localhost:" + PORT);
});
  