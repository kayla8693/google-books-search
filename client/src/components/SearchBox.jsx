import React from "react";
// import TextField from "@material-ui/core/TextField";

function SearchBox(props) {
    return (
        <div className="input-group input-group-lg">
            <input 
            className="form-control"
            type="text"
            {...props}/>
        </div>
    )
};

export default SearchBox;
