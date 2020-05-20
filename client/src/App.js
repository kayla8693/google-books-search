import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import SearchPg from "./pages/SearchPg";



// import logo from "./logo.svg";
import "./App.css";

function App() {



  return (

    <Router>
      <Header />
      <SearchPg />
    
    </Router>
    // <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Welcome to React</h2>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
  );
}


export default App;
