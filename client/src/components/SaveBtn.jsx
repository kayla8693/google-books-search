import React from "react";

import Button from "./Button";
import API from "../utils/API";

function SaveBtn({ children }) {



    const handleSaveBook = book => {
        // event.preventDefault();
        // console.log(books);
        // console.log("clicked");
        // let savedBook = books.filter(book => book.id === event.target.id)
        // console.log(savedBook);
        // savedBook = savedBook[0];

        let savedBook = {
            title: book.title,
            authors: book.authors,
            description: book.description,
            link: book.link,
            image: book.image
        }
        API.saveBook(savedBook)
        .then(() => console.log("clicked " + savedBook))
        .catch(err => console.log(err));
    }


    return (
        <Button
        type="primary"
        className="input-lg"
        onClick={() => {handleSaveBook()}}
        >
            Save Book
            {children}
        </Button>
    );
}

export default SaveBtn;
