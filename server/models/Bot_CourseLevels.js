module.exports = (sequelize, DataTypes) => {
    const Bot_CourseLevels = sequelize.define("Bot_CourseLevels", {
        level_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Bot_Courses',
                key: 'course_id'
            }
        },
        level_name: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        level_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        requirement: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        guarantee: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        min_age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        max_age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        basic_fee: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fee_unit: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        level_status: {
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: "disabled"
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    });

    Bot_CourseLevels.associate = (models) => {
        Bot_CourseLevels.belongsTo(models.Bot_Courses, {
            foreignKey: 'course_id'
        });
        models.Bot_Courses.hasOne(Bot_CourseLevels, { foreignKey: 'course_id' });
    };

    return Bot_CourseLevels;
}