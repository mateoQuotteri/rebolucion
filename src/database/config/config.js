const DB_USER = process.env.DB_USER;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASS = process.env.DB_PASS;
const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASS || "123456",
    "database": process.env.DB_USER || "rebolucion_db",
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": process.env.DB_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
