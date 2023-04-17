const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
/*const productController = require("../controllers/productsControllers")*/
const authMiddleware = require("../middlewares/authMiddleware")
const adminMiddleware = require("../middlewares/adminMiddleware");
router.get("/", mainController.index)
/*router.get("/adminpanel", mainController.admin)*/

router.get("/aviso", authMiddleware ,mainController.aviso)

router.get("/contact-us", authMiddleware,mainController.contact)
router.get("/adminpanel", authMiddleware, adminMiddleware, mainController.showAdminPanel)


module.exports = router