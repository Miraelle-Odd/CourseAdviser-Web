module.exports = (sequelize, DataTypes) => {
    const Bot_CourseSpecials = sequelize.define("Bot_CourseSpecials", {
        special_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        special_name: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        special_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        multiplier: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    });

    const list = [{
            special_name: "NORMAL",
            special_description: "Chương trình học bình thường mặc định khi học viên đăng kí khóa học. Một lớp bao gồm nhiều nhất 10 học viên và 1 giảng viên.\r\nKhóa gồm 96 buổi học trong 12 tháng và mỗi buổi học kéo dài 2 tiếng.\r\nCách tính trên áp dụng cho các khóa Luyện thi EILTS, TOEIC và Tiếng Anh giao tiếp.\r\nKhóa Tiếng Anh cho bé đều là chương trình học thường, nhưng thời lượng học đặc biệt khác với mô tả trên (thông tin chi tiết xem trên mô tả của khóa)",
            multiplier: 1
        },
        {
            special_name: "SPEEDY",
            special_description: "Lớp cấp tốc (hay speedy) là một chương trình học đặc biết của Trung tâm. 🧐🧐🧐 Theo như tên gọi của nó, các lớp học áp dụng chương trình này với mục đích đẩy nhanh tiến độ học nhằm giúp học viên có thể thông thạo tiếng Anh, thi và nhận các bằng liên quan trong thời gian ngắn nhất.\r\n🤤🤤 Tổng thời lượng học trong chương trình là 96 buổi trong 6 tháng (so với lớp thường 96 buổi trong 12 tháng). Mỗi buổi học sẽ kéo dài 4 tiếng (thay vì 2 tiếng trong lớp thường) 🤤🤤\r\n👨‍🎓 Chương trình cấp tốc áp dụng cho tất cả các lớp Luyện thi IELTS, TOEIC và Tiếng Anh giao tiếp với hệ số học phí là 1.5. Mọi học viên nếu có nhu cầu và điều kiện đều có thể lựa chọn tham gia.👩‍🎓",
            multiplier: 1.5
        },
        {
            special_name: "1 VS 1",
            special_description: "Lớp học một kèm một là một (hay 1 vs 1) chương trình học đặc biệt của Trung tâm. 🧐🧐🧐 Theo như tên gọi của nó, loại lớp học này chỉ bao gồm một học viên (là người đã đăng kí học) và một giáo viên do chính học viên chọn. Giao tiếp sẽ chỉ diễn ra giữa bản thân người học và giáo viên này, cũng như mọi sự quan tâm và thời gian của lớp sẽ đặc biệt chú trọng vào học viên nhằm nâng cao tiến độ học của họ.\r\n👨‍🎓 Chương trình một kèm một áp dụng cho tất cả các lớp Luyện thi IELTS, TOEIC và Tiếng Anh giao tiếp với hệ số học phí là 2. Mọi học viên nếu có nhu cầu và điều kiện đều có thể lựa chọn tham gia.👩‍🎓",
            multiplier: 2
        }
    ]

    list.forEach(element => {
        Bot_CourseSpecials.sync()
            .then(async function() {
                await Bot_CourseSpecials.findOrCreate({ where: element })
            })
    });

    return Bot_CourseSpecials;
}