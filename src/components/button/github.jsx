import React from 'react';
import '../../style/button.scss';

const ButtonGithub = ({ github, image }) => {
  return (
    <button className='button__url'
      onClick={() => window.open(github, '_blank')} 
    >
      <img src={image}/>
    </button>
  );
};



export default ButtonGithub;
