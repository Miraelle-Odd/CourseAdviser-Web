import React from 'react'
import './StaffTeacherLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import paimon from '../../../assets/icons/staff-img.png'
import StaffCard from '../../CardComponents/StaffPage/StaffCard';

export default function StaffTeacherLayout() {
    return (
        <Fragment>
            <div className="staff-teacher-content">
                <div className='staff-teacher-header staff-teacher-center'>
                    <p className='staff-teacher-title staff-teacher-center'>Đội ngũ giảng dạy uyên bác</p>
                </div>
                <div className='staff-teacher-border staff-teacher-center'>
                    <div className='staff-teacher-card'>
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
                    <div className='staff-teacher-indi'></div>
                </div>
            </div>
        </Fragment>
    )
}