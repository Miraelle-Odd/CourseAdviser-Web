import React, { useState } from 'react'
import './AppoinmentLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css';
import AppoinmentCard from '../../CardComponents/ContactPage/AppoinmentCard';
import moment from 'moment';
import axios from 'axios'
import AlertSuccess from '../../PopupComponents/AlertSuccess/AlertSuccess';
import AlertFail from '../../PopupComponents/AlertFail/AlertFail';
import validator from 'validator'


export default function AppoinmentLayout() {
    const [inputName, setInputName] = useState();
    const [inputEmail, setInputEmail] = useState();
    const [inputPhone, setInputPhone] = useState();
    const [inputService, setInputService] = useState();
    const [inputCourse, setInputCourse] = useState();
    const [inputPosition, setInputPosition] = useState();
    const [inputDate, setInputDate] = useState();
    const [inputTime, setInputTime] = useState();
    const [message, setMessage] = useState()
    const [failAlert, setFailAlert] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)

    const confirm = () => {
        if (!inputName ||
            !inputEmail ||
            !inputPhone ||
            !inputService ||
            !inputCourse ||
            !inputPosition ||
            !inputDate ||
            !inputTime) {
            setMessage("All fields required")
            setFailAlert(true)
            return false
        }
        else {
            if (!validator.isEmail(inputEmail)) {
                setMessage("Invalid Email")
                setFailAlert(true)
                return false
            }

        }
        const params = {
            appointPurpose: inputService,
            concern: inputCourse,
            appointTime: moment(inputDate).format('yyyy/MM/DD') + " " + moment(inputTime).format('hh:mm:ss'),
            appointAddress: inputPosition,
            senderName: inputName,
            senderEmail: inputEmail,
            senderPhone: inputPhone,
        }
        console.log(params)
        const result = axios.post("http://localhost:8080/appointments/create", params)
            .then(res => {
                var mailResult
                if (res.data.errors) {
                    setMessage("Erros happened. Retry later")
                    setFailAlert(true)
                }
                else {
                    mailResult = axios.post("http://localhost:8080/mail/appointment",
                        {

                            reveiverEmail: params.senderEmail,
                            reveiverName: params.senderName,
                            address: params.appointAddress,
                            time: moment(params.appointTime).format('DD/MM/yyyy hh:mm:ss'),
                            purpose: params.appointPurpose

                        }
                    )
                        .then(ress => {
                            setMessage(ress.data)
                            setSuccessAlert(true)
                        })
                }
            })
    }

    return (
        <Fragment>
            <div className="appoinment-layout-content">
                <div className="appoinment-layout-detail">
                    <div className="appoinment-layout-form-content">
                        <p className='appoinment-form-title'>Nhận tư vấn và Kiểm tra trình độ miễn phí</p>
                        <p className='appoinment-form-context'>Chúng tôi cam kết sử dụng thông tin vào mục đích tư vấn lộ trình học và không kinh doanh dưới mọi hình thức</p>
                        <input
                            className="appoinment-input"
                            placeholder="Họ và tên"
                            onChange={(e) => setInputName(e.target.value)} />
                        <div className='appoinment-form-inline'>
                            <input
                                type="email"
                                className="appoinment-input appoinment-input-inline"
                                onChange={(e) => setInputEmail(e.target.value)}
                                placeholder="Email" />
                            <input
                                className="appoinment-input appoinment-input-inline"
                                onChange={(e) => setInputPhone(e.target.value)}
                                placeholder="Số điện thoại" />
                        </div>
                        <select
                            className="appoinment-input appoinment-select"
                            onChange={(e) => setInputService(e.target.value)}
                            defaultValue=""
                        >
                            <option value="" disabled>Dịch vụ bạn cần</option>
                            <option value="consultation">
                                Tư vấn
                            </option>
                            <option value="mock test">
                                Thi thử
                            </option>
                        </select>
                        <select
                            className="appoinment-input appoinment-select"
                            onChange={(e) => setInputCourse(e.target.value)}
                            defaultValue=""
                        >
                            <option value="" disabled>Khóa học bạn quan tâm</option>
                            <option value="IELTS">
                                IELTS
                            </option>
                            <option value="TOEIC">
                                TOEIC
                            </option>
                            <option value="Global English">
                                Tiếng Anh giao tiếp
                            </option>
                            <option value="Kid English">
                                Tiếng Anh cho bé
                            </option>
                        </select>
                        <select
                            className="appoinment-input appoinment-select"
                            onChange={(e) => setInputPosition(e.target.value)}
                            defaultValue=""
                        >
                            <option value="" disabled>Chi nhánh gần bạn</option>
                            <option value="Branch 1">
                                Chi nhánh 1
                            </option>
                            <option value="Branch 2">
                                Chi nhánh 2
                            </option>
                        </select>
                        <div className='appoinment-form-inline'>
                            <DatePicker
                                placeholderText="Ngày hẹn"
                                dateFormat="dd/MM/yyyy"
                                onChange={(date) => setInputDate(date)}
                                selected={inputDate}
                                className="date-picker"
                            >
                            </DatePicker>
                            <TimePicker
                                className="time-picker"
                                placeholder="Giờ hẹn"
                                onChange={
                                    // ()=>setInputTime(document.getElementsByClassName("rc-time-picker-input")[0].value)
                                    (e) => setInputTime(e._d)
                                }
                            >
                            </TimePicker>

                        </div>
                        <div className='appoinment-from-register'>
                            <button className='appoinment-button-register' onClick={confirm}>Đăng ký</button>
                        </div>
                    </div>
                    <div className="appoinment-layout-info">
                        <AppoinmentCard
                            icon={['fas', 'map-location-dot']}
                            content1="CN1: XX Đường Đường Đường, phường A, quận BB, TP. HHH"
                            content2="CN2: XX Đường Đường Đường, phường A, quận BB, TP. HHH">
                        </AppoinmentCard>
                        <AppoinmentCard
                            icon={['fas', 'phone']}
                            content1="(+84)XXX XXX XXX">
                        </AppoinmentCard>
                        <AppoinmentCard
                            icon={['fas', 'envelope-open-text']}
                            content1="email@gmail.com">
                        </AppoinmentCard>
                    </div>
                </div>
            </div>
            <AlertSuccess
                message={message}
                isOpen={successAlert}
                onClose={() => {
                    setSuccessAlert(false)
                    setMessage("")
                }}
            ></AlertSuccess>
            <AlertFail
                message={message}
                isOpen={failAlert}
                onClose={() => {
                    setFailAlert(false)
                    setMessage("")
                }}
            ></AlertFail>
        </Fragment>
    )
}