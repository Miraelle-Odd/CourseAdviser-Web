import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { createBrowserHistory } from "history";

import HomePage from "./pages/Home/Home";
import DraftCom from './components/DraftComponent/DraftCom';


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
        <DraftCom></DraftCom>
        <Routes>
            <Route path="/home" element={<HomePage></HomePage>} exact={true} />
            <Route exact path="/" element={<HomePage></HomePage>} />
            <Route path="/aaa" element={<AAA></AAA>} />
            <Route path="/bbb" element={<BBB></BBB>} />
          </Routes>
        </React.Suspense>
      </Router>

    </div>
  );
}

export default App;
