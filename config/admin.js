module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'test-admin-jwt-secret'), // Solo para pruebas
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'test-api-token-salt'), // Solo para pruebas
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'test-transfer-token-salt'), // Solo para pruebas
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
