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
import Modal from 'react-modal';
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
                setMessage("Địa chỉ Email không hợp lệ.")
                setFailAlert(true)
                return false
            }
            if (!validator.isNumeric(inputPhone)) {
                setMessage("Số điện thoại không hợp lệ.")
                setFailAlert(true)
                return false
            }
            if (!validator.isAfter(inputDate.toString(), Date().toString())) {
                console.log("bnmvnbvnvbm", inputDate.toString(), Date(), validator.isAfter(inputDate.toString(), Date().toString()));
                setMessage("Ngày đăng ký không hợp lệ.")
                setFailAlert(true)
                return false
            }
        }

        const params = {
            appointPurpose: inputService,
            concern: inputCourse,
            appointTime: moment(inputDate).format('yyyy/MM/DD') + " " + moment(inputTime).format('HH:mm:ss'),
            appointAddress: inputPosition,
            senderName: inputName,
            senderEmail: inputEmail,
            senderPhone: inputPhone,
        }

        axios.post("http://localhost:8080/appointments/create", params)
            .then(res => {
                if (params.appointPurpose.includes("test"))
                    axios.get("http://localhost:8080/exam-sessions/create-session/" + params.concern).then(ress => {
                        if (res.data.errors || ress.data.errors) {
                            setMessage("Erros happened. Retry later")
                            setFailAlert(true)
                        }
                        else {
                            axios.post("http://localhost:8080/mail/appointment",
                                {
                                    receiverEmail: params.senderEmail,
                                    receiverName: params.senderName,
                                    address: params.appointAddress,
                                    time: moment(params.appointTime).format('DD/MM/yyyy HH:mm:ss'),
                                    purpose: params.appointPurpose,
                                    token: ress.data.token
                                }
                            )
                                .then(resss => {
                                    setMessage(resss.data)
                                    setSuccessAlert(true)
                                })
                        }
                    })
                else {
                    if (res.data.errors) {
                        setMessage("Erros happened. Retry later")
                        setFailAlert(true)
                    }
                    else {
                        axios.post("http://localhost:8080/mail/appointment",
                            {
                                receiverEmail: params.senderEmail,
                                receiverName: params.senderName,
                                address: params.appointAddress,
                                time: moment(params.appointTime).format('DD/MM/yyyy HH:mm:ss'),
                                purpose: params.appointPurpose
                            }
                        )
                            .then(ress => {
                                setMessage(ress.data)
                                setSuccessAlert(true)
                            })
                    }
                }


            })
    }

    const handleFormClose = () => {
        setSuccessAlert(false)
        setFailAlert(false)
        setMessage("")
    }
    return (
        <Fragment>
            <div className="appoinment-layout-content">
                <div className="appoinment-layout-detail">
                    <div className="appoinment-layout-form-content">
                        <p className='appoinment-form-title'>Nhận tư vấn và Kiểm tra trình độ miễn phí</p>
                        <p className='appoinment-form-context'>Chúng tôi cam kết sử dụng thông tin vào mục đích tư vấn lộ trình học và không kinh doanh dưới mọi hình thức</p>
                        <p className='appoinment-form-context'>Xin vui lòng đăng ký hẹn trước 1 ngày để chúng tôi có sự chuẩn bị tốt nhất</p>
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
                            <option value="online test">
                                Thi thử online và tư vấn
                            </option>
                            <option value="offline test">
                                Thi thử offline và tư vấn
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
                                    (e) => setInputTime(e._d)
                                }
                                showSecond={false}
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
            <Modal
                isOpen={successAlert}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <AlertSuccess
                    message={message}
                    onClose={() => handleFormClose()}
                ></AlertSuccess>
            </Modal>

            <Modal
                isOpen={failAlert}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <AlertFail
                    message={message}
                    onClose={() => handleFormClose()}
                ></AlertFail>
            </Modal>


        </Fragment>
    )
}