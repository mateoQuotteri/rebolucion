module.exports = {
  "development": {
    "username": process.env.MYSQL_USER || "root",
    "password": process.env.MYSQLPASSWORD || "123456",
    "database":  process.env.MYSQLDATABASE || "rebolucion_db",
    "host": process.env.MYSQLHOST || "127.0.0.1",
    "port": process.env.MYSQLPORT || "3306", 
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "host": process.env.MYSQLHOST,
    "port" :process.env.MYSQLPORT ,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "HqnfTEl9lsnQ4kUtLcCy",
    "database": "railway",
    "host": "containers-us-west-18.railway.app",
    "port" : "6942", 
    "dialect": "mysql"
  },
}


/**
 *module.exports = {
  "development": {
    "username": process.env.MYSQL_USER || "root",
    "password": process.env.MYSQLPASSWORD || "123456",
    "database":  process.env.MYSQLDATABASE || "rebolucion_db",
    "host": process.env.MYSQLHOST || "127.0.0.1",
    "port": process.env.MYSQLPORT || "3306", 
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "host": process.env.MYSQLHOST,
    "port" :process.env.MYSQLPORT ,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "host": process.env.MYSQLHOST,
    "port" : process.env.MYSQLPORT, 
    "dialect": "mysql"
  },
}


 */