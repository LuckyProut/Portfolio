import React from "react";
import "../../style/footer.scss";
import logoFooter from "../../img/LogoFooter.png";

function Footer() {
    return(
        <footer>
            <div id="footer-container">
                <img src={logoFooter} alt="Logo" />
            </div>
        </footer>
    );
}

export default Footer;