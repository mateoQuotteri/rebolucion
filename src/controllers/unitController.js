const db = require("../database/models")

module.exports = {

    showAllUnit : (req,res)=>{
        db.Units.findAll().then((units) => {
            res.render("unit/units", { units })
        })
    },
    showCreateUnit : (req,res)=>{
       /*TRAIGO LOS MODULOS PARA MOSTARRLOS A LA HORA DE CREAER NUEVAS UNIDADES */
       
        db.Modules.findAll().then((modules) => {
            res.render("unit/createUnit",  { modules })
        })
    },
    createUnit: (req,res)=>{
        const newUnit = req.body
        console.log(newUnit);
      db.Units.create({
            title : newUnit.title,
            description : newUnit.description,
            video : newUnit.video,
            id_modulo : newUnit.id_modulo
        })
            .then((p) => {
                return res.redirect("/unit")
            })
            .catch((error) => res.send(error))
    },

}