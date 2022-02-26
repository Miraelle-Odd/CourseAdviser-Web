import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redidect,
} from 'react-router-dom';
import { createBrowserHistory } from "history";

import HomePage from "./pages/Home/Home"

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <React.Suspense fallback={<div>Loading....</div>}>
        <Routes>
            <Route path="/home" element = {<HomePage></HomePage>}/>
            <Route exact path="/" element = {<HomePage></HomePage>}>
            </Route>
         </Routes>
        </React.Suspense>
      </Router>

    </div>
  );
}

export default App;
