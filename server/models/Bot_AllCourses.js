module.exports = (sequelize, DataTypes) => {
    const Bot_Courses = sequelize.define("Bot_Courses", {
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        course_name: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        course_image: {
            type: DataTypes.CHAR(200),
            allowNull: false,
        },
        course_page: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        course_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        special_support: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        course_status: {
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: "disabled"
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    });

    return Bot_Courses;
}