import axios from "axios";
import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import BulletCard from "../../../components/CardComponents/CoursePage/BulletCard";
import Footer from "../../../components/Footer/Footer";
import AppoinmentLayout from "../../../components/LayoutComponents/ContactPage/AppoinmentLayout";
import StaffTeacherLayout from "../../../components/LayoutComponents/StaffPage/StaffTeacherLayout";
import CourseInfoOptions from "../../../components/SwitchComponents/CoursePage/CourseInfoOptions";
import TuitionCalculator from "../../../components/TrayComponents/TuitionCalculator";
import './EngForAdults.css'

const renderLevelContent = (props) => {
    return (
        <div>
            <div className="info-section">
                <span className="title">Giới thiệu :</span>
                <p className="paragraph">
                    {/* Khóa học IELTS PREPARE (hay PRE-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa PRE-IELTS là khóa cơ sở trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, tạo nền móng tiếng Anh cho những học viên mới bắt đầu làm quen với tiếng Anh, không có nền tảng ngôn ngữ hoặc có nhu cầu lấy lại gốc tiếng Anh. Chính vì thế mà cấp độ này không có yêu cầu đầu vào. Kiến thức nền tảng có được sau khóa học đủ để học viên tự tin tham gia thi lấy bằng IELTS trong thực tế. */}
                    {props.introParagraph}
                </p>
            </div>
            <div className="info-section section-more-margin">
                <span className="title">Mục tiêu rèn luyện của khóa học :</span>
                <p className="paragraph">
                    {/* Khóa học IELTS PREPARE (hay PRE-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa PRE-IELTS là khóa cơ sở trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, tạo nền móng tiếng Anh cho những học viên mới bắt đầu làm quen với tiếng Anh, không có nền tảng ngôn ngữ hoặc có nhu cầu lấy lại gốc tiếng Anh. Chính vì thế mà cấp độ này không có yêu cầu đầu vào. Kiến thức nền tảng có được sau khóa học đủ để học viên tự tin tham gia thi lấy bằng IELTS trong thực tế. */}
                    {props.purposeParagraph}
                </p>
            </div>
            <div className="info-section columns">
                <div className="column">
                    <span className="title">Thời lượng mỗi khóa học :</span>
                    <span className="paragraph">Mỗi khóa gồm 96 buổi học.</span>
                    <ul className="list">
                        <li>Thông thường : 12 tháng</li>
                        <li>Cấp tốc : 6 tháng</li>
                    </ul>
                </div>
                <div className="column">
                    <div className="info-section">
                        <span className="title">Thời lượng mỗi lớp học :</span>
                        <span className="parameter">2 giờ/buổi</span>
                    </div>
                    <div className="info-section">
                        <span className="title">Học phí cơ bản :</span>
                        <span className="parameter">{props.tuitionFee} VNĐ/buổi</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const renderBonusContent = (props) => {
    return (
        <div className="info-sections">
            <div className="info-section">
                <span className="title">Giới thiệu :</span>
                <p className="paragraph">
                    {/* Khóa học IELTS PREPARE (hay PRE-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa PRE-IELTS là khóa cơ sở trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, tạo nền móng tiếng Anh cho những học viên mới bắt đầu làm quen với tiếng Anh, không có nền tảng ngôn ngữ hoặc có nhu cầu lấy lại gốc tiếng Anh. Chính vì thế mà cấp độ này không có yêu cầu đầu vào. Kiến thức nền tảng có được sau khóa học đủ để học viên tự tin tham gia thi lấy bằng IELTS trong thực tế. */}
                    {props.introParagraph}
                </p>
            </div>
            <div className="info-section section-more-margin">
                <span className="title">
                    Áp dụng cho các cấp độ của khóa học :
                </span>
                <span className="parameter">IELTS, TOEIC và Tiếng Anh giao tiếp</span>
            </div>
            <div className="info-section columns">
                <div className="column">
                    <span className="title">Thời lượng mỗi khóa học :</span>
                    <span className="paragraph">Mỗi khóa gồm 96 buổi học.</span>
                    <ul className="list">
                        <li>Cấp tốc : 6 tháng</li>
                    </ul>
                </div>
                <div className="column">
                    <div className="info-section">
                        <span className="title">Thời lượng mỗi lớp học :</span>
                        <span className="parameter width235">4 giờ/buổi</span>
                    </div>
                    <div className="info-section">
                        <span className="title">Hệ số học phí :</span>
                        <span className="parameter width235">{props.multiplier}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

const levelTypes = [
    {
        icon: ['fas', 'comments-dollar'],
        title: "SPEAKING FOR COMMUNITY",
        longTitle: true,
        long: true,
        subtitle: "Improve communication skills",
        value: 160000,
        infoContent: renderLevelContent({
            introParagraph: "Tại các lớp học giao tiếp của trung tâm, học viên không được ngồi yên, không khí lớp học luôn sôi động, học viên luôn sẵn sàng tinh thần với những câu hỏi PHẢN XẠ từ các sứ giả.",
            purposeParagraph: "Thông qua Questions and answers, học viên sẽ được tạo phản xạ liên tục Hỏi – Phản xạ - Hỏi – Phạn xạ - Hỏi – Phản xạ để khắc sâu mãi mãi kiến thức đã được học và ứng biến thật nhanh khi gặp các câu hỏi này trong cuộc sống.",
            tuitionFee: "160 000"
        })
    },
    {
        icon: ['fas', 'feather-pointed'],
        title: "ADVANCE WRITING",
        long: true,
        subtitle: "Upgrade writing skill for work",
        value: 160000,
        infoContent: renderLevelContent({
            introParagraph: "Dù mục tiêu của bạn là thúc đẩy sự nghiệp, chuẩn bị cho việc học hay cải thiện các mối quan hệ xã hội, các khóa học của chúng tôi đều có thể giúp bạn đạt được mục tiêu của mình. Sử dụng tiếng Anh lịch sự chỉ sử dụng cho văn viết, giúp ngôn từ được truyền đạt qua giấy tờ trở nên trang trọng, ý nghĩa hơn",
            purposeParagraph: "Các giáo viên chuyên nghiệp, có trình độ chuyên môn cao của chúng tôi phụ trách các lớp học và khóa học tiếng Anh trực tuyến hấp dẫn có sự tương tác trực tiếp.",
            tuitionFee: "160 000"
        })
    },
]

const bonusTypes = [
    {
        icon: ['fas', 'person-running'],
        title: "SPEEDY",
        subtitle: "Efficient and shortened learning",
        infoContent: renderBonusContent({
            introParagraph: "Khóa học Speedy tập trung chuyên sâu vào kỹ năng giao tiếp trong đời sống và công việc. Chúng tôi không dạy lan man mà tập trung trọng tâm kiến thức. Phần học lý thuyết được tinh gọn, ưu tiên phần thực hành giao tiếp liên tục.",
            multiplier: "1.5"
        })
    },
    {
        icon: ['fas', 'people-arrows-left-right'],
        title: "1 vs 1",
        subtitle: "Lecturer attention focus",
        infoContent: renderBonusContent({
            introParagraph: "Một vấn đề của người đi làm khi đi học tiếng Anh giao tiếp là không muốn học ở lớp quá đông, quá nhiều lứa tuổi khác nhau có cả sinh viên, học sinh… Thì với các lớp học của trung tâm nhận đào tạo 1-1 cho người đi làm. Như vậy học viên sẽ được sứ giả kèm kỹ hơn, sứ giả nhiệt tình bám sát từng học viên, giúp bạn cải thiện kỹ năng và phản xạ với tiếng Anh tự nhiên hơn, nhanh hơn.",
            multiplier: "2.0"
        })
    }
]

const shortBonusTypes = [
    {
        icon: ['fas', 'person-running'],
        title: "SPEEDY",
        subtitle: "Shortened learning",
        value: 1.5
    },
    {
        icon: ['fas', 'people-arrows-left-right'],
        title: "1 vs 1",
        subtitle: "Lecturer attention focus",
        value: 2
    }
]

const EngForAdults = props => {
    const [listOfTeachers, setListOfTeachers] = useState([])
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {

        const getListTeachers = async () => {
            const result = await axios.get("http://localhost:8080/Staffs/course/Speaking/Top4")
            setListOfTeachers(result.data)
        }
        getListTeachers().catch(console.error)
    }, [])
    return (
        <div className="course-page-container adult">
            <div className="adult-introduction"></div>
            <div className="adult-road-map"></div>
            <div className="course-info-layout">
                <CourseInfoOptions
                    levelTypes={levelTypes}
                    bonusTypes={bonusTypes}
                ></CourseInfoOptions>
            </div>
            <div className="tuition-calculator-layout">
                <span className="tuition-calculator-title">Sơ lược học phí</span>
                <TuitionCalculator
                    whiteResult
                    levelTypes={levelTypes}
                    bonusTypes={shortBonusTypes}
                ></TuitionCalculator>
            </div>
            <StaffTeacherLayout
                title="Đội ngũ giảng viên"
                listItem={listOfTeachers}
            ></StaffTeacherLayout>
            <AppoinmentLayout> </AppoinmentLayout>

            <Footer></Footer>
        </div>
    )
}

export default EngForAdults;