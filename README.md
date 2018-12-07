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

Returns scale names

```
localhost:8080/scale/names
```

```json
["Maior", "Menor Natural", "Menor Melódica", "Menor Harmônica"]
```

Return the frequency of a given note

```
localhost:8080/note/freq?note=C&oct=2
```

```json
{"65.40639132514966"}
```

Return the sound of a given note

```
localhost:8080/sounds?note=C&oct=2
```

```
returns a .wav sound file
```
