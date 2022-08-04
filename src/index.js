import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer";
import Home from "./CommonComponents/Home";
import About from "./CommonComponents/About";
import ContactUs from "./CommonComponents/ContactUs";
// import Login from "./CommonComponents/Login";
import Signup from "./CommonComponents/Signup";

import USRGenerator from "./AutheringInterfaceComponents/USRGenerator";

//import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Usrgen from "./AutheringInterfaceComponents/Usrgen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/login" element={<Usrgen />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/usr/generator" element={<USRGenerator />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
);

//reportWebVitals();
