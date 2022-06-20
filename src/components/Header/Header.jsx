import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/general/logo.png";

export default function Header(){  
    return(
        <header className="header">
            <NavLink to="/" >
                <img src={logo} alt="Kasa-logo" />
            </NavLink>
            <nav> 
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "current" : undefined
            }>Accueill</NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              isActive ? "current" : undefined
            }>A propos</NavLink>
            </nav>
        </header>
    )
}