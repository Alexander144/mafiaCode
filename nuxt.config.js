const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/mafia/'
  }
} : {}

module.exports = {
  modules: [
    [
      'nuxt-fire',
      {
        useOnly: ['auth','firestore','functions','storage','realtimeDb', 'messaging'],
        customEnv: false,
        functionsLocation: 'us-central1',
        config: {
          development: {
            apiKey: 'AIzaSyAD_7EqNLrea9oq5T108tmthIm0vr4dMdA',
            authDomain: 'mafia-b689f.firebaseapp.com',
            databaseURL: 'https://mafia-b689f.firebaseio.com',
            projectId: 'mafia-b689f',
            storageBucket: 'mafia-b689f.appspot.com',
            messagingSenderId: '99869499662'
          },
          production: {
            apiKey: 'AIzaSyAD_7EqNLrea9oq5T108tmthIm0vr4dMdA',
            authDomain: 'mafia-b689f.firebaseapp.com',
            databaseURL: 'https://mafia-b689f.firebaseio.com',
            projectId: 'mafia-b689f',
            storageBucket: 'mafia-b689f.appspot.com',
            messagingSenderId: '99869499662'
          }
        }
      }
    ]
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'mafia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
 ...routerBase,
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

