module.exports = {
    register : (req,res)=>{
        res.render("register")
    },
    createNewUser: (req,res)=>{
        console.log("ESTOY AQUI")
        console.log(req.body)
        res.redirect("/user/login")
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