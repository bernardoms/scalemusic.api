var scale = require("tonal-scale");
var parser = require('note-parser')
//Returns the notes of a scale from a given note and tonic
module.exports = function(app) {
	
	app.get('/note', (req, res) => {
	//console.log(req.query.note + req.query.tonic);
    res.send({notes: scale.notes(req.query.note,req.query.tonic)})
  });
  
  //Returns info about a given note
  app.get('/frequency', (req, res) => {
	  var acc = ""
	if(req.query.acc == "sharp"){
		acc = "#"
	}else if(req.query.acc == "flat"){
		acc = "b"
	}
	res.send(parser.parse(req.query.note + acc + req.query.oct))
  });
  
  //Returns the chords of a given scale
  app.get('/chords', (req,res) =>{
	res.send({chords: scale.chords(req.query.scale)})
  });
  
   //Returns the intervals of a given scale
    app.get('/intervals', (req,res) =>{
	res.send({intervals: scale.intervals(req.query.scale)})
  });
  
	//Returns scale names
    app.get('/scalenames', (req,res) =>{
	res.send({scalenames: scale.names()})
  });
  
  	//Returns a json with properties of a scale
    app.get('/scaleprop', (req,res) =>{
	res.send(scale.props(req.query.scale))
  });
  
};