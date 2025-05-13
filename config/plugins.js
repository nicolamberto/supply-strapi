module.exports = ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET', 'claveSuperSecretaDePrueba123!'),
        },
    },
    upload: {
        config: {
            provider: '@strapi/provider-upload-cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
});
