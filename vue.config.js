const path = require('path')

function resolve(pathname) {
  return path.resolve(__dirname, pathname)
}

module.exports = {
  configureWebpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      assets: resolve('./src/assets'),
      utils: resolve('./src/utils'),
      home: resolve('./src/views/home'),
      polife: resolve('./src/views/polife'),
      newphone: resolve('./src/views/newphone')

    }
  },

  devServer: {
    proxy: {
      '/portal-api': {
        target: 'https://m.aihuishou.com/',
        changeOrigin: true
      }
    }
    
  }
}