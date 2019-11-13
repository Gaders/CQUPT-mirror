module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查

  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8082,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://mirrors.redrock.team/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    }, // 设置代理

  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
};

