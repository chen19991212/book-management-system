import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters';
Vue.use(Vuex)



const modulesFiles = require.context('./modules',true,/\.js$/)
//modulesFiles.keys()得到一个moduels文件夹的文件路径的数组
const modules = modulesFiles.keys().reduce((modules,modulePath) => {
  // './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
},{})
const store = new Vuex.Store({
  modules,
  getters
})
export default store 
