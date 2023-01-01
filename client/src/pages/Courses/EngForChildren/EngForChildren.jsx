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
        subtitle: "Các bé từ 3 - 6 tuổi",
        infoContent: renderLevelContent({
            introParagraph: "Là một trong 3 chương trình theo độ tuổi của khóa học Tiếng Anh cho bé, JUMPSTART thích hợp cho các em từ 3 đến 6 tuổi muốn tiếp xúc sớm và tạo nền tảng với Anh ngữ, cũng như phát triển kĩ năng giao tiếp và sự tự tin khi nói chuyện bằng ngoại ngữ. Các bé tham gia chương trình sẽ có cơ hội tiếp xúc với các giáo viên bản xứ thân thiện, trải nghiệm các hoạt động ngoại khóa phát triển tiếng Anh cùng các bạn cùng lứa.",
            age: "Thích hợp cho các bé từ 3 đến 6 tuổi",
            tuitionFee: "1 300 000"
        })
    },
    {
        icon: ['fas', 'child'],
        title: "JUNIOR",
        subtitle: "Các bé từ 6 - 11 tuổi",
        infoContent: renderLevelContent({
            introParagraph: "Là một trong 3 chương trình theo độ tuổi của khóa học Tiếng Anh cho bé, JUNIOR thích hợp cho các em từ 6 đến 11 tuổi muốn mài dũa khả năng tiếng Anh, cũng như phát triển kĩ năng giao tiếp và sự tự tin khi nói chuyện bằng ngoại ngữ. Các em tham gia chương trình sẽ có cơ hội tiếp xúc với các giáo viên bản xứ thân thiện, trải nghiệm các hoạt động ngoại khóa phát triển tiếng Anh cùng các bạn cùng lứa.",
            age: "Thích hợp cho các bé từ 6 đến 11 tuổi",
            tuitionFee: "1 500 000"
        })
    },
    {
        icon: ['fas', 'child-reaching'],
        title: "TEEN",
        subtitle: "Các bé từ 11 - 16 tuổi",
        infoContent: renderLevelContent({
            introParagraph: "Là một trong 3 chương trình theo độ tuổi của khóa học Tiếng Anh cho bé, TEEN thích hợp cho các em từ 11 đến 16 tuổi muốn mài dũa khả năng tiếng Anh, chuẩn bị cho các kì thi, cũng như phát triển kĩ năng giao tiếp và sự tự tin khi nói chuyện bằng ngoại ngữ. Các em tham gia chương trình sẽ có cơ hội tiếp xúc với các giáo viên bản xứ thân thiện, trải nghiệm các hoạt động ngoại khóa phát triển tiếng Anh cùng các bạn cùng lứa.",
            age: "Thích hợp cho các bé từ 11 đến 16 tuổi",
            tuitionFee: "1 700 000"
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