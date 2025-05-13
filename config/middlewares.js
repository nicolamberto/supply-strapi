module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
 {
    name: 'strapi::cors',
    config: {
      origin: ['https://supply-six.vercel.app'], // tu dominio frontend
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: '*',
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
