import { mapGetters } from 'vuex'

export default {
  name: 'PianoNotes',
  props: {
    scale: String,
    notes: Array
  },
  computed: {
    ...mapGetters(['pianoKeys'])
  }
}
