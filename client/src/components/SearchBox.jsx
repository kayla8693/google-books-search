import React from "react";
import TextField from "@material-ui/core/TextField";

function SearchBox(props) {
    return (
        <form noValidate autoComplete="off">
            <TextField id="outlined-search" label="Search" type="search" variant="outlined"
            {...props}/>
        </form>
    )
};

export default SearchBox;
