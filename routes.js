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

  app.get('/scale/roman', (req, res) => {
    const {tonic} = req.query;
    if(tonic === "major") return res.send("I", "ii", "iii", "IV", "V", "vi", "viiº");
    if(tonic === "dorian") return res.send("i", "ii", "♭III", "IV", "v", "viº", "♭VII");
    if(tonic === "phrygian") return res.send("i", "♭II", "♭III", "iv", "vº", "♭VI", "♭vii");
    if(tonic === "lydian") return res.send("I", "II", "iii", "♯ivº", "V", "vi", "vii");
    if(tonic === "mixolydian") return res.send("I", "ii", "iiiº", "IV", "v", "vi", "♭VII");
    if(tonic === "aeolian") return res.send("i", "iiº", "♭III", "iv", "v", "♭VI", "♭VII");
    if(tonic === "locrian") return res.send("iº", "♭II", "♭iii", "iv", "♭V", "♭VI", "♭vii");
  });
};