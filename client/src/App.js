import React, { useState, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import Main from "./components/Main";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { BookList, BookListItem } from "./pages/Search";
import { Container, Row, Col } from "./components/Grid";
import API from "./utils/API";


// import logo from "./logo.svg";
import "./App.css";

function App() {

  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    API.search(bookSearch)
    .then(res => setBooks(res.items))
    .catch(err => console.log(err));
  }


  return (

    <Router>
      <Header />
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
