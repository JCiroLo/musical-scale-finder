import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Loader from './components/Loader/index.vue'
import PianoKeys from './components/PianoKeys/index.vue'

createApp(App)
  .use(store)
  .use(router)
  .component('Loader', Loader)
  .component('PianoKeys', PianoKeys)
  .mount('#app')
