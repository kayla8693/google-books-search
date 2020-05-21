import React from "react";
import Button from "./Button";

function SaveBtn({ children }) {
    return (
        <Button
        type="primary"
        className="input-lg"
        // onClick={props.handleSaveBook}
        >
            Save Book
            {children}
        </Button>
    );
}

export default SaveBtn;
