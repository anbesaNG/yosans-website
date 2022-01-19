//imports
import React from "react";
import {Link} from "react-router-dom";
// function 

function Menu() {
    const [showMenu, setShowMenu] = React.useState(false);

    return(
        <div className="menu-page">
            <span className="project-title">Fere Project</span>
            <div className="menu">
                <span 
                    className="menu-button"
                    onClick={() => setShowMenu(!showMenu)}
                    onHov
                >
                    Menu
                </span> 
                {showMenu && <div className="menu-drop">
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
                        <Link to="/donations">Support Fere Project</Link>
                    </span>
                    <span className="menu-item">
                        <Link className="menu-item" to="/background">Background</Link>
                    </span>
                    <span className="menu-item">
                        <Link className="menu-item" to="/contact">Contact Us</Link>
                    </span>
                </div>}
            </div>
        </div>
    );
}

export default Menu;