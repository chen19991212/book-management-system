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
  Tooltip,
  Scrollbar,
  Menu,
  MenuItem,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Upload,
  Message,
  Tree
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.less'

import App from './App.vue'


Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Scrollbar)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
//Vue.use(Message)
Vue.use(Tree)



Vue.prototype.$message = Message


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
