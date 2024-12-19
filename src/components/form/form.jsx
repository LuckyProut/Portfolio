import React from 'react';
import '../../style/form.scss';

function ContactForm() {
    return (
    <div className="form__container">
      <form
        action="https://formspree.io/f/xvgojlqp" 
        method="POST"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <h2>Entrer en contact</h2>
        <p className='form__text__description'>Si vous avez des questions, une opportunité d'emploi ou un projet en tête, n'hésitez pas à me contacter. Je reste à votre disposition pour toutes demandes.</p>
        <label htmlFor="name">Nom :</label>
        <input className='info__input' type="text" id="name" name="name" required />
            <br />
        <label htmlFor="email">E-mail :</label>
        <input className='info__input' type="email" id="email" name="email" required />
            <br />
        <label htmlFor="message">Message :</label>
        <textarea className='info__message' id="message" name="message" rows="5" required />
            <br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
    );
  }
  
  export default ContactForm;
  
