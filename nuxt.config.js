import path from 'path'
import fs from 'fs'
export default {
    // Auto-load components/
    components: true,
    /*
     ** Nuxt.js modules
     */
    buildModules: [
      // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
      "@nuxtjs/tailwindcss"
    ],
    server: {
      port: 8000, // default: 3000
      // https: {
      //   key: fs.readFileSync(path.resolve(__dirname, 'cert/key.pem')),
      //   cert: fs.readFileSync(path.resolve(__dirname, 'cert/cert.pem'))
      // }
    },
    tailwindcss: {
      jit: true,
      // add '~tailwind.config` alias
      exposeConfig: true
    },
    
    modules: [
      ['nuxt-vuex-localstorage', {
        mode: 'debug',
        localStorage: ['localStorage']
      }],
      [
        '@nuxtjs/firebase',
        {
          config: {
            apiKey: 'AIzaSyDNiD3a2zEf4CEJ7t2ZdmubpDPm_spvaJY',
            authDomain: 'laserhelp-3b97d.firebaseapp.com',
            projectId: 'laserhelp-3b97d',
            storageBucket: 'laserhelp-3b97d.appspot.com',
            messagingSenderId: '324228295969',
            appId: '1:324228295969:web:dc6f8d38425b7dd745a260',
            measurementId: 'G-WMKQSDM32P'
          },
          services: {
            auth: true,
            firestore: true,
            functions: true,
            storage: true,
            database: true,
            messaging: true,
            performance: true,
            analytics: true,
            remoteConfig: true
          }
        }
      ]
    ],
    
    auth: {
      strategies: {
        local: {
          endpoints: {
            login: {url: 'login', method: 'post', propertyName: 'data.token'},
            user: {url: 'me', method: 'get', propertyName: 'data'},
            logout: false
          }
        }
      }
    },
    head: {
      title: 'LaserHelp',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'LaserHelp' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    },
  };
  