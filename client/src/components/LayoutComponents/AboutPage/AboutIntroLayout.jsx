import React from 'react'
import './AboutIntroLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import intro from '../../../assets/icons/about-intro.png'

export default function AboutIntroLayout() {
    return (
        <Fragment>
            <div className="about-intro-content">
                <div className='about-intro-line'></div>
                <p className='about-intro-title'>Giới thiệu</p>
                
                <div className='about-intro-detail'>
                    <p className='about-intro-text'> Trong thời điểm hội nhập khu vực và thế giới ngày càng mạnh mẽ hiện nay, tiếng Anh là cầu nối, giúp chúng ta đến với những công việc hấp dẫn trong các công ty đa quốc gia, các tập đoàn lớn trên thế giới… Trung tâm Anh ngữ chuyên luyện thi chứng chỉ dành cho sinh viên cũng như đào tạo anh văn giao tiếp cho người đi làm, cam kết chứng chỉ đầu ra cũng như khả năng giao tiếp lưu loát với người bản xứ sau khi học</p>
                </div>
                <img className='about-intro-img' src={intro}></img>
            </div>
        </Fragment>
    )
}