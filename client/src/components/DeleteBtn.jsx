import React from "react";

function DeleteBtn(props) {
    return (
        <span className="delete-btn btn btn-danger" {...props} role="button" tabIndex="0">
            Delete
        </span>
    );
}

export default DeleteBtn;
