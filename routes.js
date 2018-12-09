const {Note, Scale} = require("tonal");
const {enharmonic} = require('tonal-note');
const fs = require('fs');
const getStat = require('util').promisify(fs.stat)
const { resolve } = require('path')

module.exports = function (app) {
  app.get('/note/freq', (req, res) => {
    const {note, oct} = req.query;
    const freq = Note.freq(note.split("/")[0] + oct);
    res.send(freq);
  });

  app.get("/instrument/:instrument_name", (req, res) => {
    const { instrument_name } = req.params;
    const filePath = "./soundfont/" + instrument_name;
    res.sendFile(resolve(filePath));
  })

  app.get('/scale/notes', (req, res) => {
    const { note, tonic } = req.query;
    const firstNote = note.split("/")[0];
    const translatedScale = translateScale(tonic)
    const notes = Scale.notes(firstNote, translatedScale);

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
      let {note, oct} = req.query;
      if(note.includes("b")){
        note = note.split("/")[1]
      }
      const filePath = './sounds/' + note + oct + '.mp3';
      const stat = await getStat(filePath);  
      res.writeHead(200, {
        'Content-Type': 'audio/mp3',
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