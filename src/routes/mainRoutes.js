const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
/*const productController = require("../controllers/productsControllers")*/
const authMiddleware = require("../middlewares/authMiddleware")
const adminMiddleware = require("../middlewares/adminMiddleware");
const passport = require("passport")
const auth = require("../middlewares/auth")

router.get("/", mainController.index)
/*router.get("/adminpanel", mainController.admin)*/

router.get("/aviso", authMiddleware ,mainController.aviso)

router.get("/contact-us", authMiddleware,mainController.contact)
router.get("/adminpanel", authMiddleware, adminMiddleware, mainController.showAdminPanel)

router.get("/auth/google" , passport.authenticate("google" ,{scope: ["email" , "profile"] }, ))

router.get("/google/callback", passport.authenticate(
    "google",
    {
        failureRedirect : "/auth/failure"
     }
),passport.authenticate('session'), function (req,res) {
    console.log(req.session.loggedUser);
    res.redirect("/")
}
)

router.get("auth/failure", (req,res)=>{
    res.send("some was wrong")
})



module.exports = router