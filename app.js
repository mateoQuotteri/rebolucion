const express = require('express');
const app = express();
const methodOverride = require("method-override")
const mainRoutes = require("./src/routes/mainRoutes");
const userRoutes = require("./src/routes/userRoutes");
const productRoutes = require("./src/routes/productRoutes");
const unitRoutes = require("./src/routes/unitRoutes")
const teacherRoutes = require("./src/routes/teacherRoutes")
const bodyParser = require('body-parser')
const userAuth = require("./src/middlewares/userAuth")

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const passport = require("passport")
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("rebolucion is starting");
});
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended:false}))
 app.use(express.json())

 
 
 const sessionStore = new SequelizeStore({
  db: sequelize, // Objeto Sequelize que representa tu conexión a la base de datos
  table: 'sessions', // Nombre de la tabla para almacenar las sesiones
});

app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
}));
    
    
     app.use(passport.initialize())
     // init passport on every route call.app.use(passport.session()) 
     app.use(passport.session())   
     // allow passport to use "express-session".


     app.use(userAuth)

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded())

// parse application/json
//  app.use(bodyParser.json())

app.use(methodOverride("_method"));

app.use('/', mainRoutes);
app.use('/user', userRoutes)
app.use('/module', productRoutes)
app.use("/unit", unitRoutes)
app.use("/teacher", teacherRoutes)

app.use((req, res, next) => {
  res.status(404).render("not-found")
  next()
})
