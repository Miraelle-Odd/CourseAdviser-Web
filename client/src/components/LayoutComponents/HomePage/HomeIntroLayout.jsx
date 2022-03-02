import React from 'react'
import './HomeIntroLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import HomeArchiLayout from './HomeArchiLayout';


export default function HomeIntroLayout(props) {
    return (
        <Fragment>
            <div className="home-intro-layout-content">
                <div className="home-intro-layout-background"></div>
                <div className="home-intro-layout-archi">
                    <HomeArchiLayout> </HomeArchiLayout>
                </div>
            </div>
        </Fragment>
    )
}