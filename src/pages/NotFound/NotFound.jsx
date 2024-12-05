import React from 'react';
import { Link } from "react-router-dom";
import "../../style/error.scss";
import Where from "../../img/where.png";

const NotFound = () => {
  return (
    <div className="error__container">
			<img src={Where} alt="404 Not Found" className="error__container__image" />
			<Link to="/" className="error__container__home">
				Retourner sur la page d’accueil
			</Link>
		</div>
  );
};

export default NotFound;
