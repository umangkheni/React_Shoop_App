import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Assets/Style.css'
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } 
        from "react-router-dom";
// All Page
import Header from  './page/Header';
import Home from  './page/Home';
import About from  './page/About';
import Product from './page/AllProbuct'
import Login from './page/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Router>

    <Header/>

    <Routes>  

    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/About" element={<About/>}/>
    <Route exact path="/Product" element={<Product/>}/>
    <Route exact path="/Login" element={<Login/>}/>


    </Routes>
    </Router>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
