const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
/*const productController = require("../controllers/productsControllers")*/
const authMiddleware = require("../middlewares/authMiddleware")
router.get("/", mainController.index)
/*router.get("/adminpanel", mainController.admin)*/

router.get("/aviso", authMiddleware ,mainController.aviso)

router.get("/contact-us", authMiddleware,mainController.contact)
module.exports = router