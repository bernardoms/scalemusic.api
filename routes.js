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

  // Returns scale names
  app.get('/scale/names', (req, res) => {
    res.send(["major", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian"]);
  });

  app.get('/scale/roman', (req, res) => {
    const {tonic} = req.query;
    if(tonic === "major") return res.send(["I", "ii", "iii", "IV", "V", "vi", "viiº"]);
    if(tonic === "dorian") return res.send(["i", "ii", "♭III", "IV", "v", "viº", "♭VII"]);
    if(tonic === "phrygian") return res.send(["i", "♭II", "♭III", "iv", "vº", "♭VI", "♭vii"]);
    if(tonic === "lydian") return res.send(["I", "II", "iii", "♯ivº", "V", "vi", "vii"]);
    if(tonic === "mixolydian") return res.send(["I", "ii", "iiiº", "IV", "v", "vi", "♭VII"]);
    if(tonic === "aeolian") return res.send(["i", "iiº", "♭III", "iv", "v", "♭VI", "♭VII"]);
    if(tonic === "locrian") return res.send(["iº", "♭II", "♭iii", "iv", "♭V", "♭VI", "♭vii"]);
  });
};