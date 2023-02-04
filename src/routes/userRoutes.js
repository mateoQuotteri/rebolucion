const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersControllers");
const registerValidation = require("../validations/registerValidation");
const loginValidation = require("../validations/loginValidation")

router.get("/register", userController.register)
router.post("/register", registerValidation, userController.createNewUser)

router.get("/login", userController.showLogin)
router.post("/login",  loginValidation ,userController.login)





module.exports = router