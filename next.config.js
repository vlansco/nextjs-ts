const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

const getBuildConfig = () => {
  const path = require('path')

  return {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        include: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeAttrs: { attrs: '(fill)' } },
                { removeTitle: true },
                { cleanupIDs: true },
                { removeStyleElement: true },
              ],
            },
          },
        ],
      })
      return config
    },
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['en', 'fr'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'en'
    },
  }
}

module.exports = (phase, { defaultConfig }) => {
  const shouldAddBuildConfig =
    phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD
  return shouldAddBuildConfig ? getBuildConfig() : defaultConfig
}
