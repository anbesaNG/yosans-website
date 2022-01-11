//imports
import React from "react";
import {Link} from "react-router-dom";
// function 

function Menu() {
    return(
        <div className="menu">
            <span className="menu-item">
                <Link to="/">Home</Link>
            </span>
            <span className="menu-item">
                <Link to="/resources">Resources</Link>
            </span>
            <span className="menu-item">
                <Link to="/donations">Donations</Link>
            </span>
        </div>
    );
}

export default Menu;