import React from 'react'
import './StaffCardLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import StaffCard from '../../CardComponents/StaffPage/StaffCard';

export default function StaffCardLayout(props) {
    return (
        <Fragment>
            <div className='staff-card-layout'>
                {
                    props.listItem ? props.listItem.map((item, key) => {
                        return <StaffCard key={key}
                            img={item.staff_img}
                            title={item.staff_name}
                            subtitle={item.staff_title}
                            content={item.staff_introduction}
                            more={item.staff_archievement}>
                        </StaffCard>
                    }) : null
                }
            </div>
        </Fragment>
    )
}