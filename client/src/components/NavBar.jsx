import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
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
    );

}

export default NavBar;