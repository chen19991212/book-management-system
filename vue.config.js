module.exports = {
  publicPath: './',
  lintOnSave: false,
  outputDir: 'dist',
  /* devServer:{
    host: '169.254.55.244',
    hot: true,
    disableHostCheck: true
  }, */
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        'utils':'@/utils',
        'api':'@/api',
        'layout':'@/layout',
        'router': '@/router'
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