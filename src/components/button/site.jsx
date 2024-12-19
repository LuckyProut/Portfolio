import React from 'react';
import '../../style/button.scss';

const ButtonSite = ({ siteurl, image }) => {
  return (
    <button
      onClick={() => window.open(siteurl, '_blank')} 
    >
        <img src={image}/>
    </button>
  );
};



export default ButtonSite;