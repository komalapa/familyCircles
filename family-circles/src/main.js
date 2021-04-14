import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faCheck, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store/index.js'

library.add(faEdit)
library.add(faCheck)
library.add(faTrashAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$store = store;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
