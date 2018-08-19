# API

## How to run
`
npm run start
`
or
`
 sudo docker build -t bernardoms/scalemusicapi
 sudo docker run -p 8080:8080 -d bernardoms/scalemusicapi
`
## Endpoints

Return the notes of a scale from a given note and tonic
```
localhost:8080/scale/notes?note=C&tonic=major
```

```json
["C","D","E","F","G","A","B"]
```

Return info about a given note:

```
localhost:8080/scale/frequency?note=C&acc=flat&oct=4
```

```json
{"letter":"C","acc":"b","pc":"Cb","step":0,"alt":-1,"chroma":11,"oct":4,"midi":59,"freq":246.94165062806206}
```

Returns chords of a given scale

```
localhost:8080/scale/chords?scale=major
```

```json
["5","64","M","M13","M6","M69","M7add13","M7sus4","M9","M9sus4","Madd9","Maj7","Msus2","Msus4","sus24"]
```

Returns scale names

```
localhost:8080/scale/names
```

```json
["aeolian","altered","augmented","augmented heptatonic","balinese","bebop","bebop dominant","bebop locrian","bebop major","bebop minor","chromatic","composite blues","diminished","dorian","dorian #4","double harmonic lydian","double harmonic major","egyptian","enigmatic","flamenco","flat six pentatonic","flat three pentatonic","harmonic major","harmonic minor","hirajoshi","hungarian major","hungarian minor","ichikosucho","in-sen","ionian augmented","ionian pentatonic","iwato","kafi raga","kumoijoshi","leading whole tone","locrian","locrian #2","locrian major","locrian pentatonic","lydian","lydian #5P pentatonic","lydian #9","lydian augmented","lydian diminished","lydian dominant","lydian dominant pentatonic","lydian minor","lydian pentatonic","major","major blues","major flat two pentatonic","major pentatonic","malkos raga","melodic minor","melodic minor fifth mode","melodic minor second mode","minor #7M pentatonic","minor bebop","minor blues","minor hexatonic","minor pentatonic","minor six diminished","minor six pentatonic","mixolydian","mixolydian pentatonic","mystery #1","neopolitan","neopolitan major","neopolitan major pentatonic","neopolitan minor","oriental","pelog","persian","phrygian","piongio","prometheus","prometheus neopolitan","purvi raga","ritusen","romanian minor","scriabin","six tone symmetric","spanish","spanish heptatonic","super locrian pentatonic","todi raga","vietnamese 1","vietnamese 2","whole tone","whole tone pentatonic"]
```

Return scale properties

```
localhost:8080/scale/props?scale=major
```

```json
{"intervals":["1P","2M","3M","4P","5P","6M","7M"],"name":"major","chroma":"101011010101","setnum":2773,"names":["major","ionian"]}
```
