import React from 'react';
import Portrait from '../../img/portrait.png'
import '../../style/about.scss';
import ContactForm from '../../components/form/form';


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
            En l'espace de 6 mois, j'ai réussi à me former dans plusieurs domaines, que ça soit du côté du front-end (HTML, CSS, JS, etc...) ou bien du back-end (Node.js, Express, Base de données, etc...).
            Je continue, en autodidacte, à me former à de nouvelles technologies qui me permettraient de continuer dans ma lancer d'évolution dans mes compétences.
          </p>
        </div>
      </div><ContactForm /></>
    );
  };
  
  export default About;
