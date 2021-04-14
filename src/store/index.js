import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters';

const modulesFiles = require.context('./modules',true,/\.js$/)
console.log(modulesFiles.keys().modules);

//modulesFiles.keys()得到一个moduels文件夹的文件路径的数组
const modules = modulesFiles.keys().reduce((modules,modulePath) => {
  // './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
},{})

export default new Vuex.Store({
  modules,
  getters
})
