import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/general/logo.png";

export default function Header(){
    return(
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Kasa-logo" />
            </Link>
            <nav>
                <Link to="/">Accueill</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
}