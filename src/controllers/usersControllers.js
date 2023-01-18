const db = require("../database/models")

module.exports = {
    register : (req,res)=>{
        res.render("register")
    },
    createNewUser: (req,res)=>{
        const user = JSON.parse(JSON.stringify(req.body))
        const userPhone =  Number(user.phone);
     db.Users.create({
            email: user.email,
            name: user.name,
            lastname : user.lastname,
            /*SE DEBERIA HASHEAR LA PASS*/
            password: user.password,
            country : user.country,
            state : user.state,
            city : user.city,
           phone: Number(req.body.phone),
           
        }).then((user) => {
            console.log("Todo hecho");
            res.redirect("/user/login")
        })
        
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