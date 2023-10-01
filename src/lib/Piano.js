import { PianoNotes } from "../assets/notes";
import Sample from "./Sample";

export default class Piano {
  static notes = {
    C: {
      isSharp: false,
      name: "C",
      sample: new Sample(PianoNotes.C),
    },
    Cs: {
      isSharp: true,
      name: "C#",
      sample: new Sample(PianoNotes.Cs),
    },
    D: {
      isSharp: false,
      name: "D",
      sample: new Sample(PianoNotes.D),
    },
    Ds: {
      isSharp: true,
      name: "D#",
      sample: new Sample(PianoNotes.Ds),
    },
    E: {
      isSharp: false,
      name: "E",
      sample: new Sample(PianoNotes.E),
    },
    F: {
      isSharp: false,
      name: "F",
      sample: new Sample(PianoNotes.F),
    },
    Fs: {
      isSharp: true,
      name: "F#",
      sample: new Sample(PianoNotes.Fs),
    },
    G: {
      isSharp: false,
      name: "G",
      sample: new Sample(PianoNotes.G),
    },
    Gs: {
      isSharp: true,
      name: "G#",
      sample: new Sample(PianoNotes.Gs),
    },
    A: {
      isSharp: false,
      name: "A",
      sample: new Sample(PianoNotes.A),
    },
    As: {
      isSharp: true,
      name: "A#",
      sample: new Sample(PianoNotes.As),
    },
    B: {
      isSharp: false,
      name: "B",
      sample: new Sample(PianoNotes.B),
    },
  };

  static scales = [
    {
      name: "major",
      structure: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    },
    {
      name: "major-bebop",
      structure: [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    },
    {
      name: "major-pentatonic",
      structure: [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    },
    {
      name: "minor-harmonic",
      structure: [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
    },
    {
      name: "minor-hungarian",
      structure: [1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    },
    {
      name: "minor-melodic",
      structure: [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    },
    {
      name: "minor-natural",
      structure: [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    },
    {
      name: "minor-neapolitan",
      structure: [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
    },
    {
      name: "minor-pentatonic",
      structure: [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    },
    {
      name: "arabic",
      structure: [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
    },
    {
      name: "blues",
      structure: [1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0],
    },
    {
      name: "diminished",
      structure: [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
    },
    {
      name: "dominant-bebop",
      structure: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
    },
    {
      name: "dorian",
      structure: [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    },
    {
      name: "enigmatic",
      structure: [1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    },
    {
      name: "japanese-insen",
      structure: [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    },
    {
      name: "locrian",
      structure: [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
    },
    {
      name: "lydian",
      structure: [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    },
    {
      name: "mixolydian",
      structure: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
    },
    {
      name: "neapolitan",
      structure: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    },
    {
      name: "phrygian",
      structure: [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    },
    {
      name: "whole-tone",
      structure: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    },
  ];

  static note = {
    general: {
      width: 56,
      height: 280,
      sharpHeight: 200,
    },
    filtered: {
      width: 24,
      height: 96,
      sharpHeight: 80,
    },
  };

  static play(note) {
    Piano.notes[note].sample.play();
  }

  static filter(keys) {
    if (keys.every((key) => key === "-")) {
      return [];
    }

    const keysLength = keys.filter((key) => key === 1).length;

    const filtered = Piano.scales.reduce((values, scale) => {
      const structure = [...scale.structure];

      const filteredTonics = Object.keys(Piano.notes).reduce((values, note) => {
        let matched = 0;

        keys.forEach((key, index) => {
          if (key === structure[index]) {
            matched += 1;
          }
        });

        const value = keysLength === matched && {
          tonic: note,
          scale: scale.name,
          keys: [...structure],
        };

        structure.unshift(structure.pop());

        return [...values, ...(value ? [value] : [])];
      }, []);

      if (filteredTonics.length) {
        return [...values, ...filteredTonics];
      }

      return values;
    }, []);

    return filtered;
  }
}
