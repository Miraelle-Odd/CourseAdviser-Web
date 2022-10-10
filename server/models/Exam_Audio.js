module.exports = (sequelize, DataTypes) => {
    const Exam_Audios = sequelize.define("Exam_Audios", {
        audio_id: {
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
        audio_url: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });

    Exam_Audios.associate = (models) => {
        Exam_Audios.belongsTo(models.Exam_AllTests, {
            foreignKey: 'test_id'
        });
        models.Exam_AllTests.hasOne(Exam_Audios, { foreignKey: 'test_id' });
    };
    const list = [
        {
            test_id: 1,
            audio_url: "https://docs.google.com/uc?export=download&id=11D05GX-adYLD5pISJOavZHIxveapvwci"
        },
        {
            test_id: 2,
            audio_url: "https://docs.google.com/uc?export=download&id=1y3dsONkgFzYzaKkzvvJreDFfd_GooN66"
        },
        {
            test_id: 3,
            audio_url: "https://docs.google.com/uc?export=download&id=1fDIM3OVmtFvx8veW2vEbvWjDsrtxwIdr"
        },
    ]
    list.forEach(element => {
        Exam_Audios.sync().then(async function() {
            await Exam_Audios.findOrCreate({ where: element })
        })
    });
    return Exam_Audios;
}