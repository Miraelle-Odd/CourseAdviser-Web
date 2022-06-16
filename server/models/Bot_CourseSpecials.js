module.exports = (sequelize, DataTypes) => {
    const Bot_CourseSpecials = sequelize.define("Bot_CourseSpecials", {
        special_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        special_name: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        special_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        multiplier: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    });

    return Bot_CourseSpecials;
}