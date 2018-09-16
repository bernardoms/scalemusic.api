const {Note, Scale} = require("tonal");
const {enharmonic} = require('tonal-note');

module.exports = function (app) {
  app.get('/note/freq', (req, res) => {
    const {note, oct} = req.query;
    const freq = Note.freq(note + oct);
    res.send(freq);
  });

  app.get('/scale/notes', (req, res) => {
    const note = req.query.note.split("/")[0];
    const tonic = translateScale(req.query.tonic)
    const notes = Scale.notes(note, tonic);
    
    const notesInBemol = notes.map((value) => {
      if (value.includes("#")) {
        return enharmonic(value);
      }
      return value;
    });
    const notesInSharp = notesInBemol.map((value) => {
      if (value.includes("b")) {
        return enharmonic(value).concat("/" + value)
      }
      return value;
    });

    res.send(notesInSharp);
  });

  app.get('/scales', (req, res) => {
    res.send(["Maior", "Menor Natural", "Menor Melódica", "Menor Harmônica"]);
  });

  function translateScale(tonic){
      if(tonic == "Maior"){
        return "major"
      }
      else if(tonic == "Menor Natural"){
        return "minor"
      }
      else if(tonic == "Menor Melódica"){
        return "melodic minor"
      }
      else if(tonic == "Menor Harmônica"){
        return "harmonic minor"
      }
      else{
        return tonic
      }
    }
};