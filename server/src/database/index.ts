import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    name:<string> process.env.DATABASE_NAME,
    user:<string> process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
}

const connection = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
    dialect: 'postgres',
    host: dbConfig.host,
    port: dbConfig.port,
    define: {
        timestamps: true,
        underscored: true
    },
});

export default connection;