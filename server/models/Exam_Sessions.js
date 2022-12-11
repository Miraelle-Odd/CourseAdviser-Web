module.exports = (sequelize, DataTypes) => {
    const Exam_Sessions = sequelize.define("Exam_Sessions", {
        session_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        test_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Exam_AllTests',
                key: 'test_id'
            }
        },
        token: {
            type: DataTypes.CHAR(60),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        listening_correct: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        listening_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        reading_correct: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        reading_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        total_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        status: {
            type: DataTypes.STRING(4),
            allowNull: false,
            defaultValue: "new"
        }
    });

    Exam_Sessions.associate = (models) => {
        Exam_Sessions.belongsTo(models.Exam_AllTests, {
            foreignKey: 'test_id'
        });
        models.Exam_AllTests.hasOne(Exam_Sessions, { foreignKey: 'test_id' });
    };

    return Exam_Sessions;
}