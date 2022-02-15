module.exports = (sequelize, DataTypes) => {
    const Tests = sequelize.define("Tests", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Tests;
}