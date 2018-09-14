const {Note, Scale} = require("tonal");
const {enharmonic} = require('tonal-note');

module.exports = function (app) {
  app.get('/note/freq', (req, res) => {
    const {note, oct} = req.query;
    const freq = Note.freq(note + oct);
    res.send(freq);
  });

  app.get('/scale/notes', (req, res) => {
    const {note, tonic} = req.query;
    const notes = Scale.notes(note, tonic);
    const notesInBemol = notes.map((value) => {
      if (value.includes("#")) {
        return enharmonic(value);
      }
      return value;
    });
    const notesInSharp = notesInBemol.map((value) => {
      if (value.includes("b")) {
        return enharmonic(value);
      }
      return value;
    });
    res.send(notesInSharp);
  });

  app.get('/scales', (req, res) => {
    res.send(["major", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian"]);
  });
};