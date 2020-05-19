import React from "react";
import TextField from "@material-ui/core/TextField";

function SearchBar() {
    return (
        <form noValidate autoComplete="off">
            <TextField id="outlined-search" label="Search" type="search" variant="outlined" />
        </form>
    )
};

export default SearchBar;
