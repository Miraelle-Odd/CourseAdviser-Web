module.exports = (sequelize, DataTypes) => {
    const Bot_CourseLevels = sequelize.define("Bot_CourseLevels", {
        level_id: {
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
        level_name: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        level_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    });

    const list = [{
            level_name: "PRE",
            course_id: 1,
            level_description: "Khóa học IELTS PREPARE (hay PRE-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa PRE-IELTS là khóa cơ sở trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, tạo nền móng tiếng Anh cho những học viên mới bắt đầu làm quen với tiếng Anh, không có nền tảng ngôn ngữ hoặc có nhu cầu lấy lại gốc tiếng Anh. Chính vì thế mà cấp độ này không có yêu cầu đầu vào. Kiến thức nền tảng có được sau khóa học đủ để học viên tự tin tham gia thi lấy bằng IELTS trong thực tế."
        },
        {
            level_name: "INTER",
            course_id: 1,
            level_description: "Khóa học IELTS INTERMEDIATE (hay INTER-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa INTER-IELTS là khóa trung cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, mài dũa cho những học viên đã có nền tảng tiếng Anh nắm chắc kiến thức và nâng cao khả năng hiểu sâu. Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả IELTS của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng IELTS từ 7.0 trở lên trong thực tế."
        },
        {
            level_name: "ADV",
            course_id: 1,
            level_description: "Khóa học IELTS ADVANCED (hay ADV-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa ADV-IELTS là khóa cao cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích nâng cao khả năng thành thạo ngôn ngữ cho những học viên đã nắm chắc cách sử dụng tiếng Anh. Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả IELTS của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng IELTS từ 8.0 trở lên trong thực tế."
        },
        {
            level_name: "PRE",
            course_id: 2,
            level_description: "Khóa học TOEIC PREPARE (hay PRE-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa PRE-TOEIC là khóa cơ sở trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, tạo nền móng tiếng Anh cho những học viên mới bắt đầu làm quen với tiếng Anh, không có nền tảng ngôn ngữ hoặc có nhu cầu lấy lại gốc tiếng Anh. Chính vì thế mà cấp độ này không có yêu cầu đầu vào. Kiến thức nền tảng có được sau khóa học đủ để học viên tự tin tham gia thi lấy bằng TOEIC trong thực tế."
        },
        {
            level_name: "INTER",
            course_id: 2,
            level_description: "Khóa học TOEIC INTERMEDIATE (hay INTER-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa INTER-TOEIC là khóa trung cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, mài dũa cho những học viên đã có nền tảng tiếng Anh nắm chắc kiến thức và nâng cao khả năng hiểu sâu. Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả TOEIC của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng TOEIC từ XXX trở lên trong thực tế."
        },
        {
            level_name: "ADV",
            course_id: 2,
            level_description: "Khóa học TOEIC ADVANCED (hay ADV-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa ADV-TOEIC là khóa cao cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích nâng cao khả năng thành thạo ngôn ngữ cho những học viên đã nắm chắc cách sử dụng tiếng Anh. Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả TOEIC của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng TOEIC từ 8.0 trở lên trong thực tế."
        },
    ]



    list.forEach(element => {
        Bot_CourseLevels.sync()
            .then(async function() {
                await Bot_CourseLevels.findOrCreate({ where: element })
            })
    });

    Bot_CourseLevels.associate = (models) => {
        Bot_CourseLevels.belongsTo(models.Bot_Courses, {
            foreignKey: 'course_id'
        });
        models.Bot_Courses.hasOne(Bot_CourseLevels, { foreignKey: 'course_id' });
    };

    return Bot_CourseLevels;
}