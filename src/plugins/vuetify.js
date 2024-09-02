import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default createVuetify({
  icons: {
    defaultSet: 'mdi'
  },
  ssr: true
})
