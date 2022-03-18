import React from 'react'
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LeftMenu.css'
import avatarPlaceholder from '../../assets/icons/circle-placeholder.png'

const menuOption = [
    {
        link: "/workplace/employee-management",
        btnName: "Quản lý tài khoản nhân viên",
        icon: ['fas', 'users']
    },
    {
        link: "/workplace/post-management",
        btnName: "Quản lý bài viết",
        icon: ['fas', 'newspaper']
    },
    {
        link: "/workplace/chatbot-management",
        btnName: "Quản lý Chatbot",
        icon: ['fas', 'robot']
    },
]

const MenuOption = props => {

    return (
        <div>
            {props.reload ?
                <a
                    href={props.link}
                    className="menu-option"
                >
                    <FontAwesomeIcon className='icon' icon={props.icon}></FontAwesomeIcon>
                    <span className='name'>{props.btnName}</span>
                </a>
                :
                <NavLink
                    to={props.link}
                    className="menu-option"
                >
                    <FontAwesomeIcon className='icon' icon={props.icon}></FontAwesomeIcon>
                    <span className='name'>{props.btnName}</span>
                </NavLink>
            }
        </div>
    )
}

const LeftMenu = props => {
    return (
        <div className={props.hide ? "hide" : "no-overflow"}>
            <div className='left-menu-decoration'></div>
            <div className='left-menu-container'>

                <div className='left-menu-header'>
                    <a href='/' className='logo'></a>
                    <div className='icon'>
                        <FontAwesomeIcon icon={['fas', 'align-left']} />
                    </div>

                </div>
                <div className='left-menu-content'>
                    <div className='section'>
                        {
                            menuOption.map((item, index) => {
                                return (
                                    <MenuOption
                                        link={item.link}
                                        icon={item.icon}
                                        btnName={item.btnName}
                                    ></MenuOption>
                                )
                            })
                        }
                    </div>
                    <div className='space'></div>
                    <hr className='seperator'></hr>
                    <div className='section'>
                        <MenuOption
                            link="/workplace/account-setting"
                            icon={['fas', 'gear']}
                            btnName="Cài đặt tài khoản"
                        ></MenuOption>
                        <MenuOption
                            reload
                            link="/"
                            icon={['fas', 'right-from-bracket']}
                            btnName="Đăng xuất"
                        ></MenuOption>
                    </div>

                </div>
                <div className='left-menu-user-info'>
                    <img className='avatar' src={props.avatar ? props.avatar : avatarPlaceholder} alt="avatar"/>
                    <div className='content'>
                        <span className='content-main'>{props.fullName? props.fullName : "Default No Name"}</span>
                        <span className='content-sub'>{props.email? props.email : "default@gmail.com"}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LeftMenu;