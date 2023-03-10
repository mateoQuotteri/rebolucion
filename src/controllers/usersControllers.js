const db = require("../database/models")
const bcrypt = require("bcryptjs")

const { validationResult } = require("express-validator")


module.exports = {
    register : (req,res)=>{
        res.render("register")
    },
    createNewUser: (req,res)=>{

    const errors = validationResult(req)
    console.log(errors)
        if (!errors.isEmpty()) {
            res.render("register", {
                errors: errors.mapped(),
                old: req.body,
            })
            return
        }
        const user = JSON.parse(JSON.stringify(req.body))
        /*INSERTO USUARIO CON SUS CARACTERISTICAS EN DB*/
     db.Users.create({
            email: user.email,
            name: user.name,
            lastname : user.lastname,
            password: bcrypt.hashSync(req.body.password, 10),
            country : user.country,
            state : user.state,
            city : user.city,
           phone: Number(req.body.phone),
           
        }).then((user) => {
            delete user.rePassword
            res.redirect("/user/login")
        }).catch((error) => res.send(error))
        
    },
    showLogin : (req,res)=>{
        res.render("login")
    },
    login: async (req,res)=>{


        /*VERIFICO QUE A LA HORA DE ENVIAR EL FORMULARIO DEL LOGIN NO HAYA ERRORES */
        const errors = validationResult(req)
         console.log(errors)
        if (!errors.isEmpty()) {
            res.render("login", {
                errors: errors.mapped(),
                old: req.body,
            })
            return
        }
        const emailLogin = req.body.email
        const password = req.body.password
        /*BUSCO AL USUARIO EN LA DB */
        const user = await db.Users.findOne({ where: { email: emailLogin } })
        /*COMPARO SI EL USER QUE SE ESTA QUERIENDO REGISTRAR COINCIDE 
        CON EL EMAIL Y CONTRASEÑA QUE TENGO YO */
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.loggedUser = user;
            res.redirect("/")
            return
        }
        res.render("login", {
            error: true,
        })
    },
    showMyProfile: (req, res) => { 
       const user =req.session.loggedUser;

       console.log(user);
       if (user) {
        res.render("user/userProfile", {
           user
        })
    } else {
        res.render("not-found")
    }
    },
    logout: (req, res) => { 
      req.session./*loggedUser.*/destroy((error)=>{
        if (error) {
            console.log(error);
            res.send("Nothing had happened") 
      }else{
        res.redirect("/")
      }
   })

    },
    showEditMyProfile: async(req, res) => {
        const userId = req.session.loggedUser.id



        const userLogged = await  db.Users.findOne({ where: { id: userId } })
       
        if (userLogged) {
         res.render("user/editUserProfile", {
            user : userLogged
         })
     }
    },
    editMyProfile: (req, res) => {
       


    db.Users.update(
        {
           
            name: req.body.name,
            lastname : req.body.lastname,
            email: req.body.email,
            celular: req.body.phone,
            password: bcrypt.hashSync(req.body.password, 10),
            city : req.body.city,
            state : req.body.state,
            country : req.body.country
        },
        {
            where: { id: req.session.loggedUser.id },
        }
    ).then((u) => {
        req.session.loggedUser.name = req.body.name;
        req.session.loggedUser.email = req.body.email;
        req.session.loggedUser.lastname = req.body.lastname;
        req.session.loggedUser.phone = req.body.phone;
        req.session.loggedUser.country = req.body.country;
        req.session.loggedUser.state = req.body.state;
        req.session.loggedUser.city = req.body.city;


        res.redirect("/user/my-profile")
    });

        
    
    },

    showEditPassword : async (req, res) => {
        const userId = req.session.loggedUser.id



        const userLogged = await  db.Users.findOne({ where: { id: userId } })
       
        if (userLogged) {
         res.render("user/editUserPassword", {
            user : userLogged
         })
     } },

     editPassword :async (req,res)=>{

        const errors = validationResult(req)
        console.log(errors)
            if (!errors.isEmpty()) {
                res.render("user/editUserPassword", {
                    errors: errors.mapped(),
                    old: req.body,
                })
                return
            }

            const oldPass = req.body.password;
            const newPass = req.body.newPassword;
            const userId = req.session.loggedUser.id;
            const userLogged = await  db.Users.findOne({ where: { id: userId } });

            if(bcrypt.compareSync(oldPass, userLogged.password)){
                db.Users.update(
                    {
                        password : bcrypt.hashSync(newPass, 10),
                    },
                    {
                        where: { id: req.session.loggedUser.id },
                    }
                ).then((u) => {
                    req.session.loggedUser.password = bcrypt.hashSync(newPass, 10),
            
            
                    res.redirect("/user/my-profile")
                });
            }
        
        },

}

