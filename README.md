## scalemusicapi
##Technology
node with node express to build the api
##How to run
npm run start
##Endpoints 

Return the notes of a scale from a given note and tonic
localhost:8080/note

Parameters:
note: the letter of a note ex: C
tonic: a tonic. Ex: major

Example:
	localhost:8080/note?note=C&tonic=major
```sh
Returns:
{
 "notes": [
      "C",
        "D",
        "E",
        "F",
        "G",
        "A",
        "B"
    ]
}
```

Return info about a given note:
localhost:8080/frequency

Parameters:
note: the letter of a note. Ex: C
acc: the accidentals of the note (only sharps or flats). Ex: flat
oct: the octave number (as integer) Ex: 4

Example:
	localhost:8080/frequency?note=C&acc=flat&oct=4
```sh
Returns:
{
    "letter": "C",
    "acc": "b",
    "pc": "Cb",
    "step": 0,
    "alt": -1,
    "chroma": 11,
    "oct": 4,
    "midi": 59,
    "freq": 246.94165062806206
}
```

Returns the chord of a given scale
localhost:8080/chords
Parameters:
scale: the name of a scale. Ex: major

Example:
localhost:8080/chords?scale=major

Returns:

```sh
{
    "chords": [
        "5",
        "64",
        "M",
        "M13",
        "M6",
        "M69",
        "M7add13",
        "M7sus4",
        "M9",
        "M9sus4",
        "Madd9",
        "Maj7",
        "Msus2",
        "Msus4",
        "sus24"
    ]
}
```

Return the intervals of a given scale
localhost:8080/intervals
Parameters:
scale: the name of a scale. Ex: major


Example:
localhost:8080/chords?scale=major

Returns:
```sh
{
    "intervals": [
        "1P",
        "2M",
        "3M",
        "4P",
        "5P",
        "6M",
        "7M"
    ]
}
```

Returns scale name
localhost:8080/scalenames
Parameters:
there is no parameters.

Example:
localhost:8080/scalenames

```sh
Returns:
{
    "scalenames": [
        "aeolian",
        "altered",
        "augmented",
        "augmented heptatonic",
        "balinese",
        "bebop",
        "bebop dominant",
        "bebop locrian",
        "bebop major",
        "bebop minor",
        "chromatic",
        "composite blues",
        "diminished",
        "dorian",
        "dorian #4",
        "double harmonic lydian",
        "double harmonic major",
        "egyptian",
        "enigmatic",
        "flamenco",
        "flat six pentatonic",
        "flat three pentatonic",
        "harmonic major",
        "harmonic minor",
        "hirajoshi",
        "hungarian major",
        "hungarian minor",
        "ichikosucho",
        "in-sen",
        "ionian augmented",
        "ionian pentatonic",
        "iwato",
        "kafi raga",
        "kumoijoshi",
        "leading whole tone",
        "locrian",
        "locrian #2",
        "locrian major",
        "locrian pentatonic",
        "lydian",
        "lydian #5P pentatonic",
        "lydian #9",
        "lydian augmented",
        "lydian diminished",
        "lydian dominant",
        "lydian dominant pentatonic",
        "lydian minor",
        "lydian pentatonic",
        "major",
        "major blues",
        "major flat two pentatonic",
        "major pentatonic",
        "malkos raga",
        "melodic minor",
        "melodic minor fifth mode",
        "melodic minor second mode",
        "minor #7M pentatonic",
        "minor bebop",
        "minor blues",
        "minor hexatonic",
        "minor pentatonic",
        "minor six diminished",
        "minor six pentatonic",
        "mixolydian",
        "mixolydian pentatonic",
        "mystery #1",
        "neopolitan",
        "neopolitan major",
        "neopolitan major pentatonic",
        "neopolitan minor",
        "oriental",
        "pelog",
        "persian",
        "phrygian",
        "piongio",
        "prometheus",
        "prometheus neopolitan",
        "purvi raga",
        "ritusen",
        "romanian minor",
        "scriabin",
        "six tone symmetric",
        "spanish",
        "spanish heptatonic",
        "super locrian pentatonic",
        "todi raga",
        "vietnamese 1",
        "vietnamese 2",
        "whole tone",
        "whole tone pentatonic"
    ]
}
```

Return a json with a scale properties
localhost:8080/scaleprop

Parameters:
scale: the name of a scale. Ex: major

Example:
localhost:8080/scaleprop?scale=major
```sh
Returns:

{
    "intervals": [
        "1P",
        "2M",
        "3M",
        "4P",
        "5P",
        "6M",
        "7M"
    ],
    "name": "major",
    "chroma": "101011010101",
    "setnum": 2773,
    "names": [
        "major",
        "ionian"
    ]
}
```