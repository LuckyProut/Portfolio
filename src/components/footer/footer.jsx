import React from "react";
import "../../style/footer.scss";
import logoFooter from "../../img/LogoFooter.png";
import Linkedin from "../../img/linkedin.webp";
import github from "../../img/github.webp";

function Footer() {
    return(
        <footer>
            <div id="footer-container">
                <img src={logoFooter} alt="Logo site Luc Garrouste" />
                <a href="https://www.linkedin.com/in/luc-garrouste-728425169/" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <img src={Linkedin} alt="Logo Linkedin" className="linkedin__image"/>
                </a>
                <a href="https://github.com/LuckyProut" target="_blank" rel="noopener noreferrer" className="github">
                <img src={github} alt="logo github" className="mail__image"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;