import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App.vue'
import wln from './wlnapp.js'

Vue.use(Vuex)
const routes = []
import Index from './index.vue'
routes.push({path: '/', component: Index })

const store = new Vuex.Store({
  state: {
    uid: '',
    sessionkey: '',
    dialogMsg: '',
    dialogShow: false,
    network: 0,
    error: '',
    tip: ''
  },
  mutations: {
    tip (state, msg) {
      state.tip = msg
    }
    , error (state, msg) {
      state.error = msg
    }
    , dialog (state, msg) {
      if (msg) {
        state.dialogMsg = msg
        state.dialogShow = true
      } else {
        state.dialogMsg = ''
        state.dialogShow = false
      }
    }
    , network (state, val) {
      state.network = val
    }
    , session (state, obj) {
      state.uid = obj.uid || state.uid
      state.sessionkey = obj.sessionkey || state.sessionkey
    }
  }
})

Vue.prototype.$store = store
Vue.config.productionTip = false
if (wln.InBrowser) {
  const app = new Vue({
    el: '#app',
    store: store,
    render: h => h(App),
    router: new Router({mode: 'history', routes: routes })
  })
} else {
  new Vue({store: store}).$mount()
}