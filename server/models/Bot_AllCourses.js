module.exports = (sequelize, DataTypes) => {
    const Bot_Courses = sequelize.define("Bot_Courses", {
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        course_name: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        course_image: {
            type: DataTypes.CHAR(200),
            allowNull: false,
        },
        course_page: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        course_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        course_status: {
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: "disabled"
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    });

    const list = [{
            course_name: "Luyện thi IELTS",
            course_image: "https:\/\/i.imgur.com\/OdyWl5z.png",
            course_page: "http:\/\/localhost:3000\/courses\/IELTS",
            course_description: "Nội dung chính của các bài học xoay quanh các chiến thuật và kỹ năng làm bài để giúp người học tiếp cận một cách hiệu quả nhất các dạng câu hỏi của IELTS. 🧠 Xây dựng kiến thức ngôn ngữ học thuật nền tảng, từ vựng và ngữ pháp. Luyện đề từ cơ bản đến chuyên sâu với kho bài tập đa dạng và phong phú. 🥳🥳🥳\r\nKhóa học này có 3 cấp độ là PRE, INTER, ADV tương ứng với mức độ nhập môn, trung bình và nâng cao.🤓\r\nĐể đăng ký các Khóa học này, học viên sẽ phải trải qua một bài kiểm tra đầu vào để xác định trình độ.😤 Trung tâm sẽ phân bố xếp lớp dựa vào kết quả bài kiểm tra đầu vào của học viên\r\n😘 Nếu học viên vẫn chưa có kiến thức về tiếng Anh, hoặc không tham gia kiểm tra đầu vào, sẽ được mặc định xếp vào cấp nhập môn, PRE, của mỗi khóa học đăng ký.\r\n🤯 Nếu muốn học cao hơn, học viên bắt buộc phải đạt chỉ tiêu của các lớp học trước đó, thông qua các bài kiểm tra thử của trung tâm.",
            course_status: "enabled"
        },
        {
            course_name: "Luyện thi TOEIC",
            course_image: "https:\/\/i.imgur.com\/cESQphA.png",
            course_page: "http:\/\/localhost:3000\/courses\/TOEIC",
            course_description: "TOEIC Loram Syum dhuahduwi báduhw\r\nđáiidca adasd",
            course_status: "enabled"
        },
        {
            course_name: "Tiếng Anh cho bé",
            course_image: "https:\/\/i.imgur.com\/XafN1Ry.png",
            course_page: "http:\/\/localhost:3000\/courses\/english-for-kid",
            course_description: "Đây là khóa học giúp nâng cao trình độ cho các em nhỏ từ 3-11 tuổi với cách học thú vị, kết hợp với sự nhiệt tình và kinh nghiệm của giáo viên sẽ giúp các em nhỏ có được niềm vui và đam mê khi học tiếng Anh. 🤠🤠\r\nKhóa học cung cấp cho các bé đủ vốn từ vựng cơ bản để trò chuyện về các chủ đề thông dụng như gia đình,bạn bè,động thực vật…, 🦉🐧giúp các bé giao tiếp bằng tiếng Anh với người nước ngoài chủ động và tự tin hơn và nâng cao khả năng nghe hiểu tiếng anh của các bé.🐺🙉\r\nKhóa học được phân ra 2 lớp KINDERGARTEN và PRIMARY ứng với các bé trước tiểu học (từ 3 đến 5 tuổi) và tiểu học (6 đến 11 tuổi), không yêu cầu thi đầu vào.🦕🦕",
            course_status: "enabled"
        },
        {
            course_name: "Tiếng Anh giao tiếp",
            course_image: "https:\/\/i.imgur.com\/cavKAeb.png",
            course_page: "http:\/\/localhost:3000\/courses\/english-for-speaking",
            course_description: "Khóa học tiếng Anh giao tiếp cho người đi làm được thiết kế nhằm giúp học viên nâng cao, rèn luyện khả năng giao tiếp tiếng Anh trong môi trường làm việc.🤗 Từ đó mở rộng thêm cơ hội việc làm và thăng tiến trong sự nghiệp. Khóa học đặc biệt này sẽ giúp các bạn tăng sự tự tin khi sử dụng tiếng Anh trong các tình huống giao tiếp tại công sở. 😎 Phù hợp với các bạn còn e ngại giao tiếp, khả năng giao tiếp còn hạn chế.\r\n🤩Khóa học này có 3 cấp độ là PRE, INTER, ADV tương ứng với mức độ nhập môn (trình độ A1, A2), trung bình (trình độ B1, B2) và nâng cao (trình độ C1).🤩\r\n🤪🤪Xếp cấp lớp dựa vào đầu ra mong muốn của người học. Khóa học không yêu cầu thi đầu vào.",
            course_status: "enabled"
        }
    ]

    list.forEach(element => {
        Bot_Courses.sync().then(async function() {
            await Bot_Courses.findOrCreate({ where: element })
        })
    });

    return Bot_Courses;
}