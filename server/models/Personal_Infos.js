
const Accounts = require("../models/Accounts");
module.exports = (sequelize, DataTypes) => {

         const Personal_Infos = sequelize.define("Personal_infos", {
             account_id: {
                 type: DataTypes.INTEGER,
                 allowNull: false,
                 primaryKey: true,
                 autoIncrement: true,
             },
             name: {
                 type: DataTypes.STRING(20),
                 allowNull: false,
                 defaultValue: "Please Update"
             },
             birthday: {
                 type: DataTypes.DATE,
                 allowNull: false
             },
             location: {
                 type: DataTypes.STRING(20),
                 allowNull: false,
                 defaultValue: "N/A"
             },
             avatar: {
                 type: DataTypes.STRING,
                 allowNull: false,
                 defaultValue: "https:i.imgur.com/acvDZcg.png"
             }
         });
         const list = [
             {
                 name: "Cao Ngọc Anh",
                 birthday: '2001-03-08',
                 location: 'Kon Tum',
                 avatar: 'https:i.imgur.com/uKqhZDC.jpg'
             },
             {
                 name: "emptest1",
                 birthday: '2001-03-09',
                 location: 'Hồ Chí Minh',
                 avatar: 'https:i.imgur.com/acvDZcg.png'
             },
             {
                 name: "mantest1",
                 birthday: '2001-03-10',
                 location: 'Tokyo',
                 avatar: 'https:i.imgur.com/acvDZcg.png'
             },
             {
                 name: "emptest2",
                 birthday: '2001-03-11',
                 location: 'Shanghai',
                 avatar: 'https:i.imgur.com/acvDZcg.png'
             },
             {
                 name: "Cao Ngọc Anh",
                 birthday: '2001-03-08',
                 location: 'Kon Tum',
                 avatar: 'http:i.imgur.com/LSBzGPe.png'
             },
             {
                 name: "Ngọc Anh Cute",
                 birthday: '2001-03-03',
                 location: 'Kon Tum',
                 avatar: 'http:i.imgur.com/LFBkN8A.png'
             },
         ]
         list.forEach(element => {
             Personal_Infos.sync().then(async function () {
                 await Personal_Infos.findOrCreate({ where: element })
             })
         });
          
         Personal_Infos.associate = (models) =>{
            // associations can be defined here
            Personal_Infos.belongsTo(models.Accounts, {
              foreignKey: 'account_id'
            });
            models.Accounts.hasOne(Personal_Infos,{ foreignKey: 'account_id' });
          };
         return Personal_Infos;
     }