//imports
import React from "react";
import {Link} from "react-router-dom";
// function 

function Menu() {
    const [showMenu, setShowMenu] = React.useState(false);

    return(
        <div className="menu-page">
            <span className="project-title">Fere Project</span>
            <div className="menu-small">
                <span 
                    className="menu-button"
                    onClick={() => setShowMenu(!showMenu)}
                    onHov
                >
                    Menu
                </span> 
                {showMenu && <div className="menu-drop">
                    <Link className="menu-item" to="/">Home</Link>
                    <Link className="menu-item" to="/resources">Resources</Link>
                    <Link className="menu-item" to="/programs">Programs and Scholarships</Link>
                    <Link className="menu-item" to="/donations">Support Fere Project</Link>
                    <Link className="menu-item" to="/background">Background</Link>
                    <Link className="menu-item" to="/contact">Contact Us</Link>
                </div>}
            </div>
            <div className="menu-wide">
                <Link className="menu-item"  to="/">Home</Link>
                <Link className="menu-item" to="/resources">Resources</Link>
                <Link className="menu-item" to="/programs">Programs and Scholarships</Link>
                <Link className="menu-item" to="/donations">Support Fere Project</Link>
                <Link className="menu-item" to="/background">Background</Link>
                <Link className="menu-item" to="/contact">Contact Us</Link>
            </div>
        </div>
    );
}

export default Menu;