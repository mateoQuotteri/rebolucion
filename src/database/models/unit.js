module.exports = (sequelize, dataTypes) => {
    let cols = {
        id: { autoIncrement: true, primaryKey: true, type: dataTypes.INTEGER },
        title: { type: dataTypes.STRING },
        description : { type: dataTypes.STRING },
        video : { type: dataTypes.STRING },
        idm: { type: dataTypes.INTEGER },

    }

    let config = { tableName: "units", timestamps: false }
    const Units = sequelize.define("Units", cols, config)

  /*  Users.associate = function (models) {
        Users.belongsToMany(models.Products, {
            as: "products",
            through: "users_products",
            foreignKey: "users_id",
            otherKey: "products_id",
            timestamps: false,
        })
    }*/
    return Units
}