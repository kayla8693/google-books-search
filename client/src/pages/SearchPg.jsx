import React, { useState } from "react";

import { Container, Row, Col } from "../components/Grid";
import SearchBox from "../components/SearchBox";
import SubmitBtn from "../components/SubmitBtn";
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
