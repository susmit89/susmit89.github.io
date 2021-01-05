const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://raw.githubusercontent.com/susmit89/susmit89.github.io/gh-pages/' : '',
}
