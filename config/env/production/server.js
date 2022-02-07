module.exports = ({ env }) => ({
  host: "0.0.0.0",
  url: env("https://giffen-good-strapi-deploys.herokuapp.com"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
