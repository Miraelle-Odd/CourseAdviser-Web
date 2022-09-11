module.exports = (sequelize, DataTypes) => {
    const Requests = sequelize.define("Requests", {
        request_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: 'considering'
        }
    });
    const list = [
        {
            request_id: 1,
            content: 'coontent'
        },
        {
            request_id: 2,
            content: 'test test'
        },
        {
            request_id: 3,
            content: 'Lorem ispu'
        }
    ]
    list.forEach(element => {
        Requests.sync().then(async function () {
            await sequelize.query("INSERT IGNORE INTO `requests` (`request_id`, `content`) VALUES (:request_id, :content) ",
            {
                replacements: {
                    request_id: element.request_id,
                    content: element.content
                }
            })
        })
    });
    return Requests;
}