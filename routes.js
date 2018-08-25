const tonal = require("tonal");
const tonalNote = require('tonal-note');
const simpleScale = [ "major","dorian","phrygian","lydian","mixolydian","aeolian","locrian"]

module.exports = function (app) {
  app.get('/note/freq', (req, res) => res.send(tonal.Note.freq(req.query.note + req.query.oct)));

  app.get('/scale/notes', (req, res) => {
    res.send(tonal.Scale.notes(
      req.query.note,
      req.query.tonic
    ).map((note) => {
      if (note.includes("#")) {
        return tonalNote.enharmonic(note);
      }
      return note;
    }).map((note) => {
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
      res.send(simpleScale);
    }
  });
};