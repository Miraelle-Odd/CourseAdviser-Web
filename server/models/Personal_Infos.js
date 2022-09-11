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
        gender: {
            type: DataTypes.STRING(10),
            allowNull: false,
            defaultValue: "N/A"
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

    Personal_Infos.associate = (models) => {
        Personal_Infos.belongsTo(models.Accounts, {
            foreignKey: 'account_id'
        });
        models.Accounts.hasOne(Personal_Infos, { foreignKey: 'account_id' });
    };
    const list = [{
        personal_id: 1,
        name: 'Cao Ngọc Em',
        birthday: '1980-09-11 00:00:00',
        gender: 'female',
        location: 'Kon Tum bbbhabab',
        phone: '093582223988',
        avatar: 'http://i.imgur.com/QapYgPz.png',
        account_id: 1,
    },
    {
        personal_id: 2,
        name:  'Nguyễn Hồ Quỳnh Thư',
        birthday: '2001-03-10 07:00:00',
        gender: 'female',
        location: 'Hồ Chí Minh',
        phone: '0879999888',
        avatar: 'https://i.imgur.com/RfCUJ9M.jpg',
        account_id: 2,
    },
    {
        personal_id: 3,
        name: 'Hồ Dũng',
        birthday: '2001-03-10 07:00:00',
        gender: 'male',
        location: 'Đà Nẵng',
        phone:'0123456789',
        avatar: 'https://i.imgur.com/K7RskP9.jpg',
        account_id: 3,
    },
    {
        personal_id: 4,
        name: 'Nguyễn Hồ Gia Trung',
        birthday: '2001-03-10 07:00:00',
        gender: 'male',
        location: 'Đà Nẵng',
        phone: '0123456789',
        avatar: 'https://i.imgur.com/0fedxjD.png',
        account_id: 4,
    },
    {
        personal_id: 5,
        name: 'Trần Ngọc Mĩ',
        birthday: '2001-03-10 07:00:00',
        gender: 'female',
        location: 'Đà Nẵng',
        phone:'0123456789',
        avatar: 'http://i.imgur.com/LFBkN8A.png',
        account_id: 5,
    },
    {
        personal_id: 6,
        name: 'Cao Thị Huyền Vũ',
        birthday: '2001-03-10 07:00:00',
        gender: 'female',
        location: 'Đà Nẵng',
        phone: '0123456789',
        avatar: 'http://i.imgur.com/LSBzGPe.png',
        account_id: 6,
    }
    ]
    list.forEach(element => {
        Personal_Infos.sync().then(async function () {
            await sequelize.query("INSERT IGNORE INTO `personal_infos` (`personal_id`, `name`, `birthday`, `gender`, `location`, `phone`, `avatar`, `account_id`) VALUES (:personal_id, :name, :birthday, :gender, :location, :phone, :avatar, :account_id)",
            {
                replacements: {
                    personal_id: element.personal_id,
                    name: element.name,
                    birthday: element.birthday,
                    gender: element.gender,
                    location: element.location,
                    phone: element.phone,
                    avatar: element.avatar,
                    account_id: element.account_id,
                }
            })
        })
    });
    return Personal_Infos;
}