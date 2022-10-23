module.exports = (sequelize, DataTypes) => {
    const Exam_Details = sequelize.define("Exam_Details", {
        item_id: {
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
        item_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        select_options: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        answer: {
            type: DataTypes.CHAR(1),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    });

    Exam_Details.associate = (models) => {
        Exam_Details.belongsTo(models.Exam_AllTests, {
            foreignKey: 'test_id'
        });
        models.Exam_AllTests.hasOne(Exam_Details, { foreignKey: 'test_id' });
    };
    const list = []
    list.forEach(element => {
        Exam_Details.sync().then(async function() {
            await Exam_Details.findOrCreate({ where: element })
        })
    });
    return Exam_Details;
}