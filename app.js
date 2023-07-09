const express = require('express');
const app = express();
const methodOverride = require("method-override");
const mainRoutes = require("./src/routes/mainRoutes");
const userRoutes = require("./src/routes/userRoutes");
const productRoutes = require("./src/routes/productRoutes");
const unitRoutes = require("./src/routes/unitRoutes");
const teacherRoutes = require("./src/routes/teacherRoutes");
const bodyParser = require('body-parser');
const userAuth = require("./src/middlewares/userAuth");
const { Sequelize } = require('sequelize');
const mysql = require('mysql2');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const passport = require("passport");
const PORT = process.env.PORT || 3000;

// Crear objeto sequelize antes de utilizarlo en sessionStore
const sequelize = new Sequelize('database', 'username', 'password', {
  host:  process.env.PORT ||'localhost',
  dialect: 'mysql',
  // Otras opciones de configuración según tus necesidades
});

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log('Servidor iniciado en el puerto', process.env.PORT || 3000);
});

app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const sessionStore = new SequelizeStore({
  db: sequelize,
  table: 'sessions',
});

app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(userAuth);
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
// Conectar a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

app.use(methodOverride("_method"));

app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/module', productRoutes);
app.use("/unit", unitRoutes);
app.use("/teacher", teacherRoutes);

app.use((req, res, next) => {
  res.status(404).render("not-found");
  next();
});
