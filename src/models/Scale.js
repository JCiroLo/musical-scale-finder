export default class Scale {
  static scales = [
    {
      name: 'major',
      structure: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1]
    },
    {
      name: 'major-bebop',
      structure: [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1]
    },
    {
      name: 'major-pentatonic',
      structure: [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0]
    },
    {
      name: 'minor-harmonic',
      structure: [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1]
    },
    {
      name: 'minor-hungarian',
      structure: [1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1]
    },
    {
      name: 'minor-melodic',
      structure: [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1]
    },
    {
      name: 'minor-natural',
      structure: [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0]
    },
    {
      name: 'minor-neapolitan',
      structure: [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
    },
    {
      name: 'minor-pentatonic',
      structure: [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0]
    },
    {
      name: 'arabic',
      structure: [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
    },
    {
      name: 'blues',
      structure: [1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0]
    },
    {
      name: 'diminished',
      structure: [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1]
    },
    {
      name: 'dominant-bebop',
      structure: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1]
    },
    {
      name: 'dorian',
      structure: [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0]
    },
    {
      name: 'enigmatic',
      structure: [1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1]
    },
    {
      name: 'japanese-insen',
      structure: [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0]
    },
    {
      name: 'locrian',
      structure: [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
    },
    {
      name: 'lydian',
      structure: [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1]
    },
    {
      name: 'mixolydian',
      structure: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0]
    },
    {
      name: 'neapolitan',
      structure: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
    },
    {
      name: 'phrygian',
      structure: [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
    },
    {
      name: 'whole-tone',
      structure: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
    }
  ]

  static notes = [
    'C',
    'Cs',
    'D',
    'Ds',
    'E',
    'F',
    'Fs',
    'G',
    'Gs',
    'A',
    'As',
    'B'
  ]

  static getAll () {
    return this.scales
  }

  static filter ({ keys }) {
    if (keys.every(key => key === '-')) {
      return []
    }

    const keysLength = keys.filter(key => key === 1).length

    const filtered = this.scales.reduce((values, scale) => {
      const structure = [...scale.structure]

      const filteredTonics = this.notes.reduce((values, note) => {
        let matched = 0

        keys.forEach((key, index) => {
          if (key === structure[index]) {
            matched += 1
          }
        })

        const value = keysLength === matched && {
          tonic: note,
          scale: scale.name,
          keys: [...structure]
        }

        structure.unshift(structure.pop())

        return [...values, ...(value ? [value] : [])]
      }, [])

      if (filteredTonics.length) {
        return [...values, ...filteredTonics]
      }

      return values
    }, [])

    return filtered
  }
}
