var mongoose = require("mongoose");

var articlesSchema = mongoose.Schema({
	name: String,
    category: String,
    lastRevision: String,
    time: Date,
    body: String,
});

module.exports.articlesSchema = articlesSchema;
