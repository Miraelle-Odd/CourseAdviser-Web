import axios from "axios";
import { useEffect, useState } from "react";
import BulletCard from "../../../components/CardComponents/CoursePage/BulletCard";
import Footer from "../../../components/Footer/Footer";
import AppoinmentLayout from "../../../components/LayoutComponents/ContactPage/AppoinmentLayout";
import StaffTeacherLayout from "../../../components/LayoutComponents/StaffPage/StaffTeacherLayout";
import CourseInfoOptions from "../../../components/SwitchComponents/CoursePage/CourseInfoOptions";
import TuitionCalculator from "../../../components/TrayComponents/TuitionCalculator";
import './Ielts.css'

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
                    <span className="parameter">IELTS, TOEIC và Tiếng Anh giao tiếp</span>
                </span>


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
        value: 100,
        infoContent: renderLevelContent({
            introParagraph: "Khóa học IELTS PREPARE (hay PRE-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa PRE-IELTS là khóa cơ sở trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, tạo nền móng tiếng Anh cho những học viên mới bắt đầu làm quen với tiếng Anh, không có nền tảng ngôn ngữ hoặc có nhu cầu lấy lại gốc tiếng Anh. Chính vì thế mà cấp độ này không có yêu cầu đầu vào. Kiến thức nền tảng có được sau khóa học đủ để học viên tự tin tham gia thi lấy bằng IELTS trong thực tế.",
            require: "Không",
            guaranteer: "IELTS 5.0+",
            tuitionFee: "XX XXX"
        })
    },
    {
        icon: ['fab', 'pagelines'],
        title: "INTERMEDIATE",
        subtitle: "Learning basic English",
        value: 200,
        infoContent: renderLevelContent({
            introParagraph: "Khóa học IELTS INTERMEDIATE (hay INTER-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa INTER-IELTS là khóa trung cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích rèn luyện, mài dũa cho những học viên đã có nền tảng tiếng Anh nắm chắc kiến thức và nâng cao khả năng hiểu sâu. Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả IELTS của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng IELTS từ 7.0 trở lên trong thực tế.",
            require: "IELTS 5.0+",
            guaranteer: "IELTS 7.0+",
            tuitionFee: "XX XXX"
        })
    },
    {
        icon: ['fas', 'tree'],
        title: "ADVANCE",
        subtitle: "Learning basic English",
        value: 300,
        infoContent: renderLevelContent({
            introParagraph: "Khóa học IELTS ADVANCED (hay ADV-IELTS) là một trong khóa học Luyện thi IELTS chính được phân loại dựa theo mức độ kiến thức sẽ đạt được sau khóa. Theo đó, khóa ADV-IELTS là khóa cao cấp trong 3 mức độ (PRE, INTER, ADV) với mục đích nâng cao khả năng thành thạo ngôn ngữ cho những học viên đã nắm chắc cách sử dụng tiếng Anh. Khóa học yêu cầu học viên tham gia thi thử đầu vào hoặc trình diện kết quả IELTS của mình (nếu có) nhằm đánh giá trình độ hiện tại xem xét đủ khả năng tham gia lớp hay không. Kiến thức có được sau khóa học đảm bảo học viên tự tin tham gia thi lấy bằng IELTS từ 8.0 trở lên trong thực tế.",
            require: "IELTS 6.5+",
            guaranteer: "IELTS 8.0+",
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
            introParagraph: "Cras id ullamcorper libero. Cras ornare congue porttitor. Maecenas maximus erat quis orci pretium, ut pharetra turpis tempus. Phasellus mattis hendrerit pharetra. Vestibulum sit amet neque elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit felis felis, nec accumsan diam hendrerit vel. Ut efficitur interdum ante at tempus. Sed ipsum erat, tincidunt id urna sit amet, luctus pharetra enim.",
            multiplier: "1.5"
        })
    },
    {
        icon: ['fas', 'people-arrows-left-right'],
        title: "1 vs 1",
        subtitle: "Lecturer attention focus",
        infoContent: renderBonusContent({
            introParagraph: "Cras id ullamcorper libero. Cras ornare congue porttitor. Maecenas maximus erat quis orci pretium, ut pharetra turpis tempus. Phasellus mattis hendrerit pharetra. Vestibulum sit amet neque elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit felis felis, nec accumsan diam hendrerit vel. Ut efficitur interdum ante at tempus. Sed ipsum erat, tincidunt id urna sit amet, luctus pharetra enim.",
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

const Ielts = props => {
    const [listOfTeachers, setListOfTeachers] = useState([])
    useEffect(() => {

        const getListTeachers = async () => {
            const result = await axios.get("http://localhost:8080/Staffs/course/IELTS/Top4")
            setListOfTeachers(result.data)
        }
        getListTeachers().catch(console.error)
    }, [])
    return (
        <div className="course-page-container IELTS">
            <div className="IELTS-introduction"></div>
            <div className="IELTS-road-map"></div>
            <div className="course-info-layout">
                <CourseInfoOptions
                    levelTypes={levelTypes}
                    bonusTypes={bonusTypes}
                ></CourseInfoOptions>
            </div>
            <div className="tuition-calculator-layout">
                <span className="tuition-calculator-title">Sơ lược học phí</span>
                <TuitionCalculator
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

export default Ielts;