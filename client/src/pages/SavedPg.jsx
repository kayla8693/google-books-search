import React, { useState, useEffect } from "react";

import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
// import { Container, Row, Col } from "../components/Grid";
import { BookList, SavedItem } from "../components/BookList";

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
            {savedBooks.map(book => {
                console.log(book)

                return (
                    <SavedItem
                    key={book.id}
                    title={book.volumeInfo.title}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    authors={book.volumeInfo.authors.join(", ")}
                    />
                )
                })}
            </BookList>
        </>
    );
}

export default SavedPg;
