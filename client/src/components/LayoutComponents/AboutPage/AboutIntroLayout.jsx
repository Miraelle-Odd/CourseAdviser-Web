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
                    <p className='about-intro-text'> Content bla bla</p>
                </div>
                <img className='about-intro-img' src={intro}></img>
            </div>
        </Fragment>
    )
}