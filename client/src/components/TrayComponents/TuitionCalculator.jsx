import React, { useState } from 'react'
import './TuitionCalculator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TuitionCheckbox from '../SwitchComponents/CoursePage/TuitionCheckbox'

const TuitionCalculator = (props) => {
    const [total, setTotal] = useState(0)
    const [bonusCount, setBonusCount] = useState(1.0)

    const onCheck = (e) => {
        setTotal(total + parseInt(e.currentTarget.getAttribute("value")) * bonusCount)
    }

    const onUncheck = (e) => {
        setTotal(total - parseInt(e.currentTarget.getAttribute("value")) * bonusCount)
    }

    const onBonusCheck = (e) => {
        setBonusCount(bonusCount * parseFloat(e.currentTarget.getAttribute("value")))
        setTotal(total * parseFloat(e.currentTarget.getAttribute("value")))
    }

    const onBonusUncheck = (e) => {
        setBonusCount(bonusCount / parseFloat(e.currentTarget.getAttribute("value")))
        setTotal(total / parseFloat(e.currentTarget.getAttribute("value")))
    }

    return (
        <div className={'tuition-calculator' + (props.dark ? " dark" : "")}>
            <div className='calculator-row'>
                <span className={'row-title' + (props.dark ? " dark-row-title" : "")}>Cấp độ khóa học bạn muốn tham gia</span>
                <div className='row-content'>
                    {
                        props.levelTypes ? props.levelTypes.map((item, index) => {
                            return (
                                <div className='cell-content'>
                                    <TuitionCheckbox
                                        icon={item.icon}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        long={item.long}
                                        longTitle={item.longTitle}
                                        value={item.value}
                                        onCheck={onCheck}
                                        onUncheck={onUncheck}
                                    ></TuitionCheckbox>
                                </div>
                            )
                        }) : ""
                    }
                </div>
            </div>
            <div className='calculator-row'>
                <span className={'row-title' + (props.dark ? " dark-row-title" : "")}>Bổ sung hỗ trợ đặt biệt</span>
                <div className='row-content row-content-2'>
                    {
                        props.bonusTypes ? props.bonusTypes.map((item, index) => {
                            return (
                                <div className='cell-content'>
                                    <TuitionCheckbox
                                        icon={item.icon}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        long={item.long}
                                        longTitle={item.longTitle}
                                        value={item.value}
                                        onCheck={onBonusCheck}
                                        onUncheck={onBonusUncheck}
                                    ></TuitionCheckbox>
                                </div>
                            )
                        }) : ""
                    }
                </div>
            </div>
            <div className='calculator-row'>
                <span className={'row-title' + (props.dark ? " dark-row-title" : "")}>Tính toán học phí (tạm tính)</span>
                <span className={'result-display' + (props.whiteResult ? " white-result" : "")}>{total} VNĐ</span>
            </div>

        </div>
    )
}

export default TuitionCalculator