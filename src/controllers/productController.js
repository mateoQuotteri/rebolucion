const db = require("../database/models");


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
        const newProduct = req.body

        let imageFile = req.file
        console.log(imageFile);
        if (!imageFile) {
            return res.send("Seleccione un archivo en formato imagen")
        }
        
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

}