require("dotenv/config");

const devEnv = {
  name: "default",
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_DATABASE,
  entities: ['./src/database/models/*.ts'],
  migrations: [ "./src/database/migrations/*.ts", "./src/database/migrations/*.js" ],
  cli: {
    migrationsDir: "./src/database/migrations/"
  }
};

const prodEnv = {
  name: "default",
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_DATABASE,
  entities: ['dist/src/database/models/*.js'],
  migrations: ['dist/src/database/migrations/*.js'],
  cli: {
    migrationsDir: "./src/database/migrations/"
  },
};

module.exports = process.env.NODE_ENV === 'development' ? devEnv : prodEnv;