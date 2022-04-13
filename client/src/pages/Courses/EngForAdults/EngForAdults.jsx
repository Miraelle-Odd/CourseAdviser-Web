import { Fragment } from "react/cjs/react.production.min";
import BulletCard from "../../../components/CardComponents/CoursePage/BulletCard";
import Footer from "../../../components/Footer/Footer";
import AppoinmentLayout from "../../../components/LayoutComponents/ContactPage/AppoinmentLayout";
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
        value: 100,
        infoContent: renderLevelContent({
            introParagraph: "Proin ex leo, accumsan eget fermentum mollis, dictum eu tortor. Maecenas vulputate neque vitae aliquam mattis. Ut pretium enim sed tristique luctus. Sed feugiat odio nec quam molestie blandit. Donec et dictum felis, feugiat tincidunt enim. Aenean posuere pulvinar turpis ac bibendum. Nullam pretium tellus porta sapien luctus auctor. Praesent dignissim dictum eros, molestie posuere velit pellentesque sed. Pellentesque viverra tincidunt ipsum, id viverra nibh aliquet at. In condimentum vulputate eros, in lacinia ante volutpat vitae.",
            purposeParagraph: "Duis quis tortor risus. Cras pellentesque urna sit amet blandit varius. Morbi iaculis diam massa, vitae commodo nunc semper quis. ",
            tuitionFee: "XX XXX"
        })
    },
    {
        icon: ['fas', 'feather-pointed'],
        title: "ADVANCE WRITING",
        long: true,
        subtitle: "Upgrade writing skill for work",
        value: 200,
        infoContent: renderLevelContent({
            introParagraph: "Proin ex leo, accumsan eget fermentum mollis, dictum eu tortor. Maecenas vulputate neque vitae aliquam mattis. Ut pretium enim sed tristique luctus. Sed feugiat odio nec quam molestie blandit. Donec et dictum felis, feugiat tincidunt enim. Aenean posuere pulvinar turpis ac bibendum. Nullam pretium tellus porta sapien luctus auctor. Praesent dignissim dictum eros, molestie posuere velit pellentesque sed. Pellentesque viverra tincidunt ipsum, id viverra nibh aliquet at. In condimentum vulputate eros, in lacinia ante volutpat vitae.",
            purposeParagraph: "Duis quis tortor risus. Cras pellentesque urna sit amet blandit varius. Morbi iaculis diam massa, vitae commodo nunc semper quis. ",
            tuitionFee: "XX XXX"
        })
    },
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

const EngForAdults = props => {
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

            <AppoinmentLayout> </AppoinmentLayout>

            <Footer></Footer>
        </div>
    )
}

export default EngForAdults;