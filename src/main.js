import Vue from 'vue'

import router from './router'
import store from './store'

import './permission'

import { 
  Form, 
  FormItem, 
  Input, 
  Icon,
  Button,
  Tooltip
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import App from './App.vue'


Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Tooltip)


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
