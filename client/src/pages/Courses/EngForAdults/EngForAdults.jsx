import { Fragment } from "react/cjs/react.production.min";
import Footer from "../../../components/Footer/Footer";
import AppoinmentLayout from "../../../components/LayoutComponents/ContactPage/AppoinmentLayout";
import CourseInfoOptions from "../../../components/SwitchComponents/CoursePage/CourseInfoOptions";
import TuitionCalculator from "../../../components/TrayComponents/TuitionCalculator";
import './EngForAdults.css'

const levelTypes = [
    {
        icon: ['fas', 'comments-dollar'],
        title: "SPEAKING FOR COMMUNITY",
        longTitle: true,
        long: true,
        subtitle: "Improve communication skills",
        value: 100,
    },
    {
        icon: ['fas', 'feather-pointed'],
        title: "ADVANCE WRITING",
        long: true,
        subtitle: "Upgrade writing skill for work",
        value: 200
    },
]

const bonusTypes = [
    {
        icon: ['fas', 'person-running'],
        title: "SPEEDY",
        subtitle: "Efficient and shortened learning"
    },
    {
        icon: ['fas', 'people-arrows-left-right'],
        title: "1 vs 1",
        subtitle: "Lecturer attention focus"
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