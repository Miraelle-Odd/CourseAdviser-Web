module.exports = (sequelize, DataTypes) => {
    const Bot_Recommender = sequelize.define("Bot_Recommenders", {
        combi_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Bot_Courses',
                key: 'course_id'
            }
        },
        level_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        special_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });
    const list = [{
            combi_id: 1,
            course_id: 1,
            level_id: 1,
            special_id: 1,
            image: 'https://i.imgur.com/OzD3h8q.webp'
        },
        {
            combi_id: 2,
            course_id: 1,
            level_id: 1,
            special_id: 2,
            image: 'https://i.imgur.com/oSxRSDE.webp'
        },
        {
            combi_id: 3,
            course_id: 1,
            level_id: 1,
            special_id: 3,
            image: 'https://i.imgur.com/GaoMbmQ.webp'
        },
        {
            combi_id: 4,
            course_id: 1,
            level_id: 2,
            special_id: 1,
            image: 'https://i.imgur.com/pHAxAtj.webp'
        },
        {
            combi_id: 5,
            course_id: 1,
            level_id: 2,
            special_id: 2,
            image: 'https://i.imgur.com/E4Tl7rL.webp'
        },
        {
            combi_id: 6,
            course_id: 1,
            level_id: 2,
            special_id: 3,
            image: 'https://i.imgur.com/4RYy9Nb.webp'
        },
        {
            combi_id: 7,
            course_id: 1,
            level_id: 3,
            special_id: 1,
            image: 'https://i.imgur.com/qrcHqRK.webp'
        },
        {
            combi_id: 8,
            course_id: 1,
            level_id: 3,
            special_id: 2,
            image: 'https://i.imgur.com/5vS67rf.webp'
        },
        {
            combi_id: 9,
            course_id: 2,
            level_id: 3,
            special_id: 3,
            image: 'https://i.imgur.com/zMqnyRu.webp'
        },
        {
            combi_id: 10,
            course_id: 2,
            level_id: 4,
            special_id: 1,
            image: 'https://i.imgur.com/nuxAPmT.webp'
        },
        {
            combi_id: 11,
            course_id: 2,
            level_id: 4,
            special_id: 2,
            image: 'https://i.imgur.com/OIcnrG6.webp'
        },
        {
            combi_id: 12,
            course_id: 2,
            level_id: 4,
            special_id: 3,
            image: 'https://i.imgur.com/iE8V9xF.webp'
        },
        {
            combi_id: 13,
            course_id: 2,
            level_id: 5,
            special_id: 1,
            image: 'https://i.imgur.com/YL9WuhE.webp'
        },
        {
            combi_id: 14,
            course_id: 2,
            level_id: 5,
            special_id: 2,
            image: 'https://i.imgur.com/b6sHK1Q.webp'
        },
        {
            combi_id: 15,
            course_id: 2,
            level_id: 5,
            special_id: 3,
            image: 'https://i.imgur.com/Lgk5NLz.webp'
        },
        {
            combi_id: 16,
            course_id: 2,
            level_id: 6,
            special_id: 1,
            image: 'https://i.imgur.com/9O7x0i2.webp'
        },
        {
            combi_id: 17,
            course_id: 2,
            level_id: 6,
            special_id: 2,
            image: 'https://i.imgur.com/dcGqvQE.webp'
        },
        {
            combi_id: 18,
            course_id: 2,
            level_id: 6,
            special_id: 3,
            image: 'https://i.imgur.com/9Bx2TFF.webp'
        },
        {
            combi_id: 19,
            course_id: 3,
            level_id: 7,
            special_id: 1,
            image: 'https://i.imgur.com/l7s2AE1.webp'
        },
        {
            combi_id: 20,
            course_id: 3,
            level_id: 7,
            special_id: 2,
            image: 'https://i.imgur.com/F9PvToq.webp'
        },
        {
            combi_id: 21,
            course_id: 3,
            level_id: 7,
            special_id: 3,
            image: 'https://i.imgur.com/WBWaWVT.webp'
        },
        {
            combi_id: 22,
            course_id: 3,
            level_id: 8,
            special_id: 1,
            image: 'https://i.imgur.com/lWJlPy9.webp'
        },
        {
            combi_id: 23,
            course_id: 3,
            level_id: 8,
            special_id: 2,
            image: 'https://i.imgur.com/WgGydU1.webp'
        },
        {
            combi_id: 24,
            course_id: 3,
            level_id: 8,
            special_id: 3,
            image: 'https://i.imgur.com/QGEE609.webp'
        },
    ]
    list.forEach(element => {
        Bot_Recommender.sync().then(async function() {
            await Bot_Recommender.findOrCreate({ where: element })
        })
    });
    return Bot_Recommender;
}