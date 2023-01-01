import React from 'react'
import './Exam.css'

const ExamNoToken = props => {
    return (
        <div className='exam-no-token-page'>
            <div>Không xác nhận được token phiên thi</div>
            <div>Bạn không đủ quyền tham dự phiên thi thử</div>
            <div>Bạn có thể nhận token phiên thi bằng cách đăng kí thi thử online hoặc offline qua đường dẫn bên dưới</div>
            <a href = "http://localhost:3000/about/contact">Tạo Cuộc Hẹn</a>
        </div>
    )
}

export default ExamNoToken