import { createStore } from 'vuex'

export default createStore({
  state: {
    pianoKeys: [
      { note: 'C', sharp: false },
      { note: 'Cs', sharp: true },
      { note: 'D', sharp: false },
      { note: 'Ds', sharp: true },
      { note: 'E', sharp: false },
      { note: 'F', sharp: false },
      { note: 'Fs', sharp: true },
      { note: 'G', sharp: false },
      { note: 'Gs', sharp: true },
      { note: 'A', sharp: false },
      { note: 'As', sharp: true },
      { note: 'B', sharp: false }
    ]
  },
  getters: {
    pianoKeys: state => state.pianoKeys
  },
  mutations: {},
  actions: {},
  modules: {}
})
