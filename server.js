//server has constants(using var) and apps
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var port = process.env.PORT || process.argv[2] || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
//check app.set(...) listen does not work

//do I import routes here so server may access
var routes = require("./controllers/burgers_controller.js");

//change to app.listen(port) => no errors
app.listen(app.get('port'),() => console.log("Listening on PORT " + port)
);