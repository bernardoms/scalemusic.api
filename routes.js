const {Note, Scale} = require("tonal");
const {enharmonic} = require('tonal-note');
const fs = require('fs');
const getStat = require('util').promisify(fs.stat)
var Soundfont = require('soundfont-player')
var ac = require('web-audio-api').AudioContext

module.exports = function (app) {
  app.get('/note/freq', (req, res) => {
    const {note, oct} = req.query;
    const freq = Note.freq(note.split("/")[0] + oct);
    res.send(freq);
  });

app.get('/note/test', (req, res)=>{
  Soundfont.instrument(ac, 'marimba', { soundfont: 'MusyngKite' }).then(function (marimba) {
    marimba.play('C4')
  })
})

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

  app.get('/sounds', async(req, res) =>{
      const {note, oct} = req.query;
      console.log(note);
      const filePath = './sounds/' +note.split("/")[0]+oct+'.wav';
      const stat = await getStat(filePath);  
      res.writeHead(200, {
        'Content-Type': 'audio/wav',
        'Content-Length': stat.size
    });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
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