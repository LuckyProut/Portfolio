import React from 'react';
import '../../style/button.scss';

const ButtonSite = ({ siteurl, image }) => {
  if (!siteurl || !image) {
    console.warn('Props "siteurl" or "image" is missing in ButtonSite');
    return null; // Ne rien afficher si les props sont manquantes
  }

  return (
    <button
      className="button__url"
      onClick={() => window.open(siteurl, '_blank')}
    >
      <img src={image} alt="Button icon" />
    </button>
  );
};




export default ButtonSite;