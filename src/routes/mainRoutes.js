const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
/*const productController = require("../controllers/productsControllers")*/

router.get("/", mainController.index)
/*router.get("/adminpanel", mainController.admin)*/

module.exports = router