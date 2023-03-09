module.exports = {
    index : (req,res)=>{
        const thingsToLearn = ["Web3",
         "Blockchain", 
         "Contratos inteligentes", 
        "Finanzas Descentralizadas", "Bitcoin" 
        , "Ethereum"]
        res.render("home", { thingsToLearn})
    }
}