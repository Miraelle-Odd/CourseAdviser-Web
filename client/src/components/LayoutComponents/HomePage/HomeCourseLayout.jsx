import React from 'react'
import './HomeCourseLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import ParallelogramBtn from '../../ButtonComponents/HomePage/ParallelogramBtn';
import ielts_img from '../../../assets/icons/course_ielts.png'
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
                            img={ielts_img}
                            name="Luyện thi IELTS"
                            des="test test test. Course luyen thi IELTS, test hover, test length text. Khoong biet vieets cai vao day het tron, lam sao de no dai ra day nhi, da da da da da daayyy gau gau bruh bruh meow">
                        </ParallelogramBtn>
                        <ParallelogramBtn
                            img={ielts_img}
                            name="Luyện thi IELTS"
                            des="test test test. Course luyen thi IELTS, test hover, test length text. Khoong biet vieets cai vao day het tron, lam sao de no dai ra day nhi, da da da da da daayyy gau gau bruh bruh meow">
                        </ParallelogramBtn>
                        <ParallelogramBtn
                            img={ielts_img}
                            name="Luyện thi IELTS"
                            des="test test test. Course luyen thi IELTS, test hover, test length text. Khoong biet vieets cai vao day het tron, lam sao de no dai ra day nhi, da da da da da daayyy gau gau bruh bruh meow">
                        </ParallelogramBtn>
                        <ParallelogramBtn
                            img={ielts_img}
                            name="Luyện thi IELTS"
                            des="test test test. Course luyen thi IELTS, test hover, test length text. Khoong biet vieets cai vao day het tron, lam sao de no dai ra day nhi, da da da da da daayyy gau gau bruh bruh meow">
                        </ParallelogramBtn>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}