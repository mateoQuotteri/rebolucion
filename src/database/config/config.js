const {Sequelize} = require("sequelize");

const sequelize = new Sequelize({
  username : procces.env.DB_USERNAME,
  password : procces.env.DB_PASSWORD,
  database : procces.env.DB_DABATABASE,
  dialect : "mysql",
  port : process.env.DB_PORT,
  host : procces.env.DB_HOST,
})

module.exports = sequelize;