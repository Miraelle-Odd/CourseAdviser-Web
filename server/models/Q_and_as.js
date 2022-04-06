module.exports = (sequelize, DataTypes) => {
    const Q_and_as = sequelize.define("Q_and_as", {
        qa_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        main_subject: {
            type: DataTypes.STRING(7),
            allowNull: false,
            defaultValue: 'center'
        },
        sub_subject_a: {
            type: DataTypes.STRING(12),
            allowNull: false,
            defaultValue: 'none'
        },
        sub_subject_b:{
            type: DataTypes.STRING(7),
            allowNull: false,
            defaultValue: 'none'
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        answer: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        status: {
            type: DataTypes.STRING(10),
            defaultValue: "enabled"
        },
    });
    const list = [
        {
            main_subject:'center',
            sub_subject_a: 'contact', 
            sub_subject_b: 'none',
            question:'Tôi muốn liên hệ với Trung tâm thì gọi số nào và gặp người nào?',
            answer: '\"Vui lòng liên hệ qua số điện thoại 000000000 hoặc 123456789 để được tư vấn về lớp học.\r\nNgoài ra, bạn có thể gửi mail về:\r\nemailcuatrungtam@gmail.com\r\ntuvanvien@gmail.com\"',
            status:'enabled'
        },
        {
            main_subject:'center', 
            sub_subject_a: 'teaching', 
            sub_subject_b:'none',
            question:'Học tại Trung tâm XXX có được cấp bằng hoặc chứng nhận không?', 
            answer:'Chúng tôi không tổ chức cấp bằng cho học viên. Chúng tôi có nhiệm vụ dạy cho học viên kiến thức, hướng dẫn thủ tục để học viên thi lấy bằng theo nhu cầu cá nhân.', 
            status:'enabled'
        },
        {
            main_subject:'center', 
            sub_subject_a:'register', 
            sub_subject_b:'none',
            question:'Chọn lớp học và đăng ký học như thế nào?', 
            answer: 'Để đảm bảo cung cấp dịch vụ phù hợp với nhu cầu của học viên, chúng tôi không hỗ trợ đăng kí học qua hình thức điền form online. Mời bạn vui lòng tạo một lịch hẹn thông qua nút đăng kí thi thử ở trang chủ để được tư vấn chọn lớp tại trung tâm một cách thích hợp nhất. Sau đó, nhân viên sẽ hỗ trợ bạn đăng kí khóa học cũng nhưng hoàn thành các thủ tục, trả lệ phí cần thiết cũng như đề suất các khuyến mãi hữu ích', 
            status:'enabled'
        },
        {
            main_subject:'course',   
            sub_subject_a:'IELTS',
            sub_subject_b:'tuition', 
            question:'Học phí cho mỗi khóa học là bao nhiêu?',
            answer:'\"Khóa học phân thành 3 cấp độ PRE (150 nghìn đồng/2 tiếng/buổi), INTER (160 nghìn đồng/2 tiếng/buổi), ADV(170 nghìn đồng/2 tiếng/buổi). Với kiểu học thường hoặc cấp tốc đều có tổng 96 buổi. Nếu học viện học cấp tốc sẽ nhân học phí với hệ số 1,5. Nếu học viên đăng kí học kèm 1v1 sẽ nhân học phí với hệ số 2. Trường cũng sẽ có chương trình học bổng khuyến mãi dành cho các học viên\r\nTổng học phí cần trả có thể được tính:\r\n[Tổng học phí] = [học phí gốc]*96*[hệ số thời gian học]*[hệ số phương thức học] * [khuyến mãi(nếu có)]\r\nHọc phí có thể trãi từ 14, 4 triệu ~ 48,96 triệu đồng tùy theo nhu cầu và khả năng chi trả của học viên\"', 
            status:'enabled'
        },
        {
            main_subject:'course',   
            sub_subject_a:'IELTS',
            sub_subject_b:'tuition',
            question:'Học phí đóng vào đầu tháng hay cuối tháng?', 
            answer:'\"Chúng tôi hỗ trợ 2 hình thức chi trả:\r\n- Toàn phần : Thanh toán toàn bộ học phí khi hoàn thành đăng kí nhập học\r\n- Trả góp theo tháng : Thực hiện ở đầu mỗi tháng trong quá trình học qua chuyển khoản hoặc trực tiếp tại văn phòng của trung tâm\r\nTài khoản ngân hàng : bdahbdwubadiwuadi\"', 
            status:'enabled'
        },
        {
            main_subject:'center',   
            sub_subject_a:'reservation',
            sub_subject_b:'none',
            question:'Tôi đã đóng học phí nhưng vì công việc bận tôi phải ngừng học một thời gian . Vậy tôi có được nhận lại số buổi học tôi chưa học trong tháng đó không?', 
            answer:'\"Trung tâm có hỗ trợ học viên bảo lưu trong quá trình học tập. Nếu có dự định tạm nghỉ, vui lòng liên hệ trung tâm tư vấn qua số điện thoại 123456789 hoặc gửi mail đến tuvanvien@gmail.com để đăng kí bảo lưu. Giới hạn bảo lưu của học viên học khóa học thường là 40 ngày và học cấp tốc là 20 ngày. Học viên có thể gia hạn thêm, mỗi lần gia hạn sẽ phải đóng một mức phí là 1 triệu đồng cho mỗi 10 ngày.\r\nNếu các bạn đăng kí bảo lưu hợp lệ, các bạn có thể đi học bù số buổi học đó và thời gian học sẽ được kéo dài ra ứng với số buổi học bù.\r\nNếu các bạn nghỉ không đăng kí bảo lưu, các buổi học vẫn sẽ được tính và sẽ không được hoàn tiền.\r\nVới tình hình Covid hiện tại, trung tâm tổ chức bảo lưu miễn phí cho các học viên, có nghĩa là thời gian nghỉ này sẽ không trừ vào giới hạn bảo lưu của các bạn.\"', 
            status:'enabled'
        },
        {
            main_subject:'center',    
            sub_subject_a:'teaching',
            sub_subject_b:'none',
            question:'Chất lượng giáo viên tại XXXX ra sao?',
            answer:'người Việt và nước ngoài với chuyên môn cao, tâm huyết, nhiệt tình, năng động, sở hữu những bằng cấp quốc tế IELTS trên 7.5, TESOL cam kết đem đến những giờ học chất lượng nhất cho học viên. 100% giáo viên bản ngữ tại XXXX là người Anh, Mỹ nhằm tạo ra chuẩn phát âm tiếng Anh quốc tế cho học viên tại trung tâm.',
            status:'enabled'
        },
        {
            main_subject:'course',  
            sub_subject_a:'Adult Course',
            sub_subject_b:'tuition',
            question:'Học phí khóa Tiếng Anh cho người đi làm là bao nhiêu?',
            answer: 'Khóa Tiếng Anh cho người đi làm có 3 cấp độ là PRE, INTER, ADV dành cho người muốn lấy bằng A, B hay C.\r\nHọc phí của 3 mức độ lần lượt là\r\n- PRE 2.500.000 VNĐ\r\n- INTER 2.800.000 VNĐ\r\n- ADV 3.100.000 VNĐ',
            status:'enabled'
        }
    ]
    list.forEach(element => {
        Q_and_as.sync().then(async function() {
            await Q_and_as.findOrCreate({ where: element })
        })
    });
    return Q_and_as;
}