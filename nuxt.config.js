export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'todo-web',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  router: {
    middleware: ['auth'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.ts',
    '~/plugins/vee-validate.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'dayjs-nuxt',
    '@nuxtjs/toast',
  ],
  dayjs: {
    locales: ['en'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'Asia/Bangkok',
  },
  toast: {
    position: 'top-center',
    duration: 3000,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
  },
  auth: {
    localStorage: false,
    strategies: {
      local: {
        user: {
          property: false
        },
        endpoints: {
          login: {
            url: '/users/auth',
            method: 'post',
            propertyName: 'token'
          },
          logout: false,
          user: false
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/'
    }
  },

  bootstrapVue: {
    // icons: true,
    // bootstrapCSS: false,
    // bootstrapVueCSS: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    babel: {
      compact: true
    }
  },
}
