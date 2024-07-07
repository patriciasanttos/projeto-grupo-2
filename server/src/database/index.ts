import { Sequelize } from "sequelize";
import dbConfig from "./config/database"

const connection = new Sequelize(String(dbConfig.database), String(dbConfig.username), dbConfig.password, {
    dialect: 'postgres',
    host: dbConfig.host,
    port: dbConfig.port,
    define: dbConfig.define,
    logging: false
});

export default connection;