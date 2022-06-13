import logo from "../../assets/general/footer_logo.png";

export default function Footer(){
    return(
        <footer className="footer">
            <img src={logo} alt='kasa-logo' />
            <span className="copyright">&copy; 2022 Kasa. All rights reserved</span>
        </footer>
    )
}