import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/general/logo.png";

export default function Header({url}){  
    return(
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Kasa-logo" />
            </Link>
            <nav>
            {url === '/' ? <Link to="/" className="current">Accueill</Link> : 
            <Link to="/">Accueill</Link>}
                
            {url === '/about' ? <Link to="/about" className="current">A propos</Link> : 
            <Link to="/about">A propos</Link>}
            </nav>
        </header>
    )
}