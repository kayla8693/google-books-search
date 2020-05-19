import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function SearchBar() {
    return (
        <form noValidate autoComplete="off">
            <TextField id="outlined-search" label="Search" type="search" variant="outlined" />
            <Button
            variant="contained" color="primary"
            type="button"
            value="submit"
            id="submit">Submit
            </Button>
        </form>
    )
};

export default SearchBar;
