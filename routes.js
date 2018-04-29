const tonalScale = require("tonal-scale");
const noteParser = require('note-parser');

module.exports = function (app) {
  // Returns the notes of a scale from a given note and tonic
  app.get('/notes', (req, res) => {
    res.send(tonalScale.notes(req.query.note, req.query.tonic));
  });

  // Returns the chords of a given scale
  app.get('/chords', (req, res) => {
    res.send(tonalScale.chords(req.query.scale));
  });

  // Returns the intervals of a given scale
  app.get('/intervals', (req, res) => {
    res.send(tonalScale.intervals(req.query.scale));
  });

  // Returns scale names
  app.get('/names', (req, res) => {
    res.send(tonalScale.names());
  });

  // Returns a json with properties of a scale
  app.get('/props', (req, res) => {
    res.send(tonalScale.props(req.query.scale));
  });

  // Returns info about a given note
  app.get('/frequency', (req, res) => {
    let acc = "";
    if (req.query.acc === "sharp") {
      acc = "#";
    } else if (req.query.acc === "flat") {
      acc = "b";
    }
    res.send(noteParser.parse(req.query.note + acc + req.query.oct));
  });
};