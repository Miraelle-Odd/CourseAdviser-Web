import React from 'react'
import './Footer.css'
import { Fragment } from 'react/cjs/react.production.min';
import logo from "../../assets/icons/app-logo.png"
import { Link } from 'react-router-dom';

export default function Footer(props) {
    return (
        <Fragment>
            <div className="footer-content">
                <div className="footer-content-row">
                    <div className="footer-row-1">
                        <div className="footer-logo-content">
                            <img className="footer-logo" src={logo}></img>
                            <p className="footer-1-name">English Center</p>
                        </div>
                        <Link to="/temp" className='footer-link'><p className="footer-1-title">CENTER NAME</p></Link>
                        <p className="footer-intro-slogan">Slogon slogan slogan</p>
                        <p className="footer-intro-text">XXX luôn được biết đến là
                            tổ chức giáo dục uy tín đem lại sự cải thiện rõ rệt
                            tronng kỹ năng học thuật và điểm số từ các bài thi quốc tế
                            của học viên</p>
                    </div>
                    <div className="footer-row-2">
                        <p className='footer-title'>CÁC KHÓA HỌC</p>
                        <Link to="/temp" className='footer-link'><p className='footer-detail'>Luyện thi IELTS</p></Link>
                        <Link to="/temp" className='footer-link'><p className='footer-detail'>Luyện thi TOEIC</p></Link>
                        <Link to="/temp" className='footer-link'><p className='footer-detail'>Tiếng Anh cho {'\n'} người đi làm</p></Link>
                        <Link to="/temp" className='footer-link'><p className='footer-detail'>Tiếng Anh cho bé</p></Link>
                    </div>
                    <div className="footer-row-3">
                        <p className='footer-title'>TÌM HIỂU THÊM</p>
                        <Link to="/temp" className='footer-link'><p className='footer-detail'>Về chúng tôi</p></Link>
                        <Link to="/temp" className='footer-link'><p className='footer-detail'>Các bài viết hay</p></Link>
                        <Link to="/temp" className='footer-link'><p className='footer-detail'>Đăng ký thi thử</p></Link>
                        <Link to="/temp" className='footer-link'><p className='footer-detail'>Chính sách bảo mật</p></Link>
                        <Link to="/temp" className='footer-link'><p className='footer-detail'>Chính sách thanh toán</p></Link>
                        <Link to="/temp" className='footer-link'><p className='footer-detail'>Điều khoản và quy định chung</p></Link>

                    </div>
                    <div className="footer-row-4">
                        <p className='footer-title'>LIÊN HỆ</p>
                        <p className='footer-detail'>CN1: XX Đường Đường Đường, phường A, quận BB, TP. HHH</p>
                        <p className='footer-detail'>CN2: XX Đường Đường Đường, phường A, quận BB, TP. HHH</p>
                        <p className='footer-detail'>Hotline: (+82) XXX XXX XXX</p>
                        <p className='footer-detail'>Email: email@gmail.com</p>
                        <p className='footer-detail'>Website: XXXX.com.vn</p>
                    </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-copyright">© Copyright 2022 Pisces - Course Adviser - Web Version. All rights reserved.</div>

            </div>
        </Fragment>
    )
}