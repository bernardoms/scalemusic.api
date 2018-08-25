const {Note, Scale} = require("tonal");
const tonalNote = require('tonal-note');

module.exports = function (app) {
  app.get('/note/freq', (req, res) => {
    const {note, oct} = req.query;
    res.send(Note.freq(note + oct));
  });

  app.get('/scale/notes', (req, res) => {
    const {note, tonic} = req.query;
    res.send(Scale.notes(
      note,
      tonic
    ).map((value) => {
      if (value.includes("#")) {
        return tonalNote.enharmonic(value);
      }
      return value;
    }).map((value) => {
      if (value.includes("b")) {
        return tonalNote.enharmonic(value);
      }
      return value;
    }));
  });

  // Returns scale names
  app.get('/scale/names', (req, res) => {
    res.send(["major", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian"]);
  });
};