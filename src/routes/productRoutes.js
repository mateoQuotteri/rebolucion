const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")
const fileUpload = require("../middlewares/multer")
/*const productController = require("../controllers/productsControllers")*/
const moduleValidator = require("../validations/createModuleValidation")
const authMiddleware = require("../middlewares/authMiddleware")
/*const adminMiddleware = require("../middlewares/adminMiddleware");*/

router.get("/", authMiddleware ,productController.index);

/*router.get("/adminpanel", mainController.admin)*/

router.get("/:id" ,  productController.showModuleDetail)

router.get("/createm", /*adminMiddleware,*/ productController.showCreateModule);

router.post("/createm",
fileUpload.single("image"), 
moduleValidator,
productController.createModule)



module.exports = router