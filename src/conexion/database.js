const dotenv = require("dotenv");
const ENV = process.env.NODE_ENV || 'local';
dotenv.config({ path: `.env.${ENV}` });
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    //dialectModule: require("mysql2"),
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
  });

module.exports = { sequelize };
