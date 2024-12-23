import React from "react";
import "../../style/header.scss";
import logoHeader from "../../img/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header id="header" className="header__container">
            <NavLink to="/Home"><img src={logoHeader} alt="Logo site Luc Garrouste"/></NavLink>
            <nav>
                <NavLink to="/Home" className="header__container__site lien-menu">Projets</NavLink>
                <NavLink to="/About" className="header__container__site lien-menu">À Propos</NavLink>
                <NavLink to="/Contact" className="header__container__site lien-menu">Contact</NavLink>
            </nav>
        </header>
    );
}

export default Header;