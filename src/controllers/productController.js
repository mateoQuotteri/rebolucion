const db = require("../database/models");
const { validationResult } = require("express-validator")


module.exports = {
    index : (req,res)=>{
        db.Modules.findAll().then((modules) => {
            res.render("modules/modules", { modules })
        })
    },
    showCreateModule : (req,res)=>{
        res.render("modules/createModule")
    },
    createModule: (req,res)=>{

        const errors = validationResult(req)
        console.log(errors)
            if (!errors.isEmpty()) {
                res.render("modules/createModule", {
                    errors: errors.mapped(),
                    old: req.body,
                })
                return
            }

        let imageFile = req.file
        console.log(imageFile);
        if (!imageFile) {
            return res.send("Seleccione un archivo en formato imagen")
        }
        
        const newProduct = req.body
        db.Modules.create({
            title : newProduct.title,
            shortDescription : newProduct.shortDescription,
            image : imageFile.filename,
            difficulty : newProduct.difficulty,
            units : newProduct.units,
        })
            .then((p) => {
                return res.redirect("/module")
            })
            .catch((error) => res.send(error))
    },
    showModuleDetail : async (req,res)=>{
        const idSearched = req.params.id
        const module = await db.Modules.findOne({
            where: { id: idSearched },
            include : [ "unitss"],
            raw : true,
            nest : true
        })
       

        if (module) {
            res.render("modules/moduleDetail", {
               module 
            })
        } else {
            res.render("not-found")
        }
    },

}