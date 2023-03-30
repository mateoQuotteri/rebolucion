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
            video : newProduct.video
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
        const unitsOfModule = await db.Units.findAll({
            where: {id_modulo: idSearched}
            })

        if (module) {
            res.render("modules/moduleDetail", {
               module , unitsOfModule
            })
        } else {
            res.render("not-found")
        }
    },

    showModulesToEdit :  (req,res)=>{
        db.Modules.findAll().then((modules) => {
            res.render("modules/showModulesToEdit", { modules })
        })
    },

    showEditModule : async (req,res)=>{
        const moduleToEditId = req.params.id



        const moduleToEdit = await  db.Modules.findOne({ where: { id: moduleToEditId } })
        console.log(moduleToEdit);
        if (moduleToEdit) {
         res.render("modules/editModule", {
            module : moduleToEdit
         })
     }
    
    },

    editModule : async (req,res)=>{

   
        const moduleToEditId = req.params.id
        
        db.Modules.update(
            {
               
                title: req.body.title,
                units : req.body.units,
                shortDescription : req.body.shortDescription,
                difficulty : req.body.difficulty,
                video : req.body.video,
                image :req.body.newImage,


            },
            {
                where: {id : moduleToEditId },
            }
        ).then((module) => {
            console.log("Done");
            res.redirect("/module/showmodulestoedit/")
        });
    
    
    },

    showModulesTodelete :  (req,res)=>{
        db.Modules.findAll().then((modules) => {
            res.render("modules/showModulesToDelete", { modules })
        })
    },

    showDeleteModule : async (req,res)=>{
        const moduleToEditId = req.params.id



        const moduleToEdit = await  db.Modules.findOne({ where: { id: moduleToEditId } })
        console.log(moduleToEdit);
        if (moduleToEdit) {
         res.render("modules/deleteModule", {
            module : moduleToEdit
         })
     }
     
    
    },
    deleteModule : async (req,res)=>{

   
        const moduleToDeleteId = req.params.id


        db.Modules.destroy(
            {
                where: {id : moduleToDeleteId },
            }
        ).then((module) => {
            console.log("Done");
            res.redirect("/module/showmodulestodelete/")
        });
    
    
    },

}