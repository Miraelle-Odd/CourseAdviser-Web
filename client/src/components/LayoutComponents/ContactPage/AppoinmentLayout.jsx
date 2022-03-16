import React, { useState } from 'react'
import './AppoinmentLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import AppoinmentCard from '../../CardComponents/ContactPage/AppoinmentCard';


export default function AppoinmentLayout() {
    const [inputName, setInputName] = useState();
    const [inputEmail, setInputEmail] = useState();
    const [inputPhone, setInputPhone] = useState();
    const [inputService, setInputService] = useState();
    const [inputCourse, setInputCourse] = useState();
    const [inputPosition, setInputPosition] = useState();
    const [inputDate, setInputDate] = useState();
    const [inputTime, setInputTime] = useState();
    return (
        <Fragment>
            <div className="appoinment-layout-content">
                <div className="appoinment-layout-detail">
                    <div className="appoinment-layout-form-content">
                        <p className='appoinment-form-title'>Nhận tư vấn và Kiểm tra trình độ miễn phí</p>
                        <p className='appoinment-form-context'>Chúng tôi cam kết sử dụng thông tin vào mục đích tư vấn lộ trình học và không kinh doanh dưới mọi hình thức</p>
                        <input
                            className="appoinment-input"
                            value={inputName}
                            placeholder="Họ và tên" />
                        <div className='appoinment-form-inline'>
                            <input
                                className="appoinment-input appoinment-input-inline"
                                value={inputEmail}
                                placeholder="Email" />
                            <input
                                className="appoinment-input appoinment-input-inline"
                                value={inputPhone}
                                placeholder="Số điện thoại" />
                        </div>
                        <input
                            className="appoinment-input"
                            value={inputService}
                            placeholder="Dịch vụ bạn cần" />
                        <input
                            className="appoinment-input"
                            value={inputCourse}
                            placeholder="Khóa học bạn quan tâm" />
                        <input
                            className="appoinment-input"
                            value={inputPosition}
                            placeholder="Chi nhánh gần bạn" />
                       <div className='appoinment-form-inline'>
                            <input
                                className="appoinment-input appoinment-input-inline"
                                value={inputDate}
                                placeholder="Ngày hẹn" />
                            <input
                                className="appoinment-input appoinment-input-inline"
                                value={inputTime}
                                placeholder="Giờ hẹn" />
                        </div>
                        <div className='appoinment-from-register'>
                            <button className='appoinment-button-register'>Đăng ký</button>
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
        </Fragment>
    )
}