const express = require("express")
const router = express.Router()
const userController = require("../controllers/usersControllers")
/*const productController = require("../controllers/productsControllers")*/

router.get("/register", userController.register)
router.post("/register", userController.createNewUser)

router.get("/login", userController.showLogin)
router.post("/login", userController.login)
module.exports = router