const express = require('express');
const app = express();
const methodOverride = require("method-override")
const mainRoutes = require("./src/routes/mainRoutes");
const userRoutes = require("./src/routes/userRoutes");
const productRoutes = require("./src/routes/productRoutes");
const unitRoutes = require("./src/routes/unitRoutes")
const bodyParser = require('body-parser')

app.listen(3000, () => {
  console.log("rebolucion is starting");
});
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended:false}))
 app.use(express.json())



// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded())

// parse application/json
//  app.use(bodyParser.json())

app.use(methodOverride("_method"));

app.use('/', mainRoutes);
app.use('/user', userRoutes)
app.use('/module', productRoutes)
app.use("/unit", unitRoutes)
