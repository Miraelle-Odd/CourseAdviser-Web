import React from 'react'
import './AppoinmentLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import location from "../../assets/icons/location.png"
import AppoinmentCard from '../CardComponents/AppoinmentCard';
import phone from "../../assets/icons/phone.png";
import mail from "../../assets/icons/envelope-open-text.png"


export default function AppoinmentLayout() {
    return (
        <Fragment>
            <div className="appoinment-layout-content">
                <div className="appoinment-layout-detail">
                    <div className="appoinment-layout-form-content"></div>
                    <div className="appoinment-layout-info">
                        <AppoinmentCard
                            icon={location}
                            content1="CN1: XX Đường Đường Đường, phường A, quận BB, TP. HHH"
                            content2="CN2: XX Đường Đường Đường, phường A, quận BB, TP. HHH">
                        </AppoinmentCard>
                        <AppoinmentCard
                            icon={phone}
                            content1="(+84)XXX XXX XXX">
                        </AppoinmentCard>
                        <AppoinmentCard
                            icon={mail}
                            content1="email@gmail.com">
                        </AppoinmentCard>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}