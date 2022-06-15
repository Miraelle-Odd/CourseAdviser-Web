import axios from "axios";
import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
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
                    {/* Khóa học IELTS PREPARE (hay PRE-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa PRE-IELTS là khóa cơ sở trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, tạo nền móng tiếng Anh cho những học viên mới bắt đầu làm quen với tiếng Anh, không có nền tảng ngôn ngữ hoặc có nhu cầu lấy lại gốc tiếng Anh. Chính vì thế mà cấp độ này không có yêu cầu đầu vào. Kiến thức nền tảng có được sau khóa học đủ để học viên tự tin tham gia thi lấy bằng IELTS trong thực tế. */}
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
        icon: ['fas', 'seedling'],
        title: "PREPARE",
        subtitle: "Learning basic English",
        value: 3000000,
        infoContent: renderLevelContent({
            introParagraph: "Khóa học TOEIC PREPARE (hay PRE-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa PRE-TOEIC là khóa cơ sở trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, tạo nền móng tiếng Anh cho những học viên mới bắt đầu làm quen với tiếng Anh, không có nền tảng ngôn ngữ hoặc có nhu cầu lấy lại gốc tiếng Anh. Chính vì thế mà cấp độ này không có yêu cầu đầu vào. Kiến thức nền tảng có được sau khóa học đủ để học viên tự tin tham gia thi lấy bằng TOEIC trong thực tế.",
            require: "Không",
            guaranteer: "TOEIC ???+",
            tuitionFee: "XX XXX"
        })
    },
    {
        icon: ['fab', 'pagelines'],
        title: "INTERMEDIATE",
        subtitle: "Learning basic English",
        value: 3500000,
        infoContent: renderLevelContent({
            introParagraph: "Khóa học TOEIC INTERMEDIATE (hay INTER-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa INTER-TOEIC là khóa trung cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, mài dũa cho những học viên đã có nền tảng tiếng Anh nắm chắc kiến thức và nâng cao khả năng hiểu sâu. Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả TOEIC của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng TOEIC từ XXX trở lên trong thực tế.",
            require: "TOEIC ???+",
            guaranteer: "TOEIC ???+",
            tuitionFee: "XX XXX"
        })
    },
    {
        icon: ['fas', 'tree'],
        title: "ADVANCE",
        subtitle: "Learning basic English",
        value: 4000000,
        infoContent: renderLevelContent({
            introParagraph: "Khóa học TOEIC ADVANCED (hay ADV-TOEIC) là một trong khóa học Luyện thi TOEIC chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa ADV-TOEIC là khóa cao cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích nâng cao khả năng thành thạo ngôn ngữ cho những học viên đã nắm chắc cách sử dụng tiếng Anh. Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả TOEIC của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng TOEIC từ 8.0 trở lên trong thực tế.",
            require: "TOEIC ???+",
            guaranteer: "TOEIC ???+",
            tuitionFee: "XX XXX"
        })
    }
]

const bonusTypes = [
    {
        icon: ['fas', 'person-running'],
        title: "SPEEDY",
        subtitle: "Efficient and shortened learning",
        infoContent: renderBonusContent({
            introParagraph: "Giáo trình được thiết kế vô cùng công phu và tỉ mỉ. Chỉ riêng cho cấp độ Speedy, tất cả chương trình luyện thi Toeic đều được biên soan công phu từ những giáo viên ngoại ngữ hàng đầu Việt Nam. Tổng hợp từ những chương trình Toeic phổ biến nhất để cho ra một giáo trình luyện thi Toeic độc nhất chỉ có ở trung tâm. Một giáo trình thiết thực với trình độ sinh viên Việt Nam và không chỉ giúp tiết kiệm thời gian, công sức cho học viên mà còn hoàn toàn đảm bảo về trình độ và kỹ năng cho học viên để đạt kết quả cao nhất khi làm bài thi Toeic.",
            multiplier: "1.5"
        })
    },
    {
        icon: ['fas', 'people-arrows-left-right'],
        title: "1 vs 1",
        subtitle: "Lecturer attention focus",
        infoContent: renderBonusContent({
            introParagraph: "Chương trình rất thích hợp cho học viên cần xây dựng một nền tảng kiến thức vững chắc. Giúp cho học viên định hình cấu trúc bài thi TOEIC và tập trung cải thiện 4 kỹ năng Nghe, Nói, Đọc, Viết. Bổ xung vốn từ vựng căn bản cho học viên, giúp phục hồi các kiến thức đã mất. Thích hợp với những người mới bắt đầu học Tiếng Anh hoặc đã bỏ lâu và muốn quay lại. Tốc độ lớp TOEIC basic tương đối vừa phải để đảm bảo học viên đều theo kịp chương trình học.",
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