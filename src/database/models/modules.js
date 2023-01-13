module.exports = (sequelize, dataTypes) => {
    let cols = {
        id: { autoIncrement: true, primaryKey: true, type: dataTypes.INTEGER },
        title: { type: dataTypes.STRING },
        units : { type: dataTypes.INTEGER },
        shortDescription : { type: dataTypes.STRING },
        difficulty : { type: dataTypes.STRING },
        
     

    }

    let config = { tableName: "modules", timestamps: false }
    const Users = sequelize.define("Modules", cols, config)

  /*  Users.associate = function (models) {
        Users.belongsToMany(models.Products, {
            as: "products",
            through: "users_products",
            foreignKey: "users_id",
            otherKey: "products_id",
            timestamps: false,
        })
    }*/
    return Users
}