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
import DraftCom from './components/DraftComponent/DraftCom';
import LeftMenu from './components/LeftMenu/LeftMenu';
import EmployeeManagement from "./pages/EmployeeManagement/EmployeeManagement"
import AccountSetting from "./pages/AccountSetting/AccountSetting"
import PostManagement from "./pages/PostManagement/PostManagement"
import ChatbotManagement from "./pages/ChatbotManagement/ChatbotManagement"
import TestAva from "./assets/icons/staff-img.png"
import NavigationBar from './components/Header/NavigationBar';


const history = createBrowserHistory();
const AAA = () => (
  <div>AAA - <Link to="/ ">Home</Link></div>
)
const BBB = () => (
  <div>BBB</div>
)

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
            <Route path="/aaa" element={<AAA></AAA>} />
            <Route path="/bbb" element={<BBB></BBB>} />
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
