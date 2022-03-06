import React from 'react'
import './StaffEmployeeLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import paimon from '../../../assets/icons/staff-img.png'
import StaffCard from '../../CardComponents/StaffPage/StaffCard';

export default function StaffEmployeeLayout() {
    return (
        <Fragment>
            <div className="staff-employee-content">
                <div className='staff-employee-header staff-employee-center'>
                    <p className='staff-employee-title staff-employee-center'>Ban tư vấn nhiệt tình</p>
                </div>
                <div className='staff-employee-border staff-employee-center'>
                    <div className='staff-employee-card'>
                        <StaffCard
                            img={paimon}
                            title="EMERGENCY FOOD"
                            subtitle="- IELTS reading 9.0 -"
                            content={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !`}
                            more={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !
blahblah balh dád đá dfd fdf
blahasldgfg gfgfgg vcvcvcvcv vvv
dádasdsdsdsdadsdasdsdad đasdasdsdsd
đasadasdadasdsdas`}
                        > </StaffCard>
                        <StaffCard
                            img={paimon}
                            title="EMERGENCY FOOD"
                            subtitle="- IELTS reading 9.0 -"
                            content={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !`}
                            more={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !
blahblah balh dád đá dfd fdf
blahasldgfg gfgfgg vcvcvcvcv vvv
dádasdsdsdsdadsdasdsdad đasdasdsdsd
đasadasdadasdsdas`}
                        > </StaffCard>
                        <StaffCard
                            img={paimon}
                            title="EMERGENCY FOOD"
                            subtitle="- IELTS reading 9.0 -"
                            content={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !`}
                            more={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !
blahblah balh dád đá dfd fdf
blahasldgfg gfgfgg vcvcvcvcv vvv
dádasdsdsdsdadsdasdsdad đasdasdsdsd
đasadasdadasdsdas`}
                        > </StaffCard>
                        <StaffCard
                            img={paimon}
                            title="EMERGENCY FOOD"
                            subtitle="- IELTS reading 9.0 -"
                            content={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !`}
                            more={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !
blahblah balh dád đá dfd fdf
blahasldgfg gfgfgg vcvcvcvcv vvv
dádasdsdsdsdadsdasdsdad đasdasdsdsd
đasadasdadasdsdas`}
                        > </StaffCard>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}