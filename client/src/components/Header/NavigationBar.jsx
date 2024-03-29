import React, { useEffect } from 'react'
import {
    Link,
    NavLink,
    useLocation
} from 'react-router-dom';
import { useState } from 'react';
import './NavigationBar.css'
import logo from "../../assets/icons/app-logo.png";
import Login from '../PopupComponents/Login/Login';
import ForgotPassword from '../PopupComponents/ForgotPassword/ForgotPassword';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
const homeLink = "/";
const courseLink = "/courses";
const aboutLink = "/about";
const courseIeltsLink = "/courses/IELTS";
const courseToeicLink = "/courses/TOEIC";
const courseSpeakingLink = "/courses/english-for-speaking";
const courseKidLink = "/courses/english-for-kid";
const postLink = "/main-post";
const aboutUsLink = "/about/us";
const aboutStaffLink = "/about/staff";
const QaLink = "/about/qa/1"
const aboutContactLink = "/about/contact";
const adminManageAccount = "/workplace/employee-management";
const adminManageChatbot = "/workplace/chatbot-management";
const adminManagePost = "/workplace/post-management";
const adminManageQa = "/workplace/q-and-a-management";
const userSetting = "/workplace/account-setting";
const statisticCharts = "/workplace/statistic-charts"

let navbarItems = [
    {
        displayName: "Trang chủ",
        link: homeLink,
        dropDownItems: [],
    },
    {
        displayName: "Khóa học",
        link: courseLink,
        dropDownItems: [
            {
                displayName: "Luyện thi IELTS",
                link: courseIeltsLink,
            },
            {
                displayName: "Luyện thi TOEIC",
                link: courseToeicLink,
            },
            {
                displayName: "Tiếng Anh văn phòng",
                link: courseSpeakingLink,
            },
            {
                displayName: "Tiếng Anh cho bé",
                link: courseKidLink,
            },
        ],
    },
    {
        displayName: "Bài viết",
        link: postLink,
        dropDownItems: [],
    },
    {
        displayName: "Thông tin",
        link: aboutLink,
        dropDownItems: [
            {
                displayName: "Về chúng tôi",
                link: aboutUsLink,
            },
            {
                displayName: "Về giảng viên",
                link: aboutStaffLink,
            },
            {
                displayName: "Hỏi đáp",
                link: QaLink,
            },
            {
                displayName: "Liên hệ",
                link: aboutContactLink,
            },
        ],
    },
];
let managerDropdownItems = [
    {
        displayName: "Quản lý tài khoản nội bộ",
        link: adminManageAccount
    },
    {
        displayName: "Quản lý ChatBot",
        link: adminManageChatbot
    },
    {
        displayName: "Cài đặt tài khoản",
        link: userSetting
    },
    {
        displayName: "Thống kê và biểu đồ",
        link: statisticCharts
    }
]
let employeeDropdownItems = [
    {
        displayName: "Quản lý bài viết",
        link: adminManagePost
    },
    {
        displayName: "Quản lý hỏi đáp",
        link: adminManageQa
    },
    {
        displayName: "Cài đặt tài khoản",
        link: userSetting
    },
    {
        displayName: "Thống kê và biểu đồ",
        link: statisticCharts
    }
]

export default function NavigationBar(props) {
    const [navbar, setNavbar] = useState(false);
    const [isLogin, setIsLogin] = useState(props.isLogin);
    const position = useLocation().pathname;

    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isShowForgot, setIsShowForgot] = useState(false);

    const onLogout = () => {
        cookies.remove("accessToken")
        window.location.reload()
    }
    const handleLoginOpen = () => {
        setIsShowLogin(true);
    }
    const handleForgotOpen = () => {
        setIsShowLogin(false);
        setIsShowForgot(true);
    }
    const handleFormClose = () => {
        setIsShowLogin(false);
        setIsShowForgot(false);
    }

    useEffect(() => {
        changeBackground();
        window.addEventListener('scroll', changeBackground);
    }, [])

    var currentUser
    if (cookies.get('accessToken')) {
        currentUser = jwt_decode(cookies.get('accessToken'))
    }

    const changeBackground = () => {
        if (window.pageYOffset >= 100) {
            setNavbar(false);
        } else {
            setNavbar(true);
        }
    }

    const renderItemNavbar_WithDropdown = (actionButton, item) => (
        <button className='item-button header-center'>
            <ul className="item-click-dropdown">
                {item.dropDownItems.map((subItem, index) => subItem.displayName != null && (
                    <Link className="no-decoration" to={subItem.link} key={index}>
                        <li className="dropdown-item" >
                            {subItem.displayName}
                        </li>
                    </Link>
                ))}
            </ul>
            <NavLink
                exact="true"
                to={actionButton}
                className="no-decoration disable-link">
                {item.displayName}
            </NavLink>
        </button>
    )
    const renderUserToggle = (name, image, email, listItem) => {
        return (
            <li className="item-user-button" >
                <button className='user-button float-right'>
                    <div className={position === "/" && navbar ? "navbar-user-contain header-center" : "no-border navbar-user-contain header-center"}>
                        <img className="user-avatar" src={image} alt="" ></img>
                        <span className="user-name header-center">{name}</span>
                        <FontAwesomeIcon className='navbar-icon ' icon={['fas', 'chevron-down']}></FontAwesomeIcon>
                    </div>
                    <ul className="item-click-dropdown user-dropdown">
                        <li>
                            <div className="user-dropdown-contain header-center">
                                <img className="user-avatar dropdown-avatar" src={image} alt="" ></img>
                                <span className="user-name dropdown-name">{name}</span>
                                <span className='dropdown-email'>{email}</span>
                            </div>
                        </li>
                        <li><div className='dropdown-line'></div>
                        </li>
                        {listItem.map((subItem, index) => subItem.displayName != null && (
                            <a className="no-decoration" href={subItem.link} key={index}>
                                <li className="dropdown-item dropdown-item-with-icon header-center" >
                                    {subItem.displayName}
                                    <FontAwesomeIcon className='dropdown-item-icon' icon={['fas', 'chevron-right']}></FontAwesomeIcon>
                                </li>

                            </a>
                        ))}
                        <li><div className='dropdown-line'></div>
                        </li>
                        <li className="dropdown-item no-decoration">
                            <div className="dropdown-footer  header-center" onClick={onLogout}>
                                <span className='dropdown-logout'>Đăng xuất</span>
                                <FontAwesomeIcon className='dropdown-logout-icon' icon={['fas', 'right-from-bracket']}></FontAwesomeIcon>
                            </div>
                        </li>
                    </ul>
                </button>
            </li>


        )
    }
    return (
        <header className='header-sticky'>
            <div className={position === "/" && navbar ? 'header-for-home header-container' : "header-container"}>
                <ul className="header-navbar">
                    <li className="navbar-logo-container">
                        <Link to="/" className='header-center no-decoration'>
                            <img src={logo} className="navbar-logo" alt="logo" />
                            <span className={position === "/" && navbar ? 'title-for-home navbar-title header-center' : 'navbar-title header-center'}>English Center</span>
                        </Link>
                    </li>
                    {navbarItems.map((item, index) => {
                        return (
                            <li className="navbar-item header-center" key={index}>
                                {item.link === "/courses" || item.link === "/about" ?
                                    renderItemNavbar_WithDropdown(item.link, item)
                                    :
                                    <NavLink
                                        exact="true"
                                        to={item.link}
                                        className="no-decoration item-button header-center">
                                        {item.displayName}
                                    </NavLink>
                                }
                            </li>
                        );
                    })}
                    <div className="line"></div>
                    {
                        !isLogin ?
                            (<li className="navbar-item header-center">
                                <button className={position === "/" && navbar ? "item-button header-center login-for-home item-login" : 'item-button header-center item-login'}
                                    onClick={handleLoginOpen}>
                                    Đăng nhập
                                </button>
                                <Modal
                                    isOpen={isShowLogin}
                                    onRequestClose={() => handleFormClose()}
                                    className="popup-modal"
                                    overlayClassName="popup-overlay"
                                    shouldCloseOnOverlayClick={false}>
                                    <Login
                                        handleFormClose={() => handleFormClose()}
                                        handleForgotFormOpen={handleForgotOpen}>
                                    </Login>
                                </Modal>
                                <Modal
                                    isOpen={isShowForgot}
                                    onRequestClose={() => handleFormClose()}
                                    className="popup-modal"
                                    overlayClassName="popup-overlay"
                                    shouldCloseOnOverlayClick={false}>
                                    <ForgotPassword
                                        handleFormClose={() => handleFormClose()}>
                                    </ForgotPassword>
                                </Modal>
                            </li>) :
                            (
                                currentUser.account.position == "manager" ?
                                    renderUserToggle(props.userFullname, props.userAvatar, props.userEmail, managerDropdownItems) :
                                    renderUserToggle(props.userFullname, props.userAvatar, props.userEmail, employeeDropdownItems)
                            )
                    }
                </ul>
            </div>
        </header >
    )
}
