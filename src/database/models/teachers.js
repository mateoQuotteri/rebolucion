module.exports = (sequelize, dataTypes) => {
    let cols = {
        id: { autoIncrement: true, primaryKey: true, type: dataTypes.INTEGER },
        email: { type: dataTypes.STRING },
        name: { type: dataTypes.STRING },
        lastname :  { type: dataTypes.STRING },
        celular: { type: dataTypes.INTEGER },
        password: { type: dataTypes.STRING },
        city : { type: dataTypes.STRING },
        state : { type: dataTypes.STRING },
        country : { type: dataTypes.STRING },

    }

    let config = { tableName: "teachers", timestamps: false }
    const Teachers = sequelize.define("Teachers", cols, config)

  /*  Users.associate = function (models) {
        Users.belongsToMany(models.Products, {
            as: "products",
            through: "users_products",
            foreignKey: "users_id",
            otherKey: "products_id",
            timestamps: false,
        })
    }*/
    return Teachers
}