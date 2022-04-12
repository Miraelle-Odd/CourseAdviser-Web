import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom';
import { createBrowserHistory } from "history";
import "./assets/fontawesome/fontawesome"
import HomePage from "./pages/Home/Home";
import LeftMenu from './components/LeftMenu/LeftMenu';
import EmployeeManagement from "./pages/EmployeeManagement/EmployeeManagement"
import AccountSetting from "./pages/AccountSetting/AccountSetting"
import PostManagement from "./pages/PostManagement/PostManagement"
import ChatbotManagement from "./pages/ChatbotManagement/ChatbotManagement"
import NavigationBar from './components/Header/NavigationBar';
import MainPost from './pages/Post/MainPost/MainPost';
import PostDetails from './pages/Post/PostDetails/PostDetails';
import PostListHolder from './pages/Post/PostLists/PostListHolder';
import AboutHolder from './pages/About/AboutHolder';
import CourseHolder from './pages/Courses/CourseHolder';
import QaManagement from './pages/QaManagement/QaManagement';
import jwt_decode from 'jwt-decode'
import placeholder from './assets/icons/personal_avatar.png'
import axios from 'axios';
import cookies from 'js-cookie'

const history = createBrowserHistory();

function App() {

  axios.defaults.withCredentials = true

  console.log(cookies.get('accessToken'))

  var workplace = "post-management"
  var currentUser = null

  if (cookies.get('accessToken')) {
    currentUser = jwt_decode(cookies.get('accessToken'))
    if (currentUser.account.position == "manager")
      workplace = "employee-management"
    else
      workplace = "post-management"
  }

  return (
    <div className="App">

      <Router history={history}>
        <React.Suspense fallback={<div>Loading....</div>}>
          {

            window.location.href.includes('workplace') ?
              <LeftMenu
                avatar={currentUser != null ? (currentUser.account.avatar ? currentUser.account.avatar : placeholder) : ""}
                fullName={currentUser != null ? currentUser.account.username : ""}
                email={currentUser != null ? currentUser.account.email : ""}
                position={currentUser != null ? currentUser.account.position : ""}
              ></LeftMenu>
              :
              <NavigationBar
                isLogin={cookies.get('accessToken')}
                userFullname={currentUser != null ? currentUser.account.username : ""}
                userEmail={currentUser != null ? currentUser.account.email : ""}
                userAvatar={currentUser != null ? (currentUser.account.avatar ? currentUser.account.avatar : placeholder) : ""}
              ></NavigationBar>


          }
          <Routes>
            <Route exact path="/" element={<HomePage></HomePage>} />
            <Route path='/courses/:courseType' element={<CourseHolder></CourseHolder>} />
            <Route path="/main-post/" element={<MainPost></MainPost>}></Route>
            <Route path="/main-post/:postType/:page" element={<PostListHolder></PostListHolder>} />
            <Route path="/main-post/:postType/post-details/:id" element={<PostDetails></PostDetails>} />
            <Route path="/post-details" element={<PostDetails></PostDetails>} />
            <Route path="/about/:aboutType" element={<AboutHolder></AboutHolder>} />

            <Route path="/workplace/account-setting" element={<AccountSetting></AccountSetting>} />
            <Route path="/workplace/employee-management/:category/:page" element={<EmployeeManagement></EmployeeManagement>}></Route>
            <Route path="/workplace/chatbot-management" element={<ChatbotManagement></ChatbotManagement>} />
            <Route path="/workplace/post-management/:category/:page" element={<PostManagement></PostManagement>} />
            <Route path='/workplace/q-and-a-management/:category/:page' element={<QaManagement></QaManagement>}></Route>


            {/* Redirect Links */}
            <Route path="/workplace" element={<Navigate to={"/workplace/" + workplace + "/all/1"}></Navigate>} />
            <Route path="/workplace/employee-management" element={<Navigate to="/workplace/employee-management/all/1"></Navigate>} />
            <Route path="/workplace/post-management" element={<Navigate to="/workplace/post-management/all/1"></Navigate>} />
            <Route path="/workplace/q-and-a-management" element={<Navigate to="/workplace/q-and-a-management/all/1"></Navigate>} />
            <Route path="/workplace/employee-management/:category" element={<Navigate to="/workplace/employee-management/:category/1"></Navigate>} />
            <Route path="/workplace/post-management/:category" element={<Navigate to="/workplace/post-management/:category/1"></Navigate>} />
            <Route path="/workplace/q-and-a-management/:category" element={<Navigate to="/workplace/q-and-a-management/:category/1"></Navigate>} />


          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
