const tonal = require("tonal");
const noteParser = require('note-parser');

module.exports = function (app) {
  // Returns the notes of a scale from a given note and tonic
  app.get('/scale/notes', (req, res) => {
    res.send(tonal.Scale.notes(req.query.note, req.query.tonic));
  });

  // Returns the chords of a given scale
  app.get('/scale/chords', (req, res) => {
    res.send(tonal.Scale.chords(req.query.scale));
  });

  // Returns the intervals of a given scale
  app.get('/scale/intervals', (req, res) => {
    res.send(tonal.Scale.intervals(req.query.scale));
  });

  // Returns scale names
  app.get('/scale/names', (req, res) => {
    res.send(tonal.Scale.names());
  });

  // Returns a json with properties of a scale
  app.get('/scale/props', (req, res) => {
    res.send(tonal.Scale.props(req.query.scale));
  });

  // Returns info about a given note
  app.get('/scale/frequency', (req, res) => {
    let acc = "";
    if (req.query.acc === "sharp") {
      acc = "#";
    } else if (req.query.acc === "flat") {
      acc = "b";
    }
    res.send(noteParser.parse(req.query.note + acc + req.query.oct));
  });

  //
  app.get('/note/freq', (req, res) => {
    res.send(tonal.Note.freq(req.query.note + req.query.oct));
  });
};