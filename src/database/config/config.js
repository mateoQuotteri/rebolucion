module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "host": process.env.MYSQLHOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "host": process.env.MYSQLHOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "host": process.env.MYSQLHOST,
    "dialect": "mysql"
  },
}

