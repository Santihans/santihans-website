import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VIcon,
  VAlert,
  VTextField,
  VGrid,
  transitions
} from 'vuetify'
import { Ripple } from 'vuetify/es5/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    Vuetify,
    VGrid,
    VIcon,
    VAlert,
    VTextField
  },
  directives: {
    Ripple
  },
  transitions,
  theme: {
    primary: '#F96673',
    accent: '#ce93d8',
    secondary: '#424242',
    info: '#0D47A1',
    warning: '#ffb300',
    error: '#B71C1C',
    success: '#49a577'
  }
})
