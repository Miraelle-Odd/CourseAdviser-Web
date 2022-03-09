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
                    title="XX+ Teachers"
                    content="VietNamese and Native">
                </ArchivementCard_Rec>
                <ArchivementCard_Rec
                    icon={['fas', 'graduation-cap']}
                    title="XX+ Students"
                    content="Short Description">
                </ArchivementCard_Rec>
                <ArchivementCard_Rec
                    icon={['fas', 'piggy-bank']}
                    title="Scholarship"
                    content="Over 3000000 VND">
                </ArchivementCard_Rec>
            </div>
        </Fragment>
    )
}