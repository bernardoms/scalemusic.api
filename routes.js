const tonal = require("tonal");
const noteParser = require('note-parser');
const tonalKey = require('tonal-key');
const tonalNote = require('tonal-note');

module.exports = function (app) {
  app.get('/scale/chords', (req, res) => res.send(tonal.Scale.chords(req.query.scale)));
  app.get('/scale/intervals', (req, res) => res.send(tonal.Scale.intervals(req.query.scale)));
  app.get('/scale/props', (req, res) => res.send(tonal.Scale.props(req.query.scale)));
  app.get('/note/freq', (req, res) => res.send(tonal.Note.freq(req.query.note + req.query.oct)));
  app.get('/note/chroma', (req, res) => res.send(tonal.Note.chroma(req.query.note)));
  app.get('/chord/notes', (req, res) => res.send(tonal.Chord.notes(req.query.chord)));
  app.get('/key/props', (req, res) => res.send(tonalKey.props(req.query.name)));

  app.get('/scale/notes', (req, res) => {
    res.send(tonal.Scale.notes(
      req.query.note,
      req.query.tonic
    ).map((note) => {
      if (note.includes("b")) {
        return tonalNote.enharmonic(note);
      }
      return note;
    }));
  });

  // Returns scale names
  app.get('/scale/names', (req, res) => {
    if (req.query.advanced) {
      res.send(tonal.Scale.names());
    } else {
      res.send([
        "major",
        "dorian",
        "phrygian",
        "lydian",
        "mixolydian",
        "aeolian",
        "locrian"
      ]);
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