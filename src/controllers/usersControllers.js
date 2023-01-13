const db = require("../database/models")

module.exports = {
    register : (req,res)=>{
        res.render("register")
    },
    createNewUser: (req,res)=>{
        const user = JSON.parse(JSON.stringify(req.body))
        console.log(user);
        db.Users.create({
            email: req.body.email,
            name: req.body.name,
            celular: req.body.phoneNumber,
            /*SE DEBERIA HASHEAR LA PASS*/ 
            password: req.body.password,
           
        }).then((user) => {
            res.redirect("/users/login")
        })
        res.redirect("/users/login")
    },
    showLogin : (req,res)=>{
        res.render("login")
    },
    login: (req,res)=>{
        console.log("ESTOY AQUI")
        console.log(req.body)
        res.redirect("/user/register")
    },

}