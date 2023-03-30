const express = require("express")
const router = express.Router()
const unitController = require("../controllers/unitController");
const unitValidation = require("../validations/createUnitValidation")
/*const productController = require("../controllers/productsControllers")*/
const authMiddleware = require("../middlewares/authMiddleware")
const adminMiddleware = require("../middlewares/adminMiddleware");
router.get("/", authMiddleware ,unitController.showAllUnit)

/*router.get("/adminpanel", mainController.admin)*/

router.get("/create",adminMiddleware, unitController.showCreateUnit)
router.post("/create", adminMiddleware ,unitValidation ,unitController.createUnit)


router.get("/showunitstoedit", adminMiddleware, unitController.showUnitsToEdit);
router.get("/editunit/:id", adminMiddleware, unitController.showEditUnit);

router.put("/editunit/:id",  
 unitValidation,
 unitController.editUnit);

router.get("/:id", authMiddleware  ,unitController.showUnitDetail)



module.exports = router