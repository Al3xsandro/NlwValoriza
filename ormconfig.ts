import * as dotenv from 'dotenv';
dotenv.config();

export default {
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "migrations": ["./src/database/migrations/**.ts"],
    "entities": ["./src/entities/**.ts"],
    "cli": {
        "migrationsDir": "./src/database/migrations",
        "entitiesDir": "./src/entities"
    }
}