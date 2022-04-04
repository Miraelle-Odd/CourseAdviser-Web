module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        post_img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_type: {
            type: DataTypes.STRING(10),
            defaultValue: "academic"
        },
        post_status: {
            type: DataTypes.STRING(10),
            defaultValue: "enabled"
        },
    });
    const list = [
        {
            author_id: 2,
            post_title: "English Paragraph Everyday",
            post_content: "My name is Phuong Linh. In this essay, I will tell you about my lovely family. My family has 4 people: my mother, my father, my brother and me. My mother is a Maths teacher. She is very smart. My mom makes a lot of important decisions in my home. My dad is a graphic designer. My dad always works with a computer. He is a creative and talented person. People are usually surprised when they hear that my dad cooks very well. My little brother is only 2 years old. He is funny and makes my family happier everyday. I love my family. I hope that my family will always be filled with laughter.",
            post_img: "https://i.imgur.com/aQdzXTB.png",
            post_type: "academic"
        },
        {
            author_id: 4,
            post_title: "Test Bài Đăng 1",
            post_content: "Đây là bài đăng dùng để demo cơ sở dữ liệu",
            post_img: "https://i.imgur.com/pcWsMyF.jpg",
            post_type: "discount"
        },
        {
            author_id: 4,
            post_title: "Test Bài Đăng 2",
            post_content: "Đây là bài đăng dùng để demo cơ sở dữ liệu",
            post_img: "https://i.imgur.com/VEXVTCo.png",
            post_type: "discount"
        },
        {
            author_id: 4,
            post_title: "Quà tặng cuộc sống phần 1",
            post_content: "Cả lớp ngạc nhiên khi thầy phát cho chúng tôi ba loại đề khác nhau rồi nói:\r\n- Đề thứ nhất gồm những câu hỏi vừa dễ và khó, nếu làm hết các em sẽ được 10 điểm. Đề thứ hai có số điểm cao nhất là 8 với những câu hỏi tương đối dễ. Đề thứ 3 có số điểm tối đa là 6 với những câu hỏi rất dễ. Các em được quyền chọn đề cho mình.\r\nThầy chỉ cho làm bài trong 15 phút nên tôi đã chọn đề thứ 2 cho chắc ăn. Không chỉ tôi mà các bạn cùng lớp cũng thế, chẳng có ai chọn đề thứ nhất cả.\r\nMột tuần sau, thầy Peter phát bài kiểm tra ra. Cả lớp lại càng ngạc nhiên hơn khi biết ai chọn đề nào thì được tổng số điểm của đề đó, bất kể làm đúng hay sai. Lớp trưởng hỏi thầy:\r\n- Thưa thầy tại sao lại như thế?\r\nThầy cười rồi nghiêm nghị trả lời:\r\n- Với bài kiểm tra này, thầy chỉ muốn thử thách sự tự tin của lớp mình. Ai trong số các em cũng mơ ước đạt được điểm 10 nhưng ít ai dám vượt qua thử thách để biến ước mơ ấy thành sự thật.",
            post_img: "https://i.imgur.com/2PxgbqT.jpg",
            post_type: "event"
        },
        {
            author_id: 2,
            post_title: "Học IELTS không khó",
            post_content: "Có thể kết luận thẳng một câu: Thi IELTS rất khó nhưng cũng ...dễ như ăn bánh. Vì sao lại thế? \r\nĐơn giản thôi! Cái gì cũng vậy dễ với người biết và khó với người không biết.\r\nNếu bạn chưa ôn thi IELTS, chưa có kiến thức gì về tiếng Anh IELTS tất nhiên bạn sẽ thấy khó.\r\nNgược lại thì sao, bạn học bạn hiểu IELTS và bạn nắm vững 4 kỹ năng: Nghe, nói, đọc viết thì kỳ thi IELTS đối với bạn dễ dàng và kỳ thi IELTS chỉ như một bài test ngôn ngữ mà thôi!.\r\nKhi bạn biết rằng thi IELTS là bạn phải thi cả 4 kỹ năng bạn sẽ hoang mang và nghĩ rằng thi IELTS sẽ rất khó!\r\nNhưng bạn yên tâm, nếu bạn đã biết rồi, thì thi IELTS dễ dàng lắm nha. Hãy cùng trung tâm Chúng tôi bắt đầu vào quá trình thi IELTS không khó mà dễ nhé!",
            post_img: "https://i.imgur.com/lrc6Oe3.jpg",
            post_type: "academic"
        },
        {
            author_id: 4,
            post_title: "Quà tặng cuộc sống phần 2",
            post_content: "Vào một buổi sáng đẹp trời, chú cún con chạy đến bên mẹ và hỏi:\r\n- Mẹ ơi, hạnh phúc ở đâu?\r\nMẹ cún con mỉm cười đáp:\r\n- Hạnh phúc nằm ở chiếc đuôi xinh xắn của con đó!\r\nCún con thích lắm, ngày nào chú cũng ngắm nghía chiếc đuôi của mình, vừa nhảy vừa vẫy vãy chiếc đuôi! Nhưng rồi bỗng một hôm, chú cún con buồn bã chạy đến bên mẹ:\r\n- Mẹ ơi, tại sao con chẳng bao giờ nắm giữ được hạnh phúc vậy?\r\nMẹ khẽ vuốt ve cún con và đáp:\r\n- Chỉ cần con tự tin bước về phía trước, hạnh phúc sẽ tự đi theo con thôi!!!",
            post_img: "https://i.imgur.com/WHrlCk4.jpg",
            post_type: "event"
        }
    ]
    list.forEach(element => {
        Posts.sync().then(async function() {
            await Posts.findOrCreate({ where: element })
        })
    });
    return Posts;
}