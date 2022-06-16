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
    return Personal_Infos;
}