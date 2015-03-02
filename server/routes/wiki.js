var mongoose = require('mongoose');
var articles = require('../models/articles');

var mongoURI = process.env.MONGOURI || "mongodb://127.0.0.1:27017/test";
mongoose.connect(mongoURI);

var Article = mongoose.model('Article', articles.articlesSchema);

var getArticles = function(req, res){
    Article.find().sort({available: 1}).exec(function (err, articles){
        res.json({"articles": articles});
        console.log("getArticles")
    });
}

var getArticle = function(req, res){
    Article.findById(req.params.id).exec(function (err, article){
    	res.json({"article": article});
        console.log("getArticle")
    });
}

var updateArticle = function(req, res){
    Article.findById(req.params.id).exec(function (err, article){
        console.log("updateArticle")
    });
}

var createArticle = function(req, res){
    console.log(req.body);
    article = new Article();
    article.name = req.body.article.name;
    article.category = req.body.article.category;
    article.lastRevision = req.body.article.lastRevision;
    article.subarticles = req.body.article.subarticles;
    article.time = req.body.article.time;
    article.body = req.body.article.body;
    article.save(function (err){
        if(err){
            console.log(err);
        } else {
            console.log("createArticle")
        }
    });
}

var deleteArticle = function(req, res){
    console.log(req);
    Article.findById(req.params.id).remove(function (err){
        if (err){
            console.log(err);
        } else {
            res.json({"message": "deleted"})
            console.log("deleteArticles")
        }
    });
}

module.exports.getArticles = getArticles;
module.exports.getArticle = getArticle;
module.exports.updateArticle = updateArticle;
module.exports.createArticle = createArticle;
module.exports.deleteArticle = deleteArticle;

