import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
Vue.config.productionTip = false
Vue.use(Vuetify)

import Popover from 'vue-js-popover'
Vue.use(Popover)

new Vue({
  vuetify: new Vuetify({
    theme: {
      dark: true, // Puedes configurar el modo oscuro aquí
      themes: {
        dark: {
          primary: '#1976D2', // Colores personalizados para el modo oscuro
          // Agrega más colores personalizados aquí
        },
      },
    },
  }),
  render: h => h(App),
}).$mount('#app')
