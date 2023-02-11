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
    logout: (req, res) => {
        req.session.destroy()
        return res.redirect("/")
    },
}