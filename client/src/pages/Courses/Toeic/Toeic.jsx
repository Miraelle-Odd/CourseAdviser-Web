import { Fragment } from "react/cjs/react.production.min";
import Footer from "../../../components/Footer/Footer";
import AppoinmentLayout from "../../../components/LayoutComponents/ContactPage/AppoinmentLayout";
import CourseInfoOptions from "../../../components/SwitchComponents/CoursePage/CourseInfoOptions";
import TuitionCalculator from "../../../components/TrayComponents/TuitionCalculator";
import './Toeic.css'

const levelTypes = [
    {
        icon: ['fas', 'seedling'],
        title: "PREPARE",
        subtitle: "Learning basic English",
        value: 100
    },
    {
        icon: ['fab', 'pagelines'],
        title: "INTERMEDIATE",
        subtitle: "Learning basic English",
        value: 200
    },
    {
        icon: ['fas', 'tree'],
        title: "ADVANCE",
        subtitle: "Learning basic English",
        value: 300
    }
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

const Toeic = props => {
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

            <AppoinmentLayout> </AppoinmentLayout>

            <Footer></Footer>
        </div>
    )
}

export default Toeic;