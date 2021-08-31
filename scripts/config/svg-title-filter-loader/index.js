module.exports = function titleFilter(source) {
  const pattern = /<title>[^<]*?<\/title>/g
  return source.replace(pattern, '')
}
