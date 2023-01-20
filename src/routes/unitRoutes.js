const express = require("express")
const router = express.Router()
const unitController = require("../controllers/unitController")
/*const productController = require("../controllers/productsControllers")*/

router.get("/", unitController.showAllUnit)

/*router.get("/adminpanel", mainController.admin)*/

router.get("/create", unitController.showCreateUnit)
router.post("/create", unitController.createUnit)



module.exports = router