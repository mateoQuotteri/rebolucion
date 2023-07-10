const {Sequelize} = require("sequelize");

const sequelize = new Sequelize({
  username : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DABATABASE,
  dialect : "mysql",
  port : process.env.DB_PORT,
  host : procces.env.DB_HOST,
})

module.exports = sequelize;