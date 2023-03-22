const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
    devServer:{
      before:require('./mock/index.js')
    }
}