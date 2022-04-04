module.exports = (sequelize, DataTypes) => {

    const Staffs = sequelize.define("Staffs", {
        staff_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        staff_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        staff_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        staff_introduction: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        staff_archievement: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        staff_type: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        assigned_course: {
            type: DataTypes.STRING(10),
            defaultValue: "none"
        },
        staff_img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    const list = [
        {
            staff_name: "Diluc Ragnvindr",
            staff_title: "CEO",
            staff_introduction: "Listen, as long as you stick to your own path, it doesn't matter what mother nature throws at you.",
            staff_archievement: "Once Upon a Time in Mondstadt",
            staff_type: "manager",
            staff_img: "https://i.imgur.com/sd1dfpl.png",
        },
        {
            staff_name: "Hu Tao",
            staff_title: "Lead Marketing",
            staff_introduction: "“We are entrusted by the people to loyally see out their wishes. WFP is special, in that it carries a dual responsibility, to those both of this realm, and the next.”",
            staff_archievement: "Ghostly March",
            staff_type: "manager",
            staff_img: "https://i.imgur.com/GSpR58V.png",
        },
        {
            staff_name: "Kamisato Ayato",
            staff_title: "CEO",
            staff_introduction: "Cultured and polite, he í a man of many ways and means",
            staff_archievement: "Quiet Elegance",
            staff_type: "manager",
            staff_img: "https://i.imgur.com/okyzoem.jpg",
        },
        {
            staff_name: "Paimon",
            staff_title: "Mascot",
            staff_introduction: "“Paimon is not EMERGENCY FOOD !\r\n\EHE te nandayo !”",
            staff_archievement: "Emergency Food",
            staff_type: "manager",
            staff_img: "https://i.imgur.com/oCfi1RP.png",
        },
        {
            staff_name: "Hồ Hoàn Mỹ",
            staff_title: "IELTS reading",
            staff_introduction: "Thành công không dành cho những kẻ lười biếng",
            staff_archievement: "IELTS reading 8.5 - listening 8.0\r\nMore and more",
            staff_type: "teacher",
            assigned_course: "IELTS",
            staff_img: "https://i.imgur.com/272HK4d.jpg",
        },
        {
            staff_name: "Andrew English",
            staff_title: "IELTS speaking",
            staff_introduction: "Anh Ngữ có trong tên của tôi và tôi sẽ truyền nó đến con tim các bạn",
            staff_archievement: "IELTS speaking 9.0\r\nLorem Seum\r\nblam balm",
            staff_type: "teacher",
            assigned_course: "IELTS",
            staff_img: "https://i.imgur.com/CJWFCFQ.jpg",
        },
        {
            staff_name: "Nguyễn Minh Khải",
            staff_title: "IELTS 4 skills",
            staff_introduction: "Tiềm lực của mỗi người là vô hạn",
            staff_archievement: "IELTS reading 8.5\r\nIELTS listening 8.5\r\nIELTS writing 8.5\r\nIELTS speaking 8.5\r\nKinh nghiệp giảng đạo 20 năm",
            staff_type: "teacher",
            assigned_course: "IELTS",
            staff_img: "https://i.imgur.com/iF40qsx.jpg",
        },        
        {
            staff_name: "Lilith Petra",
            staff_title: "TOEIC 4 skills",
            staff_introduction: "TOEIC cấp tốc, học cái đậu liền",
            staff_archievement: "Lorem Ipsum è un testo segnaposto utilizzato nel settore",
            staff_type: "teacher",
            assigned_course: "TOEIC",
            staff_img: "https://i.imgur.com/EWdYeiH.jpg",
        },
        {
            staff_name: "Elizabeth Endro",
            staff_title: "IELTS speaking",
            staff_introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            staff_archievement: "ullamco laboris nisi ut aliquip\r\nex ea commodo consequat.",
            staff_type: "teacher",
            assigned_course: "IELTS",
            staff_img: "https://i.imgur.com/D4HxnWf.png",
        },
        {
            staff_name: "Nguyễn Cẩm Quỳnh",
            staff_title: "TOEIC speaking",
            staff_introduction: "Lorem Ipsum è un testo segnaposto utilizzato nel",
            staff_archievement: "Lorem Ipsum è un testo segnaposto utilizzato nel settore",
            staff_type: "teacher",
            assigned_course: "TOEIC",
            staff_img: "https://i.imgur.com/X3VZMnf.jpg",
        },
        {
            staff_name: "Anna Alson",
            staff_title: "TOEIC reading - listening",
            staff_introduction: "Lorem Ipsum è un testo segnaposto utilizzato nel",
            staff_archievement: "Lorem Ipsum è un testo segnaposto utilizzato nel settore",
            staff_type: "teacher",
            assigned_course: "TOEIC",
            staff_img: "https://i.imgur.com/i1qDVyK.jpg",
        },
        {
            staff_name: "Trần Thị Minh Nguyệt",
            staff_title: "Toeic 4 skills",
            staff_introduction: "Nâng niu trí tuệ Việt",
            staff_archievement: "Lorem Seum\r\nBlah blah\r\nHAHAHA",
            staff_type: "teacher",
            assigned_course: "TOEIC",
            staff_img: "https://i.imgur.com/BJP09J2.jpg",
        },
        {
            staff_name: "Max Wilkhen",
            staff_title: "Khóa luyện giao tiếp",
            staff_introduction: "Lorem Ipsum è un testo segnaposto utilizzato nel",
            staff_archievement: "Lorem Ipsum è un testo segnaposto utilizzato nel settore",
            staff_type: "teacher",
            assigned_course: "Speaking",
            staff_img: "https://i.imgur.com/zDd8Njc.jpg",
        },
        {
            staff_name: "Hilton Alwot",
            staff_title: "Khóa luyện giao tiếp",
            staff_introduction: "Lorem Ipsum è un testo segnaposto utilizzato nel",
            staff_archievement: "Lorem Ipsum è un testo segnaposto utilizzato nel settore",
            staff_type: "teacher",
            assigned_course: "Speaking",
            staff_img: "https://i.imgur.com/zpmM2EJ.jpg",
        },
        {
            staff_name: "Sam Olsen",
            staff_title: "Khóa luyện giao tiếp",
            staff_introduction: "Lorem Ipsum è un testo segnaposto utilizzato nel",
            staff_archievement: "Lorem Ipsum è un testo segnaposto utilizzato nel settore",
            staff_type: "teacher",
            assigned_course: "Speaking",
            staff_img: "https://i.imgur.com/5izGDbU.jpg",
        },
        {
            staff_name: "Hera Thelma",
            staff_title: "Khóa luyện giao tiếp",
            staff_introduction: "Lorem Ipsum è un testo segnaposto utilizzato nel",
            staff_archievement: "Lorem Ipsum è un testo segnaposto utilizzato nel settore",
            staff_type: "teacher",
            assigned_course: "Speaking",
            staff_img: "https://i.imgur.com/iGApIRn.jpg",
        },
        {
            staff_name: "Jessica Gustin",
            staff_title: "Lead Consultant",
            staff_introduction: "Lorem Ipsum è un testo segnaposto utilizzato nel",
            staff_archievement: "Lorem Seum\r\nBlah blah\r\nHAHAHA",
            staff_type: "adviser",
            staff_img: "https://i.imgur.com/AwTcX2C.png",
        },
        {
            staff_name: "Lê Thanh Phong",
            staff_title: "Lead Adviser",
            staff_introduction: "Sứ giả truyền cảm hứng",
            staff_archievement: "Lorem Seum\r\nBlah blah\r\nHAHAHA",
            staff_type: "adviser",
            staff_img: "https://i.imgur.com/Txjbrzq.jpg",
        },
        {
            staff_name: "Đinh Quang Ngân",
            staff_title: "Lead Adviser",
            staff_introduction: "Tư vấn viên kỳ cựu, xuất sắc nhất",
            staff_archievement: "Lorem Seum\r\nBlah blah\r\nHAHAHA",
            staff_type: "adviser",
            staff_img: "https://i.imgur.com/FXkqxJT.png",
        },
        {
            staff_name: "Tholma Nguyễn",
            staff_title: "Lead Event",
            staff_introduction: "Định hướng của tôi là tạo ra môi trường học thân thiện, kết hợp giữa vừa học vừa chơi",
            staff_archievement: "Lorem Seum\r\nBlah blah\r\nHAHAHA",
            staff_type: "adviser",
            staff_img: "https://i.imgur.com/zi0VjkY.jpg",
        },
    ]

    list.forEach(element => {
        Staffs.sync().then(async function() {
            await Staffs.findOrCreate({ where: element })
        })
    });

    return Staffs
}
