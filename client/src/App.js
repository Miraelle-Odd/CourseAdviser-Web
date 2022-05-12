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
import PostView from './pages/PostManagement/PostDetails/PostView';
import PostUpdate from './pages/PostManagement/PostDetails/PostUpdate';
import QaLayout from './components/LayoutComponents/QaPage/QaLayout';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';
import AccountActivation from './pages/AccountActivation/AccountActivation';
import QaList from './pages/About/Qa/QaList';
import QaNone from './pages/About/Qa/QaNone';


const history = createBrowserHistory();

function App() {

  axios.defaults.withCredentials = true

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
                avatar={currentUser != null ? (currentUser.account.Personal_Info.avatar ? currentUser.account.Personal_Info.avatar : placeholder) : ""}
                fullName={currentUser != null ? currentUser.account.Personal_Info.name : ""}
                email={currentUser != null ? currentUser.account.email : ""}
                position={currentUser != null ? currentUser.account.position : ""}
              ></LeftMenu>
              :
              (
                !window.location.href.includes('password-recovery') && !window.location.href.includes('account-activation') ?
                  <NavigationBar
                    isLogin={cookies.get('accessToken')}
                    userFullname={currentUser != null ? currentUser.account.Personal_Info.name : ""}
                    userEmail={currentUser != null ? currentUser.account.email : ""}
                    userAvatar={currentUser != null ? (currentUser.account.Personal_Info.avatar ? currentUser.account.Personal_Info.avatar : placeholder) : ""}
                  ></NavigationBar>
                  : ""
              )
          }
          <Routes>
            <Route exact path="/" element={<HomePage></HomePage>} />
            <Route path='/courses/:courseType' element={<CourseHolder></CourseHolder>} />
            <Route path="/main-post/" element={<MainPost></MainPost>}></Route>
            <Route path="/main-post/:postType/:page" element={<PostListHolder></PostListHolder>} />
            <Route path="/main-post/:postType/post-details/:id" element={<PostDetails></PostDetails>} />
            <Route path="/post-details" element={<PostDetails></PostDetails>} />
            <Route path="/about/:aboutType" element={<AboutHolder></AboutHolder>} />
            <Route path="/about/:aboutType/:page" element={<AboutHolder></AboutHolder>} />
            <Route path="/about/:aboutType/no-result" element={<QaNone></QaNone>} />

            <Route path="/password-recovery/" element={<PasswordRecovery></PasswordRecovery>} />
            <Route path="/password-recovery/:token" element={<PasswordRecovery></PasswordRecovery>} />
            <Route path="/account-activation/" element={<AccountActivation></AccountActivation>} />
            <Route path="/account-activation/:token" element={<AccountActivation></AccountActivation>} />

            <Route path="/workplace/account-setting" element={currentUser != null ? <AccountSetting></AccountSetting> : <Navigate to="/"></Navigate>} />
            <Route path="/workplace/employee-management/:category/:page" element={currentUser != null ? <EmployeeManagement></EmployeeManagement> : <Navigate to="/"></Navigate>}></Route>
            <Route path="/workplace/chatbot-management/:category/:page" element={currentUser != null ? <ChatbotManagement></ChatbotManagement> : <Navigate to="/"></Navigate>} />
            <Route path="/workplace/post-management/:category/:page" element={currentUser != null ? <PostManagement></PostManagement> : <Navigate to="/"></Navigate>} />
            <Route path="/workplace/post-management/post-view/:id" element={currentUser != null ? <PostView></PostView> : <Navigate to="/"></Navigate>} />
            <Route path="/workplace/post-management/post-create" element={currentUser != null ? <PostUpdate></PostUpdate> : <Navigate to="/"></Navigate>} />
            <Route path="/workplace/post-management/post-update/:id" element={currentUser != null ? <PostUpdate></PostUpdate> : <Navigate to="/"></Navigate>} />
            <Route path='/workplace/q-and-a-management/:category/:page' element={currentUser != null ? <QaManagement></QaManagement> : <Navigate to="/"></Navigate>}></Route>


            {/* Redirect Links */}
            <Route path="/workplace" element={<Navigate to={"/workplace/" + workplace + "/all/1"}></Navigate>} />
            <Route path="/workplace/employee-management" element={<Navigate to="/workplace/employee-management/all/1"></Navigate>} />
            <Route path="/workplace/chatbot-management" element={<Navigate to="/workplace/chatbot-management/bot-courses/1"></Navigate>} />
            <Route path="/workplace/post-management" element={<Navigate to="/workplace/post-management/all/1"></Navigate>} />
            <Route path="/workplace/q-and-a-management" element={<Navigate to="/workplace/q-and-a-management/all/1"></Navigate>} />
            <Route path="/workplace/employee-management/:category" element={<Navigate to="/workplace/employee-management/:category/1"></Navigate>} />
            <Route path="/workplace/chatbot-management/:category" element={<Navigate to="/workplace/chatbot-management/:category/1"></Navigate>} />
            <Route path="/workplace/post-management/:category" element={<Navigate to="/workplace/post-management/:category/1"></Navigate>} />
            <Route path="/workplace/q-and-a-management/:category" element={<Navigate to="/workplace/q-and-a-management/:category/1"></Navigate>} />


          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
