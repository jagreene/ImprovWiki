var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs  = require("express-handlebars");

var index = require("./routes/index");
var wiki  = require("./routes/wiki");

var app = express();

var PORT = process.env.PORT || 3001

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set("views", "../client/dist/")

app.get("/", index.getIndex);
app.get("api/article", wiki.getArticles);
app.get("api/article/:id", wiki.getArticle);

app.put("api/article/:id", wiki.updateArticle);

app.post("api/article", wiki.createArticle);

app.delete("api/article/:id", wiki.deleteArticle);

app.listen(PORT, function() {
  console.log("App running on port:", PORT);
});
