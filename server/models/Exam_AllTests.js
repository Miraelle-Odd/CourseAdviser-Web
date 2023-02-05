module.exports = (sequelize, DataTypes) => {
    const Exam_AllTests = sequelize.define("Exam_AllTests", {
        test_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        test_type: {
            type: DataTypes.CHAR(10),
            allowNull: false,
        },
        test_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    const list = [
        {
            test_id: 1,
            test_type: "toeic",
            test_amount: 200
        },
        {
            test_id: 2,
            test_type: "toeic",
            test_amount: 200
        },
        {
            test_id: 3,
            test_type: "toeic",
            test_amount: 200
        }
    ]
    list.forEach(element => {
        Exam_AllTests.sync().then(async function() {
            await Exam_AllTests.findOrCreate({ where: element })
        })
    });
    return Exam_AllTests;
}