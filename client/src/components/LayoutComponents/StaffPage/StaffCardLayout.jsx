import React from 'react'
import './StaffCardLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import paimon from '../../../assets/icons/staff-img.png'
import StaffCard from '../../CardComponents/StaffPage/StaffCard';

export default function StaffCardLayout(props) {
    return (
        <Fragment>
            <div className='staff-card-layout'>
                <StaffCard
                    img={props.img}
                    title={props.title}
                    subtitle={props.subtitle}
                    content={props.content}
                    more={props.more}>
                </StaffCard>
                <StaffCard
                    img={props.img}
                    title={props.title}
                    subtitle={props.subtitle}
                    content={props.content}
                    more={props.more}>
                </StaffCard>
                <StaffCard
                    img={props.img}
                    title={props.title}
                    subtitle={props.subtitle}
                    content={props.content}
                    more={props.more}>
                </StaffCard>
                <StaffCard
                    img={props.img}
                    title={props.title}
                    subtitle={props.subtitle}
                    content={props.content}
                    more={props.more}>
                </StaffCard>
            </div>

        </Fragment>
    )
}