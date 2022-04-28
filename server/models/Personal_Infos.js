const Accounts = require("../models/Accounts");
module.exports = (sequelize, DataTypes) => {

    const Personal_Infos = sequelize.define("Personal_Infos", {
        personal_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: "Please Update"
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        location: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: "N/A"
        },
        phone: {
            type: DataTypes.STRING(12),
            allowNull: false,
            defaultValue: "N/A"
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https:i.imgur.com/acvDZcg.png"
        },
        account_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Accounts',
                key: 'account_id'
            }
        }
    });
    const list = [{
            name: "Cao Ngọc Anh",
            birthday: '2001-03-10 00:00:00',
            location: 'Kon Tum',
            phone: '0000000000',
            avatar: 'https://i.imgur.com/uKqhZDC.jpg',
            account_id: 1,
        },
        {
            name: "emptest1",
            birthday: '2001-03-10 00:00:00',
            location: 'Hồ Chí Minh',
            phone: '0000000000',
            avatar: 'https://i.imgur.com/acvDZcg.png',
            account_id: 2,
        },
        {
            name: "mantest1",
            birthday: '2001-03-10 00:00:00',
            location: 'Tokyo',
            phone: '0000000000',
            avatar: 'https://i.imgur.com/acvDZcg.png',
            account_id: 3,
        },
        {
            name: "emptest2",
            birthday: '2001-03-10 00:00:00',
            location: 'Shanghai',
            phone: '0000000000',
            avatar: 'https://i.imgur.com/acvDZcg.png',
            account_id: 4,
        },
        {
            name: "Cao Ngọc Anh",
            birthday: '2001-03-10 00:00:00',
            location: 'Kon Tum',
            phone: '0000000000',
            avatar: 'http://i.imgur.com/LSBzGPe.png',
            account_id: 5,
        },
        {
            name: "Ngọc Anh Cute",
            birthday: '2001-03-10 00:00:00',
            location: 'Kon Tum',
            phone: '0000000000',
            avatar: 'http://i.imgur.com/LFBkN8A.png',
            account_id: 6,
        },
    ]


    list.forEach(element => {
        Personal_Infos.sync().then(async function() {
            await Personal_Infos.findOrCreate({ where: element })
        })
    });

    Personal_Infos.associate = (models) => {
        Personal_Infos.belongsTo(models.Accounts, {
            foreignKey: 'account_id'
        });
        models.Accounts.hasOne(Personal_Infos, { foreignKey: 'account_id' });
    };
    return Personal_Infos;
}