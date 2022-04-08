import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../../components/Footer/Footer";
import AppoinmentLayout from "../../../components/LayoutComponents/ContactPage/AppoinmentLayout";
import StaffTeacherLayout from "../../../components/LayoutComponents/StaffPage/StaffTeacherLayout";
import CourseInfoOptions from "../../../components/SwitchComponents/CoursePage/CourseInfoOptions";
import TuitionCheckbox from "../../../components/SwitchComponents/CoursePage/TuitionCheckbox";
import TuitionCalculator from "../../../components/TrayComponents/TuitionCalculator";
import './Ielts.css'

const renderPreContent = () => {
    return (
        <div>AAAA</div>
    )
}
const renderInterContent = () => {
    return (
        <div>BBBB</div>
    )
}
const renderAdvContent = () => {
    return (
        <div>CCC</div>
    )
}

const renderSpeedyContent = () => {
    return (
        <div>Speedy</div>
    )
}

const render1v1Content = () => {
    return (
        <div>1v1</div>
    )
}

const levelTypes = [
    {        
        icon: ['fas', 'seedling'],
        title: "PREPARE",
        subtitle: "Learning basic English",
        value: 100,
        infoContent: renderPreContent
    },
    {        
        icon: ['fab', 'pagelines'],
        title: "INTERMEDIATE",
        subtitle: "Learning basic English",
        value: 200,
        infoContent: renderInterContent
    },
    {   
        icon: ['fas', 'tree'],
        title: "ADVANCE",
        subtitle: "Learning basic English",
        value: 300,
        infoContent: renderAdvContent
    }
]

const bonusTypes = [
    {
        icon: ['fas', 'person-running'],
        title: "SPEEDY",
        subtitle: "Efficient and shortened learning",
        infoContent: renderSpeedyContent
    },
    {
        icon: ['fas', 'people-arrows-left-right'],
        title: "1 vs 1",
        subtitle: "Lecturer attention focus",
        infoContent: render1v1Content
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
            const result = await axios.get("http://localhost:8080/Staffs/course/Speaking/Top4")
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
                title="Giao vien"
                listItem={listOfTeachers}
            ></StaffTeacherLayout>
            <AppoinmentLayout> </AppoinmentLayout>

            <Footer></Footer>
        </div>
    )
}

export default Ielts;