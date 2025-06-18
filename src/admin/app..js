
const config = {
  locales: ['es'],
  auth: {
    logo: './extensions/logo.png',
  },
  menu: {
    logo: './extensions/logo.png',
  },
  head: {
    favicon: './extensions/favicon.ico',
  },
  translations: {
    es: {
      'app.components.LeftMenu.navbrand.title': 'Supply Argentina',
      'app.components.LeftMenu.navbrand.workplace': '',
    },
  },
  theme: {
    light: {
      colors: {
        primary100: '#e0f2e9',
        primary200: '#b3dfcc',
        primary500: '#4caf50',
        primary600: '#2e7d32',
        primary700: '#00491f',
      },
    },
  },
};

const bootstrap = () => {};

export default {
  config,
  bootstrap,
};
