import React from "react";
import {Link, withRouter} from "react-router-dom"
function Nav(){
    const navStyle = {
        color:'dodgerblue'
    };
    return (    
        <div>
            <nav>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/about">
                        <li>About</li>
                    </Link>
                    <Link style={navStyle} to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link style={navStyle} to="/movie">
                        <li>Movie</li>
                    </Link>
                </ul>
            </nav>
        </div>
      );
}
export default Nav;