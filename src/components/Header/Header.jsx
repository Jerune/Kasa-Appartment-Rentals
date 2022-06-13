import logo from "../../assets/general/logo.png";

export default function Header(){
    return(
        <header className="header">
            <a href="/">
                <img src={logo} alt="Kasa-logo" />
            </a>
            <nav>
                <a href="/">Accueill</a>
                <a href="/">A Propos</a>
            </nav>
        </header>
    )
}