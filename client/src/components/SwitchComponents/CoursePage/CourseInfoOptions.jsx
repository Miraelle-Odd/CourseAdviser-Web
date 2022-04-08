import React, { useState } from "react";
import './CourseInfoOptions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CourseInfoOptions = (props) => {
    const levelTypes = props.levelTypes ? props.levelTypes : []
    const bonusTypes = props.bonusTypes ? props.bonusTypes : []

    const renderNothing = () => {
        return (
            <div>Nothing</div>
        )
    }
    const [currentContent, setCurrentContent] = useState(levelTypes[0].infoContent ? levelTypes[0].infoContent : renderNothing)

    const optClickHandler = (e) => {
        console.log(e.currentTarget.getAttribute("value"))
        if (e.currentTarget.getAttribute("belong") == "level")
            setCurrentContent(levelTypes[e.currentTarget.getAttribute("value")].infoContent)
        else
            setCurrentContent(bonusTypes[e.currentTarget.getAttribute("value")].infoContent)
    }

    const CourseInfoOption = (props) => {
        return (
            <div className="course-info-option" onClick={optClickHandler} value={props.index} belong={props.belong}>
                <span className="icon">
                    <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
                </span>
                <div className="display-text">
                    <span className={"title" + (props.longTitle ? " long-title" : "")}>
                        {props.title}
                    </span>
                    <span className="subtitle">
                        {props.subtitle}
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className={"course-info" + (props.reversed ? " reversed" : "")}>
            <div className="options">
                <span className={"switch-title" + (props.whiteTitle ? " white-title" : "")}>
                    THÔNG TIN KHÓA HỌC
                </span>
                <div className="group-opts">
                    {
                        levelTypes.map((item, index) => {
                            return (
                                <CourseInfoOption
                                    icon={item.icon}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    longTitle={item.longTitle}
                                    infoContent={item.infoContent}
                                    index={index}
                                    belong="level"
                                ></CourseInfoOption>
                            )
                        })
                    }
                </div>
                <div className="group-opts">
                    {
                        bonusTypes.map((item, index) => {
                            return (
                                <CourseInfoOption
                                    icon={item.icon}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    longTitle={item.longTitle}
                                    infoContent={item.infoContent}
                                    index={index}
                                    belong="bonus"
                                ></CourseInfoOption>
                            )
                        })
                    }
                </div>
            </div>

            <div className="info-display">
                {currentContent}
            </div>
        </div>
    )
}

export default CourseInfoOptions