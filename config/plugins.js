module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-cloudinary',
      providerOptions: {
        cloud_name: env('do9uhdawv'),
        api_key: env('171531986578154'),
        api_secret: env('gWXUTRr1aZicGHrH8M21BXLQ24E'),
      },
    },
  },
});