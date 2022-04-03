import React from 'react'
import './AccountSetting.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import PersonalInfoTray from '../../components/TrayComponents/PersonalInfoTray'

const openChangePassForm = () => {
    alert("Open change Password")
}

const openChangeBasicInfoForm = () => {
    alert("Open change Basic info")
}

const openChangeContractInfoForm = () => {
    alert("Open change Contract info")
}

const basicInfo = [
    {
        fieldName: "Họ tên",
        fieldValue: "Cao Ngọc Anh",
        openForm: true,
        openFormFun: openChangeBasicInfoForm
    },
    {
        fieldName: "Giới tính",
        fieldValue: "Nữ",
        openForm: true,
        openFormFun: openChangeBasicInfoForm
    },
    {
        fieldName: "Ngày sinh",
        fieldValue: "08/03/2001",
        openForm: true,
        openFormFun: openChangeBasicInfoForm,
        isLast: true
    },
]

const contractInfo = [
    {
        fieldName: "Email",
        fieldValue: "kurocrea@gmail",
    },
    {
        fieldName: "Số điện thoại",
        fieldValue: "0935 822 239",
        openForm: true,
        openFormFun: openChangeContractInfoForm

    }, {
        fieldName: "Ví trí",
        fieldValue: "TP. Hồ Chí Minh",
        openForm: true,
        openFormFun: openChangeContractInfoForm,
        isLast: true
    },
]

const accountInfo = [
    {
        fieldName: "Username",
        fieldValue: "NABadass"
    },
    {
        fieldName: "Password",
        fieldValue: "********",
        openForm: true,
        openFormFun: openChangePassForm
    },
    {
        fieldName: "Loại tài khoản",
        fieldValue: "Quản lý",
        isLast: true
    }
]

const renderAccountSetting = () => {
    return (
        <div className='acc-set-body'>
            <div className='trays-container'>
                <div className='acc-set-line'>
                    <div className='basic-tray-container'>
                        <PersonalInfoTray
                            title="Thông tin cơ bản"
                            subtitle="Một số thông tin cá nhân được dùng để thể hiện"
                            items={basicInfo}
                            image
                        >
                        </PersonalInfoTray>
                    </div>
                    <div className='contract-tray-container'>
                        <PersonalInfoTray
                            title="Thông tin liên hệ"
                            subtitle="Bạn chỉ được phép thay đổi số điện thoại và vị trí."
                            takeRemain
                            items={contractInfo}
                        >
                        </PersonalInfoTray>
                    </div>
                </div>
                <div className='account-tray-container'>
                    <PersonalInfoTray
                        title="Thông tin tài khoản"
                        subtitle="Một số thông tin mang tính bảo mật của tài khoản. Bạn chỉ được phép thay đổi mật khẩu."
                        items={accountInfo}
                    >
                    </PersonalInfoTray>
                </div>
            </div>

        </div >
    )
}
const AccountSetting = props => {
    return (
        <div className='userpage-container'>
            <WorkplaceLayout
                title="Cài đặt tài khoản"
                renderBody={renderAccountSetting()}
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default AccountSetting;