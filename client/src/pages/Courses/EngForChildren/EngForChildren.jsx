import Footer from "../../../components/Footer/Footer";
import AppoinmentLayout from "../../../components/LayoutComponents/ContactPage/AppoinmentLayout";
import CourseInfoOptions from "../../../components/SwitchComponents/CoursePage/CourseInfoOptions";
import './EngForChildren.css'
import BeginingImage from "../../../assets/icons/kid-begining-img.png"
import OpenBenefit from "../../../assets/icons/kid-benefit-open.png"
import GameBenefit from "../../../assets/icons/kid-benefit-game.png"
import NativeBenefit from "../../../assets/icons/kid-benefit-native.png"
import ContestBenefit from "../../../assets/icons/kid-benefit-contest.png"
import CakeCard from "../../../components/CardComponents/CoursePage/CakeCard";
import { useEffect } from "react";

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
                <span className="title">
                    Độ tuổi tham gia :
                    <p className="paragraph no-margin">
                        {props.age}
                    </p>
                </span>

            </div>
            <div className="info-section section-more-margin">
                <span className="title">Thời lượng mỗi khóa học :</span>
                <span className="paragraph">Mỗi khóa gồm 96 buổi học, trong 12 tháng</span>
            </div>
            <div className="info-section columns">
                <div className="column">
                    <div className="info-section">
                        <span className="title">Thời lượng mỗi lớp học :</span>
                        <span className="parameter">1 giờ/buổi</span>
                    </div>
                </div>
                <div className="column">
                    <div className="info-section">
                        <span className="title">Học phí toàn khóa :</span>
                        <span className="parameter">{props.tuitionFee} VNĐ</span>
                    </div>
                </div>

            </div>

        </div>

    )
}

const levelTypes = [
    {
        icon: ['fas', 'baby'],
        title: "JUMPSTART",
        subtitle: "Kids from 3 - 6 years old",
        infoContent: renderLevelContent({
            introParagraph: "Proin ex leo, accumsan eget fermentum mollis, dictum eu tortor. Maecenas vulputate neque vitae aliquam mattis. Ut pretium enim sed tristique luctus. Sed feugiat odio nec quam molestie blandit. Donec et dictum felis, feugiat tincidunt enim. Aenean posuere pulvinar turpis ac bibendum. Nullam pretium tellus porta sapien luctus auctor. Praesent dignissim dictum eros, molestie posuere velit pellentesque sed. Pellentesque viverra tincidunt ipsum, id viverra nibh aliquet at. In condimentum vulputate eros, in lacinia ante volutpat vitae.",
            age: "Thích hợp cho các bé từ 3 đến 6 tuổi",
            tuitionFee: "XX XXX XXX"
        })
    },
    {
        icon: ['fas', 'child'],
        title: "JUNIOR",
        subtitle: "Kids from 6 - 11 years old",
        infoContent: renderLevelContent({
            introParagraph: "Proin ex leo, accumsan eget fermentum mollis, dictum eu tortor. Maecenas vulputate neque vitae aliquam mattis. Ut pretium enim sed tristique luctus. Sed feugiat odio nec quam molestie blandit. Donec et dictum felis, feugiat tincidunt enim. Aenean posuere pulvinar turpis ac bibendum. Nullam pretium tellus porta sapien luctus auctor. Praesent dignissim dictum eros, molestie posuere velit pellentesque sed. Pellentesque viverra tincidunt ipsum, id viverra nibh aliquet at. In condimentum vulputate eros, in lacinia ante volutpat vitae.",
            age: "Thích hợp cho các bé từ 6 đến 11 tuổi",
            tuitionFee: "XX XXX XXX"
        })
    },
    {
        icon: ['fas', 'child-reaching'],
        title: "TEEN",
        subtitle: "Kids from 11 - 16 years old",
        infoContent: renderLevelContent({
            introParagraph: "Proin ex leo, accumsan eget fermentum mollis, dictum eu tortor. Maecenas vulputate neque vitae aliquam mattis. Ut pretium enim sed tristique luctus. Sed feugiat odio nec quam molestie blandit. Donec et dictum felis, feugiat tincidunt enim. Aenean posuere pulvinar turpis ac bibendum. Nullam pretium tellus porta sapien luctus auctor. Praesent dignissim dictum eros, molestie posuere velit pellentesque sed. Pellentesque viverra tincidunt ipsum, id viverra nibh aliquet at. In condimentum vulputate eros, in lacinia ante volutpat vitae.",
            age: "Thích hợp cho các bé từ 11 đến 16 tuổi",
            tuitionFee: "XX XXX XXX"
        })
    }
]

const benefitList = [
    {
        reversed: true,
        img: OpenBenefit,
        subtitle: "Nuôi dưỡng tài năng",
        title: "Lớp học thân thiện",
        content: "Môi trường học cởi mở cho phép các bé tự do sáng tạo, thể hiện bản thân, học hỏi không chỉ thầy cô mà cả chúng bạn cùng lứa",
    },
    {
        img: GameBenefit,
        subtitle: "Học mà vui, vui mà học",
        title: "Trò chơi sinh động",
        content: "Các tiết học vui nhộn kết hợp với các trò chơi tạo sự liên tưởng tăng khả năng tiếp thu và ghi nhớ của bé"
    },
    {
        reversed: true,
        img: NativeBenefit,
        subtitle: "Trăm nghe không bằng một thấy",
        title: "Gặp gỡ với người bản xứ",
        content: "Đội ngũ giảng dạy bao gồm giáo viên Việt Nam và người nước ngoài, kết hợp nhuần nhuyễn lý thuyết và trải nghiệm thực tế"
    },
    {
        img: ContestBenefit,
        subtitle: "Tự tin tỏa sáng",
        title: "Sự kiện, ngoại khóa",
        content: "Trung tâm tài trợ, tổ chức các sự kiện thử tài thú vị và độc đáo, cùng với những phần quà giá trị tạo động lực mà môi trường để các bé thể hiện bản lĩnh và khả năng"
    },
]

const EngForChildren = props => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="course-page-container kid">
            <div className="kid-introduction"></div>
            <div className="beginning-layout">
                <div className="begining-desciption">
                    <span className="title">
                        Khởi đầu nói tiếng Anh sớm cho con
                    </span>
                    <p className="paragraph">
                        Với XXX Center, con bạn sẽ học tiếng Anh giống như cách nói của các gia sư thân thiện với trẻ nhỏ và giàu kinh nghiệm của chúng tôi. Trong các tiết học giao lưu ngoại khóa cùng giáo viên nước, con bạn sẽ có thời gian nói tối đa và cơ hội tối đa để phát triển khả năng giao tiếp trôi chảy.
                    </p>
                </div>
                <img src={BeginingImage}></img>
            </div>
            <div className="benefits-layout">
                {
                    benefitList.map((item, index) => {
                        return (
                            <div className={"benefit-container" + (index % 2 == 0 ? " right" : "")}>
                                <CakeCard
                                    img={item.img}
                                    subtitle={item.subtitle}
                                    title={item.title}
                                    content={item.content}
                                    reversed={item.reversed}
                                ></CakeCard>
                            </div>
                        )
                    })
                }

            </div>
            <div className="course-info-layout">
                <CourseInfoOptions
                    levelTypes={levelTypes}
                ></CourseInfoOptions>
            </div>
            <AppoinmentLayout> </AppoinmentLayout>

            <Footer></Footer>
        </div>
    )
}

export default EngForChildren;