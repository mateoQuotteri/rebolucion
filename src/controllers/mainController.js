module.exports = {
    index : (req,res)=>{

        const thingsToLearn= [{
            name: "Web3",
            image: "web3Card.png"
           },
           {
            name: "Blockchain",
            image: "blockchainCard.png"
           },
           {
            name: "Contartos inteligentes",
            image: "contratoCard.png"
           },
           {
            name: "Finanzas Descentralizadas",
            image: "defiCard.png"
           },
           {
            name: "Bitcoin",
            image: "bitcoinCard.png"
           },
           {
            name: "Ethereum",
            image: "ethereumCard.png"
           },
        ]
        res.render("home", { thingsToLearn})
    }
}