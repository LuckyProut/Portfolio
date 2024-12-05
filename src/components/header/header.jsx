import React from "react";
import "../../style/header.scss";
import logoHeader from "../../img/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header id="header" className="header__container">
            <NavLink to="/"><img src={logoHeader} alt="Logo"/></NavLink>
            <nav>
                <NavLink to="/About" className="header__container__site lien-menu">À Propos</NavLink>
                <NavLink to="/" className="header__container__site lien-menu">Projets</NavLink>
            </nav>
        </header>
    );
}

export default Header;