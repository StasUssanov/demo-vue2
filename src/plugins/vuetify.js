import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru';

Vue.use(Vuetify);

const theme = {
  primary: '#652D86',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
};

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: theme,
      light: theme,
    },
  },
  lang: {
    locales: { ru },
    current: 'ru',
  },
});
