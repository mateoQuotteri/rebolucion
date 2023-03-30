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
        })
       
        const idModuleOfUnit = unit.id_modulo;

        const moduleOfUnit =  await db.Modules.findOne({
            where: { id: idModuleOfUnit },
        })
       if (unit) {
            res.render("unit/unitDetail", {
               unit , module: moduleOfUnit
            })
        } else {
            res.render("not-found")
        }
    },
    showUnitsToEdit :  (req,res)=>{
        db.Units.findAll().then((units) => {
            res.render("unit/showUnitsToEdit", { units })
        })
    },
    showEditUnit : async (req,res)=>{
        const unitToEditID = req.params.id



        const unitToEdit = await  db.Units.findOne({ where: { id: unitToEditID } })
        console.log(unitToEdit);
        if (unitToEdit) {
         res.render("unit/editUnit", {
            unit : unitToEdit
         })
     }
    
    },
    editUnit : async (req,res)=>{

   
        const unitToEditId = req.params.id
  
        
        db.Units.update(
            {
                ...req.body
                },
            {
                where: {id : unitToEditId },
            }
        ).then((unit) => {
            console.log("Done");
            res.redirect("/unit/showunitstoedit/")
        });
    
    
    },

}