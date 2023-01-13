module.exports = (sequelize, dataTypes) => {
    let cols = {
        id: { autoIncrement: true, primaryKey: true, type: dataTypes.INTEGER },
        name: { type: dataTypes.STRING },
        email : { type: dataTypes.STRING },

    }

    let config = { tableName: "modules", timestamps: false }
    const Modules = sequelize.define("Modules", cols, config)

  /*  Users.associate = function (models) {
        Users.belongsToMany(models.Products, {
            as: "products",
            through: "users_products",
            foreignKey: "users_id",
            otherKey: "products_id",
            timestamps: false,
        })
    }*/
    return Modules
}