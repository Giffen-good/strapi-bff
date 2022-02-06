module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'bff_postgres'),
        username: env('DATABASE_USERNAME', 'bff_super_user'),
        password: env('DATABASE_PASSWORD', 'use and value diversity'),
        schema: env("DATABASE_SCHEMA", "public"),
    },
  }
});
