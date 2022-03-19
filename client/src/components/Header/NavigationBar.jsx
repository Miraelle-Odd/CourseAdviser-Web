import React, { useRef, useEffect } from 'react'
import {
    Link,
    NavLink,
    useLocation
} from 'react-router-dom';
import { useState } from 'react';
import './NavigationBar.css'
import logo from "../../assets/icons/app-logo.png";
import TKB_HK2 from "../../assets/icons/TKB_HK2.PNG";
import Popup from 'reactjs-popup';
import Login from '../PopupComponents/Login/Login';
import ForgotPassword from '../PopupComponents/ForgotPassword/ForgotPassword';
import AuthenForm from '../PopupComponents/AuthenForm/AuthenForm';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
const aboutContactLink = "/about/contact";

const adminManageAccount = "/admin-manage-account";
const adminManageChatbot = "/admin-manage-chatbot";
const adminManagePost = "/admin-manage-post";
const adminManageQa = "/admin-manage-qa";
const userSetting = "/user-setting";

let navbarItems = [
    {
        displayName: "Home",
        link: homeLink,
        dropDownItems: [],
    },
    {
        displayName: "Courses",
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
                displayName: "Tiếng Anh giao tiếp",
                link: courseSpeakingLink,
            },
            {
                displayName: "Tiếng Anh cho bé",
                link: courseKidLink,
            },
        ],
    },
    {
        displayName: "Posts",
        link: postLink,
        dropDownItems: [],
    },
    {
        displayName: "About",
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
]

export default function NavigationBar() {
    const [navbar, setNavbar] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const position = useLocation().pathname;

    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isShowForgot, setIsShowForgot] = useState(false);
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
                    <Link
                        className="no-decoration" to={subItem.link}
                    >
                        <li className="dropdown-item" key={index}>
                            {subItem.displayName}
                        </li>
                    </Link>
                ))}
            </ul>
            <NavLink
                exact
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
                        <span className="user-name">{name}</span>
                        <FontAwesomeIcon className='navbar-icon ' icon={['fas','chevron-down']}></FontAwesomeIcon>
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
                            <Link className="no-decoration" to={subItem.link}>
                                <li className="dropdown-item dropdown-item-with-icon header-center" key={index}>
                                    {subItem.displayName}
                                    <FontAwesomeIcon className='dropdown-item-icon' icon={['fas','chevron-right']}></FontAwesomeIcon>
                                </li>
                                
                            </Link>
                        ))}
                        <li><div className='dropdown-line'></div>
                        </li>
                        <li className="dropdown-item no-decoration">
                            <div className="dropdown-footer  header-center">
                                <span className='dropdown-logout'>Đăng xuất</span>
                                <FontAwesomeIcon className='dropdown-logout-icon' icon={['fas','right-from-bracket']}></FontAwesomeIcon>
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
                                        exact
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
                                    Login
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
                                renderUserToggle("User Full Name", TKB_HK2, 'gmail@gmail.com', managerDropdownItems)
                            )
                    }
                </ul>
            </div>
        </header >
    )
}
