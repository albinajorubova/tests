import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/globals.scss';
import './styles/reset.scss';
import "./App.css";

import Home from "./components/pages/Home/Home";
import Signin from "./components/pages/Signin/Signin";
import Signup from "./components/pages/Signup/Signup";
import SnackbarProvider from "./components/common/SnackbarProvider/SnackbarProvider";

const NotFound = () => {
  return (
    <div>
      <h1>Страница не найдена</h1>
      <p>Извините, запрошенная вами страница не найдена.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
      <SnackbarProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        </SnackbarProvider>
      </div>    
    </Router>
  );
};

export default App;
