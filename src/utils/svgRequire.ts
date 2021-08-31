const requireAll = (context: __WebpackModuleApi.RequireContext) => context.keys().map((element) => context(element))
const svgs = require.context('@/assets/svg', true, /\.svg$/)
export default () => {
  requireAll(svgs)
}
