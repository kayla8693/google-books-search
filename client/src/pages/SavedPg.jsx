import React, { useState, useEffect } from "react";

import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
// import { Container, Row, Col } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";

function SavedPg() {

    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks("/api/books")
        .then(res => 
            setSavedBooks(res.data)
        )
        .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    };

    return (
        <>
            <h2>Your Saved Books</h2>
            <BookList>
                {/* <SavedItem 
                {...savedBooks}
                /> */}
            {savedBooks.map(book => (

                    <BookListItem
                    key={book.id}
                    title={book.title}
                    description={book.description}
                    link={book.link}
                    image={book.image}
                    authors={book.authors.join(", ")}
                    Button={() => (
                        <button
                        onClick={() => deleteBook(book._id)}
                        className="btn btn-danger deleteBtn">
                        Delete
                        </button>
                        
                    )}
                    />
                
            ))}
            </BookList>
        </>
    );
}

export default SavedPg;
