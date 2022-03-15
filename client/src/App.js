import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
import TestAva from "./assets/icons/staff-img.png"
import NavigationBar from './components/Header/NavigationBar';
import MainPost from './pages/Post/MainPost/MainPost';
import PostDetails from './pages/Post/PostDetails/PostDetails';
import PostListHolder from './pages/Post/PostLists/PostListHolder';
import AboutHolder from './pages/About/AboutHolder';
import CourseHolder from './pages/Courses/CourseHolder';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">

      <Router history={history}>
        <React.Suspense fallback={<div>Loading....</div>}>
          {
            window.location.href.includes('workplace') ?
              <LeftMenu
                // avatar={TestAva}
                // fullName="Cao Ngọc Anh"
                // email="kurocrea@gmail.com"
              ></LeftMenu>
              :
              <NavigationBar></NavigationBar>
          }
          <Routes>
            <Route path="/home" element={<HomePage></HomePage>} exact={true} />
            <Route exact path="/" element={<HomePage></HomePage>} />
            <Route path='/course/:courseType' element={<CourseHolder></CourseHolder>}/>
            <Route path="/main-post/" element={<MainPost></MainPost>}></Route>
            <Route path="/main-post/:postType" element={<PostListHolder></PostListHolder>}/>
            <Route path="/main-post/:postType/post-details/:id" element={<PostDetails></PostDetails>}/>            
            <Route path="/post-details" element={<PostDetails></PostDetails>}/>
            <Route path="/about" element={<div></div>}/>
            <Route path="/about/:aboutType" element={<AboutHolder></AboutHolder>} />            
            <Route path="/workplace/employee-management" element={<EmployeeManagement></EmployeeManagement>} />
            <Route path="/workplace/account-setting" element={<AccountSetting></AccountSetting>} />
            <Route path="/workplace/post-management" element={<PostManagement></PostManagement>} />
            <Route path="/workplace/chatbot-management" element={<ChatbotManagement></ChatbotManagement>} />
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
