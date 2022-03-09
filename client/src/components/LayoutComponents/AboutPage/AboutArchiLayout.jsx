import React from 'react'
import './AboutArchiLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import { useState } from 'react';

import ArchivementCard_Rou from '../../CardComponents/AboutPage/ArchivementCard_Rou';

export default function AboutArchiLayout() {
    return (
        <Fragment>
            <div className="about-archi-layout-content">
                <p className="about-archi-layout-title">Our Archivements</p>
                <div className="about-archi-layout-row-1 about-archi-layout-center">
                    <ArchivementCard_Rou
                        icon={['fas', 'users']}
                        title="+60"
                        content="Giáo viên Việt Nam và bản xứ giàu kinh nghiệm">
                    </ArchivementCard_Rou>
                    <ArchivementCard_Rou
                        icon={['fas', 'graduation-cap']}
                        title="+60"
                        content="Học viên sử dụng thành thạo tiếng anh">
                    </ArchivementCard_Rou>
                    <ArchivementCard_Rou
                        icon={['fas', 'piggy-bank']}
                        title="+30M"
                        content="Quỹ học bổng hỗ trợ học viên xuất sắc">
                    </ArchivementCard_Rou>
                </div>
                <div className="about-archi-layout-row-2 about-archi-layout-center">
                    <ArchivementCard_Rou
                        logo='IELTS'
                        title="8.5/9.0"
                        content="Thành tích IELTS cao nhất của trung tâm">
                    </ArchivementCard_Rou>
                    <ArchivementCard_Rou
                        logo='TOEIC'
                        title="119/120"
                        content="điểm số TOEIC giao tiếp trung tâm đạt được">
                    </ArchivementCard_Rou>
                </div>
            </div>
        </Fragment>
    )
}