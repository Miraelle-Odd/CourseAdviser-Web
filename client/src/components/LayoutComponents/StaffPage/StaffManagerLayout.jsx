import React from 'react'
import './StaffManagerLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import paimon from '../../../assets/icons/staff-img.png'
import StaffCard from '../../CardComponents/StaffPage/StaffCard';

export default function StaffManagerLayout() {
    return (
        <Fragment>
            <div className="staff-manager-content">
                <div className='staff-manager-bg-1'>
                    <div className='staff-manager-header staff-manager-center'>
                        <p className='staff-manager-title staff-manager-center'>Đội ngũ quản lý tâm huyết</p>
                    </div>
                </div>
                <div className='staff-manager-card'>
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
                <div className='staff-manager-bg-2'> </div>
            </div>
        </Fragment>
    )
}