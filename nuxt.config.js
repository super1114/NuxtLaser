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
    tailwindcss: {
      jit: true,
      // add '~tailwind.config` alias
      exposeConfig: true
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
  