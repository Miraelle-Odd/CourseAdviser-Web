import React, { useRef, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    useLocation
} from 'react-router-dom';
import { useState } from 'react';
import './NavigationBar.css'
import logo from "../../assets/icons/app-logo.png";
import TKB_HK2 from "../../assets/icons/TKB_HK2.PNG";

const homeLink = "/";
const courseIeltsLink = "/IELTS";
const courseToeicLink = "/TOEIC";
const courseAdultLink = "/English-For-Adult";
const courseKidLink = "/English-For-Kid";
const postLink = "/Post";
const aboutUsLink = "/AboutUs";
const aboutStaffLink = "/AboutStaff";
const aboutContactLink = "/Contact";
let navbarItems = [
    {
        displayName: "Home",
        link: homeLink,
        dropDownItems: [],
    },
    {
        displayName: "Courses",
        link: "/no-change-1",
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
                displayName: "Tiếng Anh cho người đi làm",
                link: courseAdultLink,
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
        link: "/no-change-2",
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
        displayName: "Quản lý tài khoản",
        link: "/admin-manage-account"
    },
    {
        displayName: "Quản lý ChatBot",
        link: "/admin-manage-chatbot"
    },
    {
        displayName: "Cài đặt tài khoản",
        link: "/user-setting"
    },
]
let employeeDropdownItems = [
    {
        displayName: "Quản lý bài viết",
        link: "/admin-manage-post"
    },
    {
        displayName: "Cài đặt tài khoản",
        link: "/user-setting"
    },
]

export default function NavigationBar() {
    const [isLogin, setIsLogin] = useState(true);
    const [activeButton_1, setActiveButton_1] = useState('/no-change-1');
    const [activeButton_2, setActiveButton_2] = useState('/no-change-2');
    const renderItemNavbar_WithDropdown = (actionButton, type, item) => (
        <button className='item-button header-center'>
            <ul className="item-click-dropdown">
                {item.dropDownItems.map((subItem, index) => subItem.displayName != null && (
                    <Link className="no-decoration" to={subItem.link} onClick={() => clickedButtonHandler(subItem.link, type)}>
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
                        {/* <i className="fas fa-angle-down margin8"></i> */}
                    </div>
                    <ul className="item-click-dropdown user-dropdown">
                        <li>
                            <div className="user-dropdown-contain header-center">
                                <img className="user-avatar dropdown-avatar" src={image} alt="" ></img>
                                <span className="user-name dropdown-name">{name}</span>
                                <span className='dropdown-email'>{email}</span>
                                {/* <i className="fas fa-angle-down margin8"></i> */}
                            </div>
                        </li>
                        <li><div className='dropdown-line'></div>
                        </li>
                        {listItem.map((subItem, index) => subItem.displayName != null && (
                            <Link className="no-decoration" to={subItem.link}>
                                <li className="dropdown-item" key={index}>
                                    {subItem.displayName}
                                </li>
                            </Link>
                        ))}
                        <li><div className='dropdown-line'></div>
                        </li>
                        <li className="dropdown-item">
                            <div className="dropdown-footer">
                                <span className='dropdown-logout'>Đăng xuất</span>
                                {/* <i className="fas fa-angle-down margin8"></i> */}
                            </div>
                        </li>
                    </ul>
                </button>
            </li>


        )
    }
    const clickedButtonHandler = (e, t) => {
        t === 1 ? setActiveButton_1(e) : setActiveButton_2(e)
    };
    const [navbar, setNavbar] = useState(false);
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
    const position = useLocation().pathname;
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
                                {item.link === "/no-change-1" ?
                                    renderItemNavbar_WithDropdown(activeButton_1, 1, item)
                                    :
                                    item.link === "/no-change-2" ?
                                        renderItemNavbar_WithDropdown(activeButton_2, 2, item)
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
                                <button className={position === "/" && navbar ? "item-button header-center login-for-home item-login" : 'item-button header-center item-login'}>
                                    Login
                                </button>
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
