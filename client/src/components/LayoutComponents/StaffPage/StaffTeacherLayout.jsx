import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './StaffTeacherLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import StaffCardLayout from './StaffCardLayout';
import { Carousel } from 'react-responsive-carousel';

export default function StaffTeacherLayout(props) {
    var teacherGroups = []
    for (var i = 0; i < props.listItem.length; i = i + 4) {
        teacherGroups.push(props.listItem.slice(i, i + 4))
    }
    console.log(teacherGroups)
    return (
        <Fragment>
            <div className="staff-teacher-content">
                <div className='staff-teacher-header staff-teacher-center'>
                    <p className='staff-teacher-title staff-teacher-center'>{props.title}</p>
                </div>
                <div className={'staff-teacher-border staff-teacher-center' + (props.slider? " div-in-slider" : "")}>
                    {
                        props.slider ?
                            <Carousel
                                showArrows={false}
                                showThumbs={false}
                                showStatus={false}
                                autoFocus={true}
                                autoPlay={true}
                                infiniteLoop={true}
                                interval={2000}
                                transitionTime={800}
                            >
                                {
                                    teacherGroups.map((item, index) => {
                                        return (
                                            <StaffCardLayout
                                                key={index}
                                                listItem={item}>
                                            </StaffCardLayout>
                                        )
                                    })}
                            </Carousel>
                            :
                            <StaffCardLayout
                                listItem={props.listItem}>
                            </StaffCardLayout>
                    }

                </div>
            </div>
        </Fragment>
    )
}