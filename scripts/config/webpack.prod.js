const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const common = require('./webpack.common')
const paths = require('../paths')
const { shouldOpenAnalyzer, ANALYZER_HOST, ANALYZER_PORT } = require('../conf')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  target: 'browserslist',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/async/[name].[contenthash:8].js',
    path: paths.appBuild,
    assetModuleFilename: 'images/[name].[contenthash:8].[ext]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      ignoreOrder: true, // 在不同的js中引用多个相同的css时，引用先后顺序不一致会触发webpack警告，设置true忽略警告
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css'
    }),
    shouldOpenAnalyzer &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: ANALYZER_HOST,
        analyzerPort: ANALYZER_PORT
      })
  ].filter(Boolean),
  optimization: {
    chunkIds: 'named',
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: { pure_funcs: ['console.log'] }
        }
      }),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[/\\]node_modules[/\\]/,
          name: 'vendor',
          priority: 26,
          chunks: 'initial',
          reuseExistingChunk: true
        },
        asyncVendors: {
          test: /[/\\]node_modules[/\\]/,
          chunks: 'async',
          priority: 25,
          name(module) {
            const packageName = module.context.match(/[/\\]node_modules[/\\](.*?)([/\\]|$)/)[1]
            // 避免服务端不支持@
            return `npm.${packageName.replace('@', '')}`
          }
        }
      }
    }
  }
})
