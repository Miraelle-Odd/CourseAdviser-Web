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
        requirement: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        guarantee: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        min_age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        max_age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        basic_fee: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fee_unit: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        level_status: {
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: "disabled"
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    });

    Bot_CourseLevels.associate = (models) => {
        Bot_CourseLevels.belongsTo(models.Bot_Courses, {
            foreignKey: 'course_id'
        });
        models.Bot_Courses.hasOne(Bot_CourseLevels, { foreignKey: 'course_id' });
    };
    const list = [{
        level_id: 1,
        course_id: 1,
        level_name: 'PRE',
        level_description: 'Khóa học IELTS PREPARE (hay PRE-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa.🤩🤩\r\n🤔 Theo đó, khóa PRE-IELTS là khóa cơ sở trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, tạo nền móng tiếng Anh cho những học viên mới bắt đầu làm quen với tiếng Anh, không có nền tảng ngôn ngữ hoặc có nhu cầu lấy lại gốc tiếng Anh. 🤔\r\n😖😖 Chính vì thế mà cấp độ này không có yêu cầu đầu vào. Kiến thức nền tảng có được sau khóa học đủ để học viên tự tin tham gia thi lấy bằng IELTS trong thực tế.',
        requirement: 0,
        guarantee:5,
        min_age: 0,
        max_age: 0,
        basic_fee: 150000,
        fee_unit: 'buổi',
        level_status: 'enabled',
    },
    {
        level_id: 2,
        course_id: 1,
        level_name: 'INTER',
        level_description: 'Khóa học IELTS INTERMEDIATE (hay INTER-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa😗 \r\n👉👉Theo đó, khóa INTER-IELTS là khóa trung cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, mài dũa cho những học viên đã có nền tảng tiếng Anh nắm chắc kiến thức và nâng cao khả năng hiểu sâu. \r\n🧐🧐 Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả IELTS của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. \r\n🥳🥳Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng IELTS từ 7.0 trở lên trong thực tế🥳🥳 ',
        requirement: 5, 
        guarantee:7, 
        min_age: 0, 
        max_age: 0,
        basic_fee: 160000,
        fee_unit: 'buổi',
        level_status: 'enabled',
    },
    {
        level_id: 3,
        course_id: 1,
        level_name: 'ADV',
        level_description:'Khóa học IELTS ADVANCED (hay ADV-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa😤\r\n👉👉Theo đó, khóa ADV-IELTS là khóa cao cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích nâng cao khả năng thành thạo ngôn ngữ cho những học viên đã nắm chắc cách sử dụng tiếng Anh. \r\n🤧🤧Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả IELTS của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không.\r\n🤑🤑Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng IELTS từ 8.0 trở lên trong thực tế🤑🤑',
        requirement:  7,
        guarantee: 8.5,
        min_age: 0, 
        max_age: 0,
        basic_fee: 170000, 
        fee_unit: 'buổi',
        level_status: 'enabled'
    },
    {
        level_id: 4,
        course_id: 2,
        level_name: 'PRE',
        level_description: 'Khóa học TOEIC PREPARE (hay PRE-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa😸😸\r\n👉👉Theo đó, khóa PRE-TOEIC là khóa cơ sở trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, tạo nền móng tiếng Anh cho những học viên mới bắt đầu làm quen với tiếng Anh, không có nền tảng ngôn ngữ hoặc có nhu cầu lấy lại gốc tiếng Anh. \r\n😲Chính vì thế mà cấp độ này không có yêu cầu đầu vào😲 \r\n🥳🥳Kiến thức nền tảng có được sau khóa học đủ để học viên tự tin tham gia thi lấy bằng TOEIC trong thực tế🥳🥳',
        requirement: 0, 
        guarantee:300, 
        min_age: 0, 
        max_age: 0,
        basic_fee: 150000, 
        fee_unit: 'buổi',
        level_status: 'enabled',
    },
    {
        level_id: 5,
        course_id: 2,
        level_name: 'INTER',
        level_description:'Khóa học TOEIC INTERMEDIATE (hay INTER-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa🤭🤭\r\n👉👉Theo đó, khóa INTER-TOEIC là khóa trung cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, mài dũa cho những học viên đã có nền tảng tiếng Anh nắm chắc kiến thức và nâng cao khả năng hiểu sâu. \r\n😕😕Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả TOEIC của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. \r\n😎Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng TOEIC từ XXX trở lên trong thực tế😎',
        requirement:  300,
        guarantee:  650,
        min_age: 0, 
        max_age: 0,
        basic_fee: 160000, 
        fee_unit: 'buổi',
        level_status: 'enabled'
    },
    {
        level_id: 6,
        course_id: 2,
        level_name: 'ADV',
        level_description:'Khóa học TOEIC ADVANCED (hay ADV-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa🤓🤓\r\n👉👉Theo đó, khóa ADV-TOEIC là khóa cao cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích nâng cao khả năng thành thạo ngôn ngữ cho những học viên đã nắm chắc cách sử dụng tiếng Anh.\r\n😏Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả TOEIC của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không.\r\n😍😍Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng TOEIC từ 8.0 trở lên trong thực tế😍😍',
        requirement:  650, 
        guarantee:  900,
        min_age: 0, 
        max_age: 0,
        basic_fee: 170000, 
        fee_unit: 'buổi',
        level_status: 'enabled'
    },
    {
        level_id: 7,
        course_id: 3,
        level_name: 'SPEAKING FOR COMMUNITY',
        level_description:'SPEAKING FOR COMMUNITY là một chương trình học tập thiết thực và linh hoạt dành cho các đối tượng học viên đã và đang trên con đường phát triển sự nghiệp.⭐️⭐️ Chương trình tập trung nâng cao khả năng giao tiếp, thuyết trình bằng tiếng Anh thực tiễn trong việc làm công sở, bao gồm trải nghiệm tiếp xúc với giáo viên người bản địa😘\r\n🤣🤣Tại các lớp học giao tiếp của trung tâm, học viên không được ngồi yên, không khí lớp học luôn sôi động, học viên luôn sẵn sàng tinh thần với những câu hỏi PHẢN XẠ từ các sứ giả.\r\n😝Thông qua Questions and answers, học viên sẽ được tạo phản xạ liên tục Hỏi – Phản xạ - Hỏi – Phạn xạ - Hỏi – Phản xạ để khắc sâu mãi mãi kiến thức đã được học và ứng biến thật nhanh khi gặp các câu hỏi này trong cuộc sống😝',
        requirement:  0, 
        guarantee:  0,
        min_age: 0, 
        max_age: 0, 
        basic_fee: 1600000,
        fee_unit: 'buổi',
        level_status: 'enabled'
    },
    {
        level_id: 8,
        course_id: 3,
        level_name: 'ADVANCE WRITING',
        level_description:'ADVANCE WRITING là một chương trình học tập thiết thực và linh hoạt dành cho các đối tượng học viên đã và đang trên con đường phát triển sự nghiệp. Chương trình tập trung nâng cao khả năng viết và soạn văn bản bằng tiếng Anh thực tiễn trong việc làm công sở, bao gồm trải nghiệm tiếp xúc với giáo viên người bản địa và kèm cặp bởi giáo viên Việt Nam.\r\n😽😽Dù mục tiêu của bạn là thúc đẩy sự nghiệp, chuẩn bị cho việc học hay cải thiện các mối quan hệ xã hội, các khóa học của chúng tôi đều có thể giúp bạn đạt được mục tiêu của mình. Sử dụng tiếng Anh lịch sự chỉ sử dụng cho văn viết, giúp ngôn từ được truyền đạt qua giấy tờ trở nên trang trọng, ý nghĩa hơn.\r\n🥸Các giáo viên chuyên nghiệp, có trình độ chuyên môn cao của chúng tôi phụ trách các lớp học và khóa học tiếng Anh trực tuyến hấp dẫn có sự tương tác trực tiếp.',
        requirement:  0, 
        guarantee:  0,
        min_age: 0, 
        max_age: 0, 
        basic_fee: 1600000,
        fee_unit: 'buổi',
        level_status: 'enabled'
    },
    {
        level_id: 9,
        course_id: 4,
        level_name: 'JUMPSTART',
        level_description:'Là một trong 3 chương trình theo độ tuổi của khóa học Tiếng Anh cho bé, JUMPSTART thích hợp cho các em từ 3 đến 6 tuổi muốn tiếp xúc sớm và tạo nền tảng với Anh ngữ, cũng như phát triển kĩ năng giao tiếp và sự tự tin khi nói chuyện bằng ngoại ngữ.🤗🤗\r\n🤠Các bé tham gia chương trình sẽ có cơ hội tiếp xúc với các giáo viên bản xứ thân thiện, trải nghiệm các hoạt động ngoại khóa phát triển tiếng Anh cùng các bạn cùng lứa🤠\r\n',
        requirement:  0, 
        guarantee:  0,
        min_age: 3, 
        max_age: 6,  
        basic_fee: 1300000, 
        fee_unit: 'toàn khóa',
        level_status: 'enabled'
    },
    {
        level_id: 10,
        course_id: 4,
        level_name: 'JUNIOR',
        level_description:'Là một trong 3 chương trình theo độ tuổi của khóa học Tiếng Anh cho bé, JUNIOR thích hợp cho các em từ 6 đến 11 tuổi muốn mài dũa khả năng tiếng Anh, cũng như phát triển kĩ năng giao tiếp và sự tự tin khi nói chuyện bằng ngoại ngữ.🐧🐧\r\n🐳🐳Các em tham gia chương trình sẽ có cơ hội tiếp xúc với các giáo viên bản xứ thân thiện, trải nghiệm các hoạt động ngoại khóa phát triển tiếng Anh cùng các bạn cùng lứa.',
        requirement:  0, 
        guarantee:  0,
        min_age: 6, 
        max_age: 11, 
        basic_fee: 1500000,
        fee_unit: 'toàn khóa',
        level_status: 'enabled'
    },
    {
        level_id: 11,
        course_id: 4,
        level_name: 'TEEN',
        level_description:'Là một trong 3 chương trình theo độ tuổi của khóa học Tiếng Anh cho bé, TEEN thích hợp cho các em từ 11 đến 16 tuổi muốn mài dũa khả năng tiếng Anh, chuẩn bị cho các kì thi, cũng như phát triển kĩ năng giao tiếp và sự tự tin khi nói chuyện bằng ngoại ngữ.🦈\r\n🦚🦚Các em tham gia chương trình sẽ có cơ hội tiếp xúc với các giáo viên bản xứ thân thiện, trải nghiệm các hoạt động ngoại khóa phát triển tiếng Anh cùng các bạn cùng lứa.🦚🦚',
        requirement:  0, 
        guarantee:  0,
        min_age: 11, 
        max_age: 16, 
        basic_fee: 1700000,
        fee_unit: 'toàn khóa',
        level_status: 'enabled'
    },

    ]
    list.forEach(element => {
        Bot_CourseLevels.sync().then(async function() {
            await Bot_CourseLevels.findOrCreate({ where: element })
        })
    });
    return Bot_CourseLevels;
}