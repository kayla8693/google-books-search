import React, { useState } from "react";

import { Container, Row, Col } from "../components/Grid";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";
// import SaveBtn from "../components/SaveBtn";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";




function SearchPg() {
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

  const handleSaveBook = event => {
      event.preventDefault();
      console.log(books);
      console.log("clicked");
      let savedBook = books.filter(book => book.id === event.target.id)
      console.log(savedBook);
      savedBook = savedBook[0];
      API.saveBook(savedBook)
      .then(() => {alert(`${savedBook.title} was saved`)})
      .catch(err => console.log(err));
  }

  return (

<>
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
                    <Button
                    onClick={handleFormSubmit}
                    type="success"
                    className="input-lg">
                      Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-10">
              <BookList>
                {books.map(book => {
                  return (
                      <>
                    <BookListItem
                    key={book.id}
                    title={book.volumeInfo.title}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    authors={book.volumeInfo.authors.join(", ")}
                    handleSaveBook={handleSaveBook}
                    />
                    <br></br>
                    </>
                    
                  );
                })}
              </BookList>
            
          </Col>
        </Row>
      </Container>
      </>


  );
}

export default SearchPg;




// import Image from "../components/Image";

// export function BookList({ children }) {
//     return <ul className="list-group">{children}</ul>;
// }

// export function BookListItem({
//     title,
//     authors,
//     description,
//     image,
//     link
// }) {
//     return (
//         <li className="list-group-item">
//             <Container>
//                 <Row>
//                     <Col size="xs-4 sm-2">
//                         <img src={image} alt={title} />
//                     </Col>
//                     <Col size="xs-8 sm-9">
//                         <h3>{title} by {authors}</h3>
//                         <p>{description}</p>
//                         <a rel="noreferrer noopener" target="blank" href={link}>
//                             Go to Book!
//                         </a>
//                     </Col>
//                 </Row>
//             </Container>
//         </li>
//     );
// }
