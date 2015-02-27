var mongoose = require('mongoose');
var articles = require('../models/article');
var articles = require('../models/articles');

var mongoURI = process.env.MONGOURI || "mongodb://127.0.0.1:27017/test";
mongoose.connect(mongoURI);

var Article = mongoose.model('Article', articles.articlesSchema);

var getArticles = function(req, res){
	Article.find().sort({available: 1}).exec(function (err, articles){
         res.json({"articles": articles});
    });
}

var getArticle = function(req, res){
    Article.findById(req.params.id).exec(function (err, article){
    	res.json({"article": article});
    });
}

var updateArticle = function(req, res){
    Article.findById(req.params.id).exec(function (err, article){
    });
}

var createArticle = function(req, res){
    console.log(req.body);
    article = new Article();
    article.name = req.body.newName;
    article.price = req.body.price;
    article.available = req.body.available;
    
    console.log(article.name);
    console.log(article.price);
    console.log(article.available);

    article.save(function (err){
        if(err){
            console.log(err);
        } else {
            res.json({"id":article.id});
        }
    });
}

var deleteArticle = function(req, res){
    console.log(req.body.order_id);
    Article.find({_id:req.body.order_id}).remove(function (err){
        if (err){
            console.log(err);
        } else {
            res.json({status: "done"})
        }
    });
}

module.exports.getArticles = getArticles;
module.exports.newOrder = newOrder;
module.exports.getOrders = getOrders;
module.exports.postOrder = postOrder;
module.exports.postArticle = postArticle;
module.exports.newArticle = newArticle;
module.exports.deleteOrder = deleteOrder;
