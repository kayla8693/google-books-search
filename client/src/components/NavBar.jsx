import React from "react";
import { AppBar, Typography } from "@material-ui/core";

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">
                React Google Book Search
            </a>
            <a className="nav-link" href="/">
            <button 
                type="button"
                className="btn btn-primary navBtn"
                >
                Search Books
            </button>
            </a>

            <a className="nav-link" href="/saved">
            <button 
                type="button"
                className="btn btn-warning navBtn"
                >
                Saved Books
            </button>
            </a>
            
        </nav>
        // <AppBar position="static">
        //     <Typography variant="h6" className="header">
        //         React Google Books Search
        // </Typography>
        // </AppBar>
    )

}

export default NavBar;