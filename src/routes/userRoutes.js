const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersControllers");
const registerValidation = require("../validations/registerValidation");
const loginValidation = require("../validations/loginValidation");
const guestMiddleware = require("../middlewares/guestMiddleware")

router.get("/register", guestMiddleware ,userController.register)
router.post("/register", registerValidation, userController.createNewUser)

router.get("/login",  guestMiddleware ,userController.showLogin)
router.post("/login",  loginValidation ,userController.login)





module.exports = router