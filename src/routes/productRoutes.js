const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")
const fileUpload = require("../middlewares/multer")
/*const productController = require("../controllers/productsControllers")*/
const moduleValidator = require("../validations/createModuleValidation")

router.get("/", productController.index);

/*router.get("/adminpanel", mainController.admin)*/

router.get("/createm", productController.showCreateModule);

router.post("/createm",
fileUpload.single("image"), 
moduleValidator,
productController.createModule)



module.exports = router