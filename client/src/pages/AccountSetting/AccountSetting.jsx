import React from 'react'
import './AccountSetting.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
const renderAccountSetting = () => {
    return(
        <div>Đây là Acc Set</div>
    )
}
const AccountSetting = props => {
    return (
        <div className='userpage-container'>
            <WorkplaceLayout title="Cài đặt tài khoản"
                renderBody={renderAccountSetting()}
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default AccountSetting;