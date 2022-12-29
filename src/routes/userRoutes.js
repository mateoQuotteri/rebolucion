const express = require("express")
const router = express.Router()
const userController = require("../controllers/usersControllers")
/*const productController = require("../controllers/productsControllers")*/

router.get("/register", userController.register)


module.exports = router