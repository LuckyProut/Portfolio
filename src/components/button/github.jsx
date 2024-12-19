import React from 'react';
import '../../style/button.scss';

const ButtonGithub = ({ github, image }) => {
  return (
    <button
      onClick={() => window.open(github, '_blank')} 
    >
      <img src={image}/>
    </button>
  );
};



export default ButtonGithub;
