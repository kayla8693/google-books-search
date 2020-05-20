import React, { useState, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import Main from "./components/Main";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import SubmitBtn from "./components/SubmitBtn";
import { BookList, BookListItem } from "./pages/SearchPg";
import { Container, Row, Col } from "./components/Grid";
import API from "./utils/API";
// import NoResults from "./pages/NoResults";


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
    .then(res => setBooks(res.data.items))
    .catch(err => console.log(err));
  }

  return (

    <Router>
      <Header />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <SearchBox
                    name="BookSearch"
                    value={bookSearch}
                    onChange={handleInputChange}
                    placeholder="Search for a Book"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <SubmitBtn
                    onClick={handleFormSubmit}
                    type="success"
                    className="input-lg">
                      Search
                    </SubmitBtn>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-10">
            {/* {!books.length ? (
              <h1
              className="text-center">No Books to Display</h1>
            ) : ( */}
              <BookList>
                {books.map(book => {
                  return (
                    <BookListItem
                    key={book.title}
                    title={book.volumeInfo.title}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    image={book.volumeInfo.imageLinks.smallThumbnail}
                    authors={book.volumeInfo.authors}
                    />
                  );
                })}
              </BookList>
            
          </Col>
        </Row>
      </Container>

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
