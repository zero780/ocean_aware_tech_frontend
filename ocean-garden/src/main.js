import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  vuetify: new Vuetify({
    theme: {
      dark: false, // Puedes configurar el modo oscuro aquí
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
