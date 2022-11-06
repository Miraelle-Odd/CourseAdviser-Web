import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
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
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';
import AccountActivation from './pages/AccountActivation/AccountActivation';
import QaList from './pages/About/Qa/QaList';
import QaNone from './pages/About/Qa/QaNone';
import RequestManagement from './pages/RequestManagement/RequestManagement';
import Exam from './pages/Exam/Exam';
import ExamNoToken from './pages/Exam/ExamNoToken';


const history = createBrowserHistory();

function App() {

  axios.defaults.withCredentials = true

  var workplace = "post-management"
  var currentUser = null
  const [currentUserInfo, setCurrentUserInfo] = useState()

  if (cookies.get('accessToken')) {
    currentUser = jwt_decode(cookies.get('accessToken'))
    if (currentUser.account.position == "manager")
      workplace = "employee-management"
    else
      workplace = "post-management"
    console.log(currentUser)
    if(!currentUserInfo)
    axios.get("http://localhost:8080/Accounts/findOneId/1/" + currentUser.account.account_id).then((res) => {
      setCurrentUserInfo(res.data)
    })
  }





  return (
    <div className="App">

      <Router history={history}>
        <React.Suspense fallback={<div>Loading....</div>}>
          {

            window.location.href.includes('workplace') ?
              <LeftMenu
                avatar={currentUserInfo != null ? (currentUserInfo.Personal_Info.avatar ? currentUserInfo.Personal_Info.avatar : placeholder) : ""}
                email={currentUserInfo != null ? currentUserInfo.email : ""}
                fullName={currentUserInfo ? currentUserInfo.Personal_Info.name : ""}
                position={currentUser != null ? currentUser.account.position : ""}
              ></LeftMenu>
              :
              (
                !window.location.href.includes('password-recovery') && !window.location.href.includes('account-activation') && !window.location.href.includes('exam') ?
                  <NavigationBar
                    isLogin={cookies.get('accessToken')}
                  userFullname={currentUserInfo ? currentUserInfo.Personal_Info.name : ""}
                  userEmail={currentUserInfo != null ? currentUserInfo.email : ""}
                  userAvatar={currentUserInfo != null ? (currentUserInfo.Personal_Info.avatar ? currentUserInfo.Personal_Info.avatar : placeholder) : ""}
                  ></NavigationBar>
                  :
                  ""
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
            <Route path="/about/:aboutType/send-request" element={<QaNone></QaNone>} />
            <Route path="/main-exam" element={<ExamNoToken></ExamNoToken>}/>
            <Route path="/main-exam/:token" element={<Exam></Exam>}/>

            <Route path="/password-recovery/" element={<PasswordRecovery></PasswordRecovery>} />
            <Route path="/password-recovery/:token" element={<PasswordRecovery></PasswordRecovery>} />
            <Route path="/account-activation/" element={<AccountActivation></AccountActivation>} />
            <Route path="/account-activation/:token" element={<AccountActivation></AccountActivation>} />

            <Route path="/workplace/account-setting" element={currentUser != null ? <AccountSetting currentId={currentUser.account.account_id}></AccountSetting> : <Navigate to="/"></Navigate>} />
            <Route path="/workplace/employee-management/:category/:sort/:search/:page" element={currentUser != null ? <EmployeeManagement></EmployeeManagement> : <Navigate to="/"></Navigate>}></Route>
            <Route path="/workplace/chatbot-management/:category/:sort/:search/:page" element={currentUser != null ? <ChatbotManagement></ChatbotManagement> : <Navigate to="/"></Navigate>} />
            <Route path="/workplace/post-management/:category/:sort/:search/:page" element={currentUser != null ? <PostManagement></PostManagement> : <Navigate to="/"></Navigate>} />
            <Route path="/workplace/post-management/post-view/:id" element={currentUser != null ? <PostView></PostView> : <Navigate to="/"></Navigate>} />
            <Route path="/workplace/post-management/post-create" element={currentUser != null ? <PostUpdate></PostUpdate> : <Navigate to="/"></Navigate>} />
            <Route path="/workplace/post-management/post-update/:id" element={currentUser != null ? <PostUpdate></PostUpdate> : <Navigate to="/"></Navigate>} />
            <Route path='/workplace/q-and-a-management/:category/:sort/:search/:page' element={currentUser != null ? <QaManagement></QaManagement> : <Navigate to="/"></Navigate>}></Route>
            <Route path='/workplace/request-management/:category/:sort/:search/:page' element={currentUser != null ? <RequestManagement></RequestManagement> : <Navigate to="/"></Navigate>}></Route>

            {/* Redirect Links */}
            <Route path="/workplace" element={<Navigate to={"/workplace/" + workplace + "/all/updated-latest/all/1"}></Navigate>} />
            <Route path="/workplace/employee-management" element={<Navigate to="/workplace/employee-management/all/updated-latest/all/1"></Navigate>} />
            <Route path="/workplace/chatbot-management" element={<Navigate to="/workplace/chatbot-management/bot-courses/updated-latest/all/1"></Navigate>} />
            <Route path="/workplace/post-management" element={<Navigate to="/workplace/post-management/all/updated-latest/all/1"></Navigate>} />
            <Route path="/workplace/q-and-a-management" element={<Navigate to="/workplace/q-and-a-management/all/updated-latest/all/1"></Navigate>} />
            <Route path="/workplace/request-management" element={<Navigate to="/workplace/request-management/all/updated-latest/all/1"></Navigate>} />
            <Route path="/workplace/employee-management/:category" element={<Navigate to="/workplace/employee-management/:category/updated-latest/all/1"></Navigate>} />
            <Route path="/workplace/chatbot-management/:category" element={<Navigate to="/workplace/chatbot-management/:category/updated-latest/all/1"></Navigate>} />
            <Route path="/workplace/post-management/:category" element={<Navigate to="/workplace/post-management/:category/updated-latest/all/1"></Navigate>} />
            <Route path="/workplace/q-and-a-management/:category" element={<Navigate to="/workplace/q-and-a-management/:category/updated-latest/all/1"></Navigate>} />
            <Route path="/workplace/request-management/:category" element={<Navigate to="/workplace/request-management/:category/updated-latest/all/1"></Navigate>} />
            <Route path="/workplace/employee-management/:category/:sort" element={<Navigate to="/workplace/employee-management/:category/:sort/all/1"></Navigate>} />
            <Route path="/workplace/post-management/:category/:sort" element={<Navigate to="/workplace/post-management/:category/:sort/all/1"></Navigate>} />
            <Route path="/workplace/q-and-a-management/:category/:sort" element={<Navigate to="/workplace/q-and-a-management/:category/:sort/all/1"></Navigate>} />
            <Route path="/workplace/chatbot-management/:category/:sort" element={<Navigate to="/workplace/chatbot-management/:category/:sort/all/1"></Navigate>} />
            <Route path="/workplace/q-and-a-management/:category/:sort/:search" element={<Navigate to="/workplace/q-and-a-management/:category/:sort/:search/1"></Navigate>} />
            <Route path="/workplace/post-management/:category/:sort/:search" element={<Navigate to="/workplace/post-management/:category/:sort/:search/1"></Navigate>} />
            <Route path="/workplace/employee-management/:category/:sort/:search" element={<Navigate to="/workplace/employee-management/:category/:sort/:search/1"></Navigate>} />
            <Route path="/workplace/chatbot-management/:category/:sort/:search" element={<Navigate to="/workplace/chatbot-management/:category/:sort/:search/1"></Navigate>} />
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
