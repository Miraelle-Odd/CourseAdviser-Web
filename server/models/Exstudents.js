module.exports = (sequelize, DataTypes) => {
    const Exstudents = sequelize.define("Exstudents", {
        exst_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        exst_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        exst_img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        exst_achieve: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        exst_quote: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    });
    const list = [{
            exst_name: 'Hồ Quang Trí',
            exst_img: 'https://i.imgur.com/6oVgYrP.jpg',
            exst_achieve: 'IELTS 5.0 to 7.5',
            exst_quote: 'Cám ơn cô B đã luôn tạo động lực và khích lệ em ở những khoảnh khắc em dường như đã  bỏ cuộc'
        },
        {
            exst_name: 'Lương Văn Thiện',
            exst_img: 'https://i.imgur.com/926qgu4.jpg',
            exst_achieve: 'IELTS 6.5 to 8.0',
            exst_quote: 'Người thành công có lối đi riêng. Trung tâm là một điểm mốc trên lối đi đó của em.\r\n'
        },
        {
            exst_name: 'Phan Tiểu Linh',
            exst_img: 'https://i.imgur.com/y7NhfrY.jpg',
            exst_achieve: 'IELTS 6.0 to 8.0',
            exst_quote: 'Em cám ơn trung tâm và thầy A đã luôn kiên nhẫn khai phá năng lực của em'
        },
        {
            exst_name: 'Lê Minh Thông',
            exst_img: 'https://i.imgur.com/VqCzq45.jpg',
            exst_achieve: 'IELTS scratch to 8.0',
            exst_quote: 'Trung tâm đã hỗ trợ cho em từ ngày đầu em đi học không biết gì. Em chân thành cảm ơn.'
        }
    ]
    list.forEach(element => {
        Exstudents.sync().then(async function() {
            await Exstudents.findOrCreate({ where: element })
        })
    });
    return Exstudents;
}