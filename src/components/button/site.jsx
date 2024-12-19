import React from 'react';
import '../../style/button.scss';

const ButtonSite = ({ siteurl, image }) => {
  return (
    <button className='button__url'
      onClick={() => window.open(siteurl, '_blank')} 
    >
        <img src={image}/>
    </button>
  );
};



export default ButtonSite;