const tonal = require("tonal");
const noteParser = require('note-parser');

module.exports = function (app) {
  app.get('/scale/notes', (req, res) => res.send(tonal.Scale.notes(req.query.note, req.query.tonic)));
  app.get('/scale/chords', (req, res) => res.send(tonal.Scale.chords(req.query.scale)));
  app.get('/scale/intervals', (req, res) => res.send(tonal.Scale.intervals(req.query.scale)));
  app.get('/scale/props', (req, res) => res.send(tonal.Scale.props(req.query.scale)));
  app.get('/note/freq', (req, res) => res.send(tonal.Note.freq(req.query.note + req.query.oct)));
  app.get('/chord/notes', (req, res) => res.send(tonal.Chord.notes(req.query.chord)));

  // Returns scale names
  app.get('/scale/names', (req, res) => {
    if(req.query.isSimple){
      res.send([
        "major",
        "aeolian",
        "dorian",
        "phrygian",
        "lydian",
        "mixolydian",
        "locrian",
      ]);
    } else {
      res.send(tonal.Scale.names())
    }
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
};