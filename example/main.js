import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import EleForm from 'vue-ele-form'
import EleFormCodemirror from '../lib/index'
import 'element-ui/lib/theme-chalk/index.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-dark.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('codemirror', EleFormCodemirror)
Vue.use(EleForm, {
  codemirror: {
    options: {
      theme: 'base16-dark',
      tabSize: 4,
      mode: 'text/javascript',
      lineNumbers: true,
      line: true
    }
    // events: ['scroll', ...]
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
