import axios from "axios";
import { useEffect, useState } from "react";
import BulletCard from "../../../components/CardComponents/CoursePage/BulletCard";
import Footer from "../../../components/Footer/Footer";
import AppoinmentLayout from "../../../components/LayoutComponents/ContactPage/AppoinmentLayout";
import StaffTeacherLayout from "../../../components/LayoutComponents/StaffPage/StaffTeacherLayout";
import CourseInfoOptions from "../../../components/SwitchComponents/CoursePage/CourseInfoOptions";
import TuitionCalculator from "../../../components/TrayComponents/TuitionCalculator";
import './Toeic.css'

const renderLevelContent = (props) => {
    return (
        <div>
            <div className="info-section">
                <span className="title">Giới thiệu :</span>
                <p className="paragraph">
                    {props.introParagraph}
                </p>
            </div>
            <div className="info-section">
                <span className="title">Yêu cầu đầu vào và cam kết đầu ra :</span>
                <div className="bullet-content">
                    <BulletCard
                        fieldName="Yêu cầu đầu vào"
                        fieldValue={props.require}
                    ></BulletCard>
                    <BulletCard
                        blue
                        fieldName="Đảm bảo đầu ra"
                        fieldValue={props.guaranteer}
                    ></BulletCard>
                </div>
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
                        <span className="parameter width235">2 giờ/buổi</span>
                    </div>
                    <div className="info-section">
                        <span className="title">Học phí cơ bản :</span>
                        <span className="parameter width235">{props.tuitionFee} VNĐ/buổi</span>
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
                    {props.introParagraph}
                </p>
            </div>
            <div className="info-section section-more-margin">
                <span className="title">
                    Áp dụng cho các cấp độ của khóa học :
                </span>
                <span className="parameter">IELTS, TOEIC và Tiếng Anh văn phòng</span>
            </div>
            <div className="info-section columns">
                <div className="column">
                    <span className="title">Thời lượng mỗi khóa học :</span>
                    <span className="paragraph">Mỗi khóa gồm 96 buổi học.</span>
                    <ul className="list">
                        <li>Thời lượng : {props.courseDuration}</li>
                    </ul>
                </div>
                <div className="column">
                    <div className="info-section">
                        <span className="title">Thời lượng mỗi lớp học :</span>
                        <span className="parameter width235">{props.classDuration} giờ/buổi</span>
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
        icon: ['fas', 'seedling'],
        title: "PREPARE",
        subtitle: "Học tiếng Anh cơ bản",
        value: 150000,
        infoContent: renderLevelContent({
            introParagraph: "Khóa học TOEIC PREPARE (hay PRE-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa PRE-TOEIC là khóa cơ sở trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, tạo nền móng tiếng Anh cho những học viên mới bắt đầu làm quen với tiếng Anh, không có nền tảng ngôn ngữ hoặc có nhu cầu lấy lại gốc tiếng Anh. Chính vì thế mà cấp độ này không có yêu cầu đầu vào. Kiến thức nền tảng có được sau khóa học đủ để học viên tự tin tham gia thi lấy bằng TOEIC trong thực tế.",
            require: "Không",
            guaranteer: "TOEIC 300+",
            tuitionFee: "150 000"
        })
    },
    {
        icon: ['fab', 'pagelines'],
        title: "INTERMEDIATE",
        subtitle: "Rèn luyện và phát triển",
        value: 160000,
        infoContent: renderLevelContent({
            introParagraph: "Khóa học TOEIC INTERMEDIATE (hay INTER-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa INTER-TOEIC là khóa trung cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, mài dũa cho những học viên đã có nền tảng tiếng Anh nắm chắc kiến thức và nâng cao khả năng hiểu sâu. Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả TOEIC của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng TOEIC từ 650 trở lên trong thực tế.",
            require: "TOEIC 300+",
            guaranteer: "TOEIC 650+",
            tuitionFee: "160 000"
        })
    },
    {
        icon: ['fas', 'tree'],
        title: "ADVANCE",
        subtitle: "Thông thạo tiếng Anh",
        value: 170000,
        infoContent: renderLevelContent({
            introParagraph: "Khóa học TOEIC ADVANCED (hay ADV-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa ADV-TOEIC là khóa cao cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích nâng cao khả năng thành thạo ngôn ngữ cho những học viên đã nắm chắc cách sử dụng tiếng Anh. Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả TOEIC của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng TOEIC từ 900 trở lên trong thực tế.",
            require: "TOEIC 650+",
            guaranteer: "TOEIC 900+",
            tuitionFee: "170 000"
        })
    }
]

const bonusTypes = [
    {
        icon: ['fas', 'person'],
        title: "NORMAL",
        subtitle: "Dịch vụ cơ bản",
        infoContent: renderBonusContent({
            courseDuration: "12 tháng",
            classDuration: 2,
            introParagraph: "Đây là khóa học cơ bản không hỗ trợ học cấp tốc và 1 kèm 1. Thời gian giàn trải không gấp gáp với chương trình học và kiến thức chất lượng tiêu chuẩn giúp các học viên tiếp thu hiệu quả theo châm ngôn mưa dầm thấm lâu. Các khóa học đều hoàn toàn đảm bảo về trình độ và kỹ năng cho học viên để đạt kết quả cao nhất khi làm bài thi TOEIC.",
            multiplier: "1.0"
        })
    },
    {
        icon: ['fas', 'person-running'],
        title: "SPEEDY",
        subtitle: "Nhanh chóng và hiệu quả",
        infoContent: renderBonusContent({
            courseDuration: "6 tháng",
            classDuration: 4,
            introParagraph: "Giáo trình được thiết kế vô cùng công phu và tỉ mỉ. Chỉ riêng cho cấp độ Speedy, tất cả chương trình luyện thi Toeic đều được biên soan công phu từ những giáo viên ngoại ngữ hàng đầu Việt Nam. Tổng hợp từ những chương trình Toeic phổ biến nhất để cho ra một giáo trình luyện thi Toeic độc nhất chỉ có ở trung tâm. Một giáo trình thiết thực với trình độ sinh viên Việt Nam và không chỉ giúp tiết kiệm thời gian, công sức cho học viên mà còn hoàn toàn đảm bảo về trình độ và kỹ năng cho học viên để đạt kết quả cao nhất khi làm bài thi Toeic.",
            multiplier: "1.5"
        })
    },
    {
        icon: ['fas', 'people-arrows-left-right'],
        title: "1 vs 1",
        subtitle: "Kèm cặp cá nhân hóa",
        infoContent: renderBonusContent({
            courseDuration: "6 tháng",
            classDuration: 4,
            introParagraph: "Chương trình rất thích hợp cho học viên cần xây dựng một nền tảng kiến thức vững chắc. Giúp cho học viên định hình cấu trúc bài thi TOEIC và tập trung cải thiện 4 kỹ năng Nghe, Nói, Đọc, Viết. Bổ xung vốn từ vựng căn bản cho học viên, giúp phục hồi các kiến thức đã mất. Thích hợp với những người mới bắt đầu học Tiếng Anh hoặc đã bỏ lâu và muốn quay lại. Tốc độ lớp TOEIC basic tương đối vừa phải để đảm bảo học viên đều theo kịp chương trình học.",
            multiplier: "2.0"
        })
    }
]

const shortBonusTypes = [
    {
        icon: ['fas', 'person-running'],
        title: "SPEEDY",
        subtitle: "Nhanh chóng và hiệu quả",
        value: 1.5
    },
    {
        icon: ['fas', 'people-arrows-left-right'],
        title: "1 vs 1",
        subtitle: "Kèm cặp cá nhân hóa",
        value: 2
    }
]

const Toeic = props => {
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [listOfTeachers, setListOfTeachers] = useState([])
    useEffect(() => {

        const getListTeachers = async () => {
            const result = await axios.get("http://localhost:8080/Staffs/course/TOEIC/Top4")
            setListOfTeachers(result.data)
        }
        getListTeachers().catch(console.error)
    }, [])
    return (
        <div className="course-page-container TOEIC">
            <div className="TOEIC-introduction"></div>
            <div className="TOEIC-road-map"></div>
            <div className="course-info-layout">
                <CourseInfoOptions
                    reversed
                    whiteTitle
                    levelTypes={levelTypes}
                    bonusTypes={bonusTypes}
                ></CourseInfoOptions>
            </div>
            <div className="tuition-calculator-layout">
                <span className="tuition-calculator-title">Sơ lược học phí</span>
                <TuitionCalculator
                    dark
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

export default Toeic;