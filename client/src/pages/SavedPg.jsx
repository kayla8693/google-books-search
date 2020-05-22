import React, { useState, useEffect } from "react";

import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";

function SavedPg() {

    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, [])

    // function loadBooks() {
    //     API.getBooks("/api/books")
    //     .then(res => 
    //         setSavedBooks(res.data)
    //     )
    //     .catch(err => console.log(err));
    // };

    const loadBooks = () => {
        API.getBooks("/api/books")
        .then(res => 
            setSavedBooks(res.data)
        )
        .catch(err => console.log(err));
    }


    // function handleDeleteBook(id) {
    //     API.deleteBook(id)
    //     .then(res => loadBooks())
    //     .catch(err => console.log(err));
    // };


    // const handleSaveBook = id => {
    //     const book = books.find(book => book.id === id);
    
    //     API.saveBook({
    //         // id: book.id,
    //         title: book.volumeInfo.title,
    //         authors: book.volumeInfo.authors,
    //         description: book.volumeInfo.description,
    //         link: book.volumeInfo.infoLink,
    //         image: book.volumeInfo.imageLinks.thumbnail
    //     })
    //     .then(() => {alert(`${book.volumeInfo.title} was saved to your library!`)}
        
    //     );
    // }




    const handleDeleteBook = id => {
        // const book = savedBooks.find(book => book._id === _id);
        console.log(id);
        API.deleteBook(id)
        .then((res) => {loadBooks();
        console.log("book deleted")})
        .catch(err => console.log(err));
    }



    return (
        <>
            <h2>Your Saved Books</h2>
            <BookList>

            {savedBooks.map(book => (

                    <BookListItem
                    key={book._id}
                    title={book.title}
                    description={book.description}
                    link={book.link}
                    image={book.image}
                    authors={book.authors.join(", ")}
                    Button={() => (
                        <button
                        onClick={() => handleDeleteBook(book._id)}
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
