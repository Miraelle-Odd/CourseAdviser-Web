import Footer from "../../../components/Footer/Footer";
import AppoinmentLayout from "../../../components/LayoutComponents/ContactPage/AppoinmentLayout";
import CourseInfoOptions from "../../../components/SwitchComponents/CoursePage/CourseInfoOptions";
import './EngForChildren.css'

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
const EngForChildren = props => {
    return (
        <div className="course-page-container kid">
            <div className="kid-introduction"></div>
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