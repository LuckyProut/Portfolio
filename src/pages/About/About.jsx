import React from 'react';
import Portrait from '../../img/portrait.png'
import sassIMG from '../../img/sass.webp'
import htmlIMG from '../../img/HTML5.webp'
import cssIMG from  '../../img/CSS3.webp'
import nodeIMG from  '../../img/Node.webp'
import reactIMG from  '../../img/react.webp'
import nosqlIMG from  '../../img/NoSql.png'
import jsIMG from  '../../img/js.webp'
import '../../style/about.scss';


const About = () => {
    return (
      <><div className='about__container'>
        <img className='about__image' src={Portrait} alt="Portrait" />
        <div className='about__text'>
          <h1 className='about__title'>À Propos</h1>
          <p>
            Bonjour, je m'appelle Luc et je suis un jeune développeur web.
            Après avoir travaillé pendant presque 10 ans dans la restauration, j'ai pris la décision d'entamer une reconversion professionnelle en débutant une formation visant à m'aider à atteindre mes objectifs.
          </p>
          <p>
            En l'espace de 6 mois, grâce à la formation Développeur Web d'OpenClassroom, j'ai réussi à me former dans plusieurs domaines, que ça soit du côté du front-end (HTML, CSS, JS, etc...) ou bien du back-end (Node.js, Express, Base de données, etc...).
            Je continue, en autodidacte, à me former à de nouvelles technologies qui me permettraient de continuer dans ma lancer d'évolution dans mes compétences.
          </p>
        </div>
      </div>
      <h2 className='competence__title'>Mes Compétences</h2>
      <div className='competence'>
        <div className='competence__figure'>
          <img src={htmlIMG} alt='logo HMTL5'></img>
          <p className='competence__name'>HTML</p>
        </div>
        <div className='competence__figure'>
          <img src={cssIMG} alt='logo CSS3'></img>
          <p className='competence__name'>CSS</p>
        </div>
        <div className='competence__figure'>
          <img src={jsIMG} alt='logo JavaScript'></img>
          <p className='competence__name'>JavaScript</p>
        </div>
        <div className='competence__figure'>
          <img src={reactIMG} alt='logo React.js'></img>
          <p className='competence__name'>React.js</p>
        </div>
        <div className='competence__figure'>
          <img src={sassIMG} alt='logo SASS'></img>
          <p className='competence__name'>SASS</p>
        </div>
        <div className='competence__figure'>
          <img src={nodeIMG} alt='logo NODE.js'></img>
          <p className='competence__name'>Node.js</p>
        </div>
        <div className='competence__figure'>
          <img src={nosqlIMG} alt='logo NoSQL'></img>
          <p className='competence__name'>NoSQL</p>
        </div>
        </div></>
    );
  };
  
  export default About;
