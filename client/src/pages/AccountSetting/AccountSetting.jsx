import React, { useEffect, useState } from 'react'
import './AccountSetting.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import PersonalInfoTray from '../../components/TrayComponents/PersonalInfoTray'
import moment from 'moment'
import Modal from 'react-modal';
import UpdateSelfInfo from '../../components/PopupComponents/UpdateSelfInfo/UpdateSelfInfo'
import UpdateSelfContact from '../../components/PopupComponents/UpdateSelfContact/UpdateSelfContact'
import UpdatePassword from '../../components/PopupComponents/UpdatePassword/UpdatePassword'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AlertFail from '../../components/PopupComponents/AlertFail/AlertFail'
import AlertSuccess from '../../components/PopupComponents/AlertSuccess/AlertSuccess'

const AccountSetting = props => {
    let navigate = useNavigate()

    const [isShowUpdateBasicInfo, setIsShowUpdateBasicInfo] = useState(false);
    const [isShowUpdateContactInfo, setIsShowUpdateContactInfo] = useState(false);
    const [isShowUpdatePassword, setIsShowUpdatePassword] = useState(false);
    const [avatar, setAvatar] = useState()
    const [avatarURL, setAvatarURL] = useState()
    const [avatarBtnShow, setAvatarBtnShow] = useState("default")
    const [failAlert, setFailAlert] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)
    const [message, setMessage] = useState()

    const handleFormClose = () => {
        setIsShowUpdateBasicInfo(false);
        setIsShowUpdateContactInfo(false);
        setIsShowUpdatePassword(false);
        setSuccessAlert(false)
        setFailAlert(false)
        setMessage("")
    }
    const openChangePassForm = () => {
        setIsShowUpdatePassword(true)
    }

    const openChangeBasicInfoForm = () => {
        setIsShowUpdateBasicInfo(true)
    }

    const openChangeContractInfoForm = () => {
        setIsShowUpdateContactInfo(true)
    }

    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const getAccountById = async () => {
            const result = await axios.get(`http://localhost:8080/Accounts/get-detail/${props.currentId}`)
            setCurrentUser(result.data)
            setAvatarURL(result.data.Personal_Info.avatar)
        }
        getAccountById().catch(console.error)
    }, [props])

    var time = moment(currentUser ? currentUser.Personal_Info.birthday : null).format("YYYY-MM-DD");

    const basicInfo = [
        {
            fieldName: "Họ tên",
            fieldValue: currentUser ? currentUser.Personal_Info.name : null,
            openForm: true,
            openFormFun: openChangeBasicInfoForm,
        },
        {
            fieldName: "Giới tính",
            fieldValue: currentUser ? currentUser.Personal_Info.gender == "female" ? "Nữ" : "Nam" : null,
            openForm: true,
            openFormFun: openChangeBasicInfoForm,
        },
        {
            fieldName: "Ngày sinh",
            fieldValue: time,
            openForm: true,
            openFormFun: openChangeBasicInfoForm,
            isLast: true
        },
    ]

    const contractInfo = [
        {
            fieldName: "Email",
            fieldValue: currentUser ? currentUser.email : null
        },
        {
            fieldName: "Số điện thoại",
            fieldValue: currentUser ? currentUser.Personal_Info.phone : null,
            openForm: true,
            openFormFun: openChangeContractInfoForm,
        }, {
            fieldName: "Vị trí",
            fieldValue: currentUser ? currentUser.Personal_Info.location : null,
            openForm: true,
            openFormFun: openChangeContractInfoForm,
            isLast: true
        },
    ]

    const accountInfo = [
        {
            fieldName: "Username",
            fieldValue: currentUser ? currentUser.username : null,
        },
        {
            fieldName: "Password",
            fieldValue: "Đổi mật khẩu",
            openForm: true,
            openFormFun: openChangePassForm,

        },
        {
            fieldName: "Loại tài khoản",
            fieldValue: currentUser ? currentUser.position = "employee" ? "Nhân viên" : "Quản lý" : null,
            isLast: true
        }
    ]

    const onAvatarConfirm = async () => {
        var data = new FormData()
        data.append("image", avatar)

        await axios.post("http://localhost:8080/image/upload-to-imgur/", data)
            .then((res) => {
                axios.post("http://localhost:8080/personal_infos/update-avatar", {
                    id: currentUser.account_id,
                    avatar: res.data.link
                }).then((ress) => {
                    if (ress.data[0] == 1) {
                        setSuccessAlert(true)
                        setMessage("Đã cập nhập ảnh đại diện!")
                    }
                    else {
                        setFailAlert(true)
                        setMessage("Lỗi xảy ra. Vui lòng thử lại sau!")
                    }
                })
            })
    }

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
                                avatar={avatarURL}
                                avatarBtnShow={avatarBtnShow}
                                onAvatarChange={(e) => {
                                    setAvatar(e.target.files[0])
                                    setAvatarURL(URL.createObjectURL(e.target.files[0]))
                                    setAvatarBtnShow("changed")
                                }}
                                onAvatarConfirm={onAvatarConfirm}
                                onAvatarCancel={() => {
                                    setAvatarURL(currentUser.Personal_Info.avatar)
                                    setAvatar(undefined)
                                    setAvatarBtnShow("default")
                                }
                                }
                            >
                            </PersonalInfoTray>
                        </div>
                        <div className='contract-tray-container'>
                            <PersonalInfoTray
                                title="Thông tin liên hệ"
                                subtitle="Bạn chỉ được phép thay đổi số điện thoại và vị trí."
                                takeRemain
                                items={contractInfo}>
                            </PersonalInfoTray>
                        </div>
                    </div>
                    <div className='account-tray-container'>
                        <PersonalInfoTray
                            title="Thông tin tài khoản"
                            subtitle="Một số thông tin mang tính bảo mật của tài khoản. Bạn chỉ được phép thay đổi mật khẩu."
                            items={accountInfo}>
                        </PersonalInfoTray>
                    </div>
                </div>

            </div >
        )
    }
    return (
        <div className='userpage-container'>
            <WorkplaceLayout
                title="Cài đặt tài khoản"
                renderBody={renderAccountSetting()}
            ></WorkplaceLayout>
            <Footer></Footer>
            <Modal
                isOpen={isShowUpdateBasicInfo}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <UpdateSelfInfo
                    handleFormClose={() => handleFormClose()}
                    name={currentUser ? currentUser.Personal_Info.name : null}
                    gender={currentUser ? currentUser.Personal_Info.gender : null}
                    birthday={currentUser ? currentUser.Personal_Info.birthday : null}
                    idItem={currentUser ? currentUser.account_id : null}
                >
                </UpdateSelfInfo>
            </Modal>
            <Modal
                isOpen={isShowUpdateContactInfo}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <UpdateSelfContact
                    handleFormClose={() => handleFormClose()}
                    phone={currentUser ? currentUser.Personal_Info.phone : null}
                    location={currentUser ? currentUser.Personal_Info.location : null}
                    idItem={currentUser ? currentUser.account_id : null}
                >
                </UpdateSelfContact>
            </Modal>
            <Modal
                isOpen={isShowUpdatePassword}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <UpdatePassword
                    handleFormClose={() => handleFormClose()}
                    idItem={currentUser ? currentUser.account_id : null}
                >
                </UpdatePassword>
            </Modal>
            <Modal
                isOpen={successAlert}
                onRequestClose={() => navigate(0)}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <AlertSuccess
                    message={message}
                    onClose={()=>navigate(0)}
                ></AlertSuccess>
            </Modal>

            <Modal
                isOpen={failAlert}
                onRequestClose={() => navigate(0)}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <AlertFail
                    message={message}
                    onClose={() => navigate(0)}
                ></AlertFail>
            </Modal>
        </div>
    )
}

export default AccountSetting;