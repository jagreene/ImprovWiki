var mongoose = require("mongoose");

var articlesSchema = mongoose.Schema({
		name: String,
    category: String,
    lastRevision: String,
    subarticles: Array,
    time: Date,
    body: String,
});

module.exports.burgersSchema = articlesSchema;
