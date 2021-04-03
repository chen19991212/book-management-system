module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions:{
      less: {
        javascriptEnabled: true
      }
    },
    //modules: false
  }
}