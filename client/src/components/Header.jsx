import React from "react";
import { AppBar, Typography } from "@material-ui/core";

function Header() {
    return (
        <AppBar position="static">
            <Typography variant="h6" className="header">
                React Google Books Search
        </Typography>
        </AppBar>
    )

}

export default Header;