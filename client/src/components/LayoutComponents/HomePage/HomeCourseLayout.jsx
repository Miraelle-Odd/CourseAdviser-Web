import React from 'react'
import './HomeCourseLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import ParallelogramBtn from '../../ButtonComponents/HomePage/ParallelogramBtn';
import ielts_img from '../../../assets/icons/course-ielts.png'
import toeic_img from '../../../assets/icons/course-toeic.png'
import aldut_img from '../../../assets/icons/course-aldut.png'
import kid_img from '../../../assets/icons/course-kid.png'
import book from '../../../assets/icons/home-course-book.png'
import tea from '../../../assets/icons/home-course-tea.png'
import glass from '../../../assets/icons/home-course-glass.png'
import fea from '../../../assets/icons/home-course-fea.png'
import cand from '../../../assets/icons/home-course-cand.png'

export default function HomeCourseLayout(props) {
    return (
        <Fragment>
            <div className="home-course-layout-content">
                <div className='home-course-layout-background'>
                    <div className='home-course-layout-border'>
                        <div className='home-course-layout-title-content'>
                            <p className='home-course-layout-title'>FEATURED COURSES</p>
                        </div>
                    </div>

                    <div className='home-course-layout-line'></div>
                    <div className='home-course-layout-shape-1'>
                        <div className='home-course-layout-shape-2'></div>
                    </div>
                    <img className='home-course-layout-icon home-course-layout-fea' src={fea}></img>
                    <img className='home-course-layout-icon home-course-layout-book' src={book}></img>
                    <img className='home-course-layout-icon home-course-layout-glass' src={glass}></img>
                    <img className='home-course-layout-icon home-course-layout-cand' src={cand}></img>
                    <img className='home-course-layout-icon home-course-layout-tea' src={tea}></img>
 
                    <div className='home-course-layout-detail'>
                        <ParallelogramBtn
                            link={'/courses/IELTS'}   
                            img={ielts_img}
                            name="Luyện thi IELTS"
                            des="Nội dung chính của khóa học xoay quanh chiến thuật và kỹ năng làm bài để giúp người học tiếp cận một cách hiệu quả nhất đề thi IELTS. Xây dựng kiến thức ngôn ngữ học thuật nền tảng, từ vựng và ngữ pháp, tập trung luyện đề thi">
                        </ParallelogramBtn>
                        <ParallelogramBtn
                            link={'/courses/TOEIC'}
                            img={toeic_img}
                            name="Luyện thi TOEIC"
                            des="Khóa học TOEIC tại trung tâm được thiết kế dành cho nhiều đối tượng học viên với mục đích bất cứ ai, dù người mới bắt đầu chập chững học tiếng Anh cho đến những người đi làm cần nâng cao TOEIC để phát triển sự nghiệp trong thời gian ngắn nhất đều có thể theo học.">
                        </ParallelogramBtn>
                        <ParallelogramBtn
                            link={'/courses/english-for-speaking'}
                            img={aldut_img}
                            name="Tiếng anh giao tiếp"
                            des="Khóa học tiếng Anh giao tiếp cho người đi làm được thiết kế nhằm giúp học viên nâng cao, rèn luyện khả năng giao tiếp tiếng Anh trong môi trường làm việc, mở rộng thêm cơ hội thăng tiến trong sự nghiệp.">
                        </ParallelogramBtn>
                        <ParallelogramBtn
                            link={'/courses/english-for-kid'}
                            img={kid_img}
                            name="Tiếng anh cho bé"
                            des="Đây là khóa học giúp nâng cao trình độ cho các em nhỏ từ 3-11 tuổi với cách học thú vị, kết hợp với sự nhiệt tình và kinh nghiệm của giáo viên sẽ giúp các em nhỏ có được niềm vui và đam mê khi học tiếng Anh.">
                        </ParallelogramBtn>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}