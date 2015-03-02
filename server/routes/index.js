var getIndex = function(req, res){
  console.log("Rendering Index Page");
  res.render("index");
}

module.exports.getIndex = getIndex;
