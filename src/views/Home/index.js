import ToggleButton from '@vueform/toggle'
import * as Tone from 'tone'
import Keys from '../../assets/piano'

let piano = null

export default {
  name: 'ScaleFinder',
  components: {
    ToggleButton
  },
  data () {
    return {
      loadingNotes: true,
      settings: false,
      onPressing: false,
      findButtonState: {
        loading: false
      },
      pianoKeys: {
        C: { sharp: false, selected: false },
        Cs: { sharp: true, selected: false },
        D: { sharp: false, selected: false },
        Ds: { sharp: true, selected: false },
        E: { sharp: false, selected: false },
        F: { sharp: false, selected: false },
        Fs: { sharp: true, selected: false },
        G: { sharp: false, selected: false },
        Gs: { sharp: true, selected: false },
        A: { sharp: false, selected: false },
        As: { sharp: true, selected: false },
        B: { sharp: false, selected: false }
      },
      pianorResults: []
    }
  },
  watch: {
    'pianoKeys.C': {
      async handler (next, prev) {
        piano.triggerAttack(['C5'])
      },
      deep: true
    },
    'pianoKeys.Cs': {
      async handler (next, prev) {
        piano.triggerAttack(['C#5'])
      },
      deep: true
    },
    'pianoKeys.C': {
      async handler (next, prev) {
        piano.triggerAttack(['C5'])
      },
      deep: true
    },
    'pianoKeys.D': {
      async handler (next, prev) {
        piano.triggerAttack(['D5'])
      },
      deep: true
    },
    'pianoKeys.Ds': {
      async handler (next, prev) {
        piano.triggerAttack(['D#5'])
      },
      deep: true
    },
    'pianoKeys.E': {
      async handler (next, prev) {
        piano.triggerAttack(['E5'])
      },
      deep: true
    },
    'pianoKeys.F': {
      async handler (next, prev) {
        piano.triggerAttack(['F5'])
      },
      deep: true
    },
    'pianoKeys.Fs': {
      async handler (next, prev) {
        piano.triggerAttack(['F#5'])
      },
      deep: true
    },
    'pianoKeys.G': {
      async handler (next, prev) {
        piano.triggerAttack(['G5'])
      },
      deep: true
    },
    'pianoKeys.Gs': {
      async handler (next, prev) {
        piano.triggerAttack(['G#5'])
      },
      deep: true
    },
    'pianoKeys.A': {
      async handler (next, prev) {
        piano.triggerAttack(['A5'])
      },
      deep: true
    },
    'pianoKeys.As': {
      async handler (next, prev) {
        piano.triggerAttack(['A#5'])
      },
      deep: true
    },
    'pianoKeys.B': {
      async handler (next, prev) {
        piano.triggerAttack(['B5'])
      },
      deep: true
    }
  },
  methods: {
    handleKeyDown (e) {
      console.log(e)
    },
    handleKeyUp () {}
  },
  beforeMount () {
    piano = new Tone.Sampler({
      urls: {
        C5: Keys['C'],
        'C#5': Keys['Cs'],
        D5: Keys['D'],
        'D#5': Keys['Ds'],
        E5: Keys['E'],
        F5: Keys['F'],
        'F#5': Keys['Fs'],
        G5: Keys['G'],
        'G#5': Keys['Gs'],
        A5: Keys['A'],
        'A#5': Keys['As'],
        B5: Keys['B']
      },
      onload: () => {
        this.loadingNotes = false
      }
    }).toDestination()

    window.addEventListener('keydown', ({ code }) => {
      switch (code) {
        case 'KeyQ':
          this.pianoKeys.C.selected = !this.pianoKeys.C.selected
          break
        case 'Digit2':
          this.pianoKeys.Cs.selected = !this.pianoKeys.Cs.selected
          break
        case 'KeyW':
          this.pianoKeys.D.selected = !this.pianoKeys.D.selected
          break
        case 'Digit3':
          this.pianoKeys.Ds.selected = !this.pianoKeys.Ds.selected
          break
        case 'KeyE':
          this.pianoKeys.E.selected = !this.pianoKeys.E.selected
          break
        case 'KeyR':
          this.pianoKeys.F.selected = !this.pianoKeys.F.selected
          break
        case 'Digit5':
          this.pianoKeys.Fs.selected = !this.pianoKeys.Fs.selected
          break
        case 'KeyT':
          this.pianoKeys.G.selected = !this.pianoKeys.G.selected
          break
        case 'Digit6':
          this.pianoKeys.Gs.selected = !this.pianoKeys.Gs.selected
          break
        case 'KeyY':
          this.pianoKeys.A.selected = !this.pianoKeys.A.selected
          break
        case 'Digit7':
          this.pianoKeys.As.selected = !this.pianoKeys.As.selected
          break
        case 'KeyU':
          this.pianoKeys.B.selected = !this.pianoKeys.B.selected
          break
      }
    })
  },
  beforeDestroy () {
    window.removeEventListener('keydown', () => {})
  }
}
