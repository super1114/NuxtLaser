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
    }
  };
  