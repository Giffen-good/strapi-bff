module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '726b5c3544e82d4f5d071c23f5cd24b5'),
  },
});
