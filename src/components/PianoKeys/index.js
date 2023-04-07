import { mapGetters } from 'vuex'

export default {
  name: 'PianoKeys',
  props: { tonic: String, scale: String, keys: Array },
  computed: {
    ...mapGetters(['pianoKeys'])
  },
  methods: {
    formatNote (note) {
      return note.replace('s', '#')
    },
    formatScale (scale) {
      return scale.split('-').join(' ')
    }
  }
}
