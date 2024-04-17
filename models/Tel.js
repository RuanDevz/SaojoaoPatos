

module.exports = (sequelize, DataTypes,) =>{
    const Tel = sequelize.define("Tel", {
        Telefone:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    return Tel
}