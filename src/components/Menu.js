//imports
import React from "react";
import {Link} from "react-router-dom";
// function 

function Menu() {
    return(
        <div className="menu-page">
            <span className="project-title">Fere Project</span>
            <div className="menu">
                <span className="menu-item">
                    <Link to="/">Home</Link>
                </span>
                <span className="menu-item">
                    <Link to="/resources">Resources</Link>
                </span>
                <span className="menu-item">
                    <Link to="/programs">Programs and Scholarships</Link>
                </span>
                <span className="menu-item">
                    <Link to="/donations">Support</Link>
                </span>
                <span className="menu-item">
                    <Link className="menu-item" to="/background">Background</Link>
                </span>
            </div>
        </div>
    );
}

export default Menu;