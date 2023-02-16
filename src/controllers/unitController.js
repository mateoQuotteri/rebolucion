const db = require("../database/models");
const { validationResult } = require("express-validator")


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
        
        const errors = validationResult(req)
        console.log(errors)
            if (!errors.isEmpty()) {
                res.render("unit/createUnit", {
                    errors: errors.mapped(),
                    old: req.body,
                })
                return
            }

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
    showUnitDetail: async (req,res)=>{ 

        const idSearched = req.params.id
        const unit = await db.Units.findOne({
            where: { id: idSearched },
            include : [ "modules"],
            raw : true,
            nest : true
        })
       

        if (unit) {
            res.render("unit/unitDetail", {
               unit 
            })
        } else {
            res.render("not-found")
        }
    },

}