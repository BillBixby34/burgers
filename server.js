//server has constants(using var) and apps
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();
//sets port variable;
app.set('port', process.env.PORT || process.argv[2] || 3000);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");
app.engine("hbs", exphbs({ defaultLayout: "main", extname: 'hbs'}));
app.set("view engine", "hbs");
//check app.set(...) listen does not work

//do I import routes here so server may access
var routes = require("./controllers/burgers_controller.js");






app.listen(app.get('port'),() => console.log("Listening on PORT " + port)
);