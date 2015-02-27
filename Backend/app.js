var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs  = require("express-handlebars");

var index = require("./routes/index");
var wiki  = require("./routes/wiki");

var app = express();

var PORT = process.env.PORT || 3000

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/wiki", wiki.getArticles);
app.get("/wiki/:id", wiki.getArticle);

app.put("/wiki/:id", wiki.updateArticle);

app.post("/wiki", wiki.createArticle);

app.delete("/wiki/:id", wiki.deleteArticle);

app.listen(PORT, function() {
  console.log("App running on port:", PORT);
});
