const dotenv = require("dotenv");
dotenv.config();

const db = {
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  name: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD
}

const dbConfig = {
  dialect: 'postgres',
  host: db.host,
  port: db.port,
  username: db.user,
  password: db.password,
  database: db.name,
  define: {
    underscored: true
  }
}

module.exports = dbConfig;