module.exports = {
    register : (req,res)=>{
        res.render("register")
    },
    createNewUser: (req,res)=>{
        const newUser = req.body;
        console.log(newUser);
        res.render("login")
    },
    showLogin : (req,res)=>{
        res.render("login")
    },
    login: (req,res)=>{
        /*CODIGO DEL LOGIN*/ 
    },

}