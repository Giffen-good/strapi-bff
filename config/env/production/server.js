module.exports = ({ env }) => ({
  url: env("https://giffen-good-strapi-deploys.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
