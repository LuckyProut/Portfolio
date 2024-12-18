import '../../style/card.scss'
import { Link } from 'react-router-dom'

function Card({ title, cover, id, techno }) {
    return (
            <Link to={`/Projet/${id}`} key={id} className='location__card'>
               <figure className='location__card__figure'>
                  <img className='location__card__image' src={cover} alt={title}/>        
                  <figcaption className='location__card__title'>{title} <br />{techno}</figcaption>                 
               </figure>
            </Link>
         );
}
 
export default Card