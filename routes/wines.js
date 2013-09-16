exports.findAll = function(req, res) {
  res.send([{name:'wine'}, {name:'wine2'}, {name:'wine3'}]);
};

exports.findById = function(req, res) {
  res.send({id:req.params.id, name: "The Name", description: "description"});
};
