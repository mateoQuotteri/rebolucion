module.exports = (sequelize, dataTypes) => {
    let cols = {
        id: { autoIncrement: true, primaryKey: true, type: dataTypes.INTEGER },
        title: { type: dataTypes.STRING },
        units : { type: dataTypes.INTEGER },
        shortDescription : { type: dataTypes.STRING },
        difficulty : { type: dataTypes.INTEGER },
        image : { type: dataTypes.TEXT },

    }

    let config = { tableName: "modules", timestamps: false }
    const Modules = sequelize.define("Modules", cols, config)

   Modules.associate = function (models) {
        Modules.hasMany(models.Units, {
            as: "unitss",
            foreignKey: "id_modulo",
            timestamps: false,
        })
    }
    return Modules
}