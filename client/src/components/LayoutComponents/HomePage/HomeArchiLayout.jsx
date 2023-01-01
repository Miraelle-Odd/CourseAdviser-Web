import React from 'react'
import './HomeArchiLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import ArchivementCard_Rec from '../../CardComponents/HomePage/ArchivementCard_Rec';

export default function HomeArchiLayout(props) {
    return (
        <Fragment>
            <div className="home-archi-layout-content">
                <ArchivementCard_Rec
                    icon={['fas', 'trophy']}
                    title="90+ Giáo viên"
                    content="Người Việt và bản xứ">
                </ArchivementCard_Rec>
                <ArchivementCard_Rec
                    icon={['fas', 'graduation-cap']}
                    title="84300+ Học viên"
                    content="Trên toàn quốc">
                </ArchivementCard_Rec>
                <ArchivementCard_Rec
                    icon={['fas', 'piggy-bank']}
                    title="Học bổng"
                    content="Trên 300.000.000 VND">
                </ArchivementCard_Rec>
            </div>
        </Fragment>
    )
}