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

const levelTypes = [
    {
        icon: ['fas', 'baby'],
        title: "JUMPSTART",
        subtitle: "Kids from 3 - 6 years old",
    },
    {
        icon: ['fas', 'child'],
        title: "JUNIOR",
        subtitle: "Kids from 6 - 11 years old",
    },
    {
        icon: ['fas', 'child-reaching'],
        title: "TEEN",
        subtitle: "Kids from 11 - 16 years old",
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