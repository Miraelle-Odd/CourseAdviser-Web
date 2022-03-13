import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './AboutStaff.css'
import { Fragment } from 'react/cjs/react.production.min'
import StaffManagerLayout from '../../../components/LayoutComponents/StaffPage/StaffManagerLayout'
import StaffEmployeeLayout from '../../../components/LayoutComponents/StaffPage/StaffEmployeeLayout'
import StaffTeacherLayout from '../../../components/LayoutComponents/StaffPage/StaffTeacherLayout'
import Footer from '../../../components/Footer/Footer'
import paimon from '../../../assets/icons/staff-img.png'

export default function AboutStaff(props) {
    return (
        <Fragment>
            <StaffManagerLayout
                img={paimon}
                title="EMERGENCY FOOD Ver 1.0"
                subtitle="- IELTS reading 9.0 -"
                content={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !`}
                more={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !
blahblah balh dád đá dfd fdf
blahasldgfg gfgfgg vcvcvcvcv vvv
dádasdsdsdsdadsdasdsdad đasdasdsdsd
đasadasdadasdsdas`}>
            </StaffManagerLayout>

            <StaffEmployeeLayout
                img={paimon}
                title="PAIMON PAIMON 2"
                subtitle="- IELTS reading 9.0 -"
                content={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !`}
                more={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !
blahblah balh dád đá dfd fdf
blahasldgfg gfgfgg vcvcvcvcv vvv
dádasdsdsdsdadsdasdsdad đasdasdsdsd
đasadasdadasdsdas`}>
            </StaffEmployeeLayout>

            <StaffTeacherLayout
                img={paimon}
                title="TEST LAYOUT 3"
                subtitle="- IELTS reading 9.0 -"
                content={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !`}
                more={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !
blahblah balh dád đá dfd fdf
blahasldgfg gfgfgg vcvcvcvcv vvv
dádasdsdsdsdadsdasdsdad đasdasdsdsd
đasadasdadasdsdas`}>
            </StaffTeacherLayout>

            <Footer></Footer>
        </Fragment>
    )
}