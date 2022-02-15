module.exports = (sequelize, DataTypes) => {
    const Teachers = sequelize.define("Teachers", {
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        teacher_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teacher_gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teacher_img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teacher_achieve: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        in_charge_of: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teacher_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Teachers;
}