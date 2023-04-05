const { validationResult } = require("express-validator")

module.exports = {
    index : (req,res)=>{

        const thingsToLearn= [{
            name: "Web3",
            image: "web3Card.png",
            icon : "fa-sharp fa-solid fa-globe",
           },
           {
            name: "Blockchain",
            image: "blockchainCard.png",
            icon : "fa-solid fa-cubes",
           },
           {
            name: "Contratos inteligentes",
            image: "contratoCard.png",
            icon : "fa-solid fa-file-contract"
           },
           {
            name: "DeFi",
            image: "defiCard.png",
            icon : "fa-solid fa-chart-column",
           },
           {
            name: "Bitcoin",
            image: "bitcoinCard.png",
            icon : "fa-brands fa-bitcoin",
           },
           {
            name: "Ethereum",
            image: "ethereumCard.png",
            icon : "fa-brands fa-ethereum",
           },
        ]
        res.render("home", { thingsToLearn})
    },
    contact : (req,res)=>{
        res.render("contact")
},
aviso : (req,res)=>{
    res.render("aviso")
},
showAdminPanel : (req,res)=>{
    res.render("adminPanel")
},
}