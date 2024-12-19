import '../../style/card.scss'
import { Link } from 'react-router-dom'

function Card({ title, cover, id }) {
    return (
            <Link to={`/Projet/${id}`} key={id} className='project__card'>
               <figure className='project__card__figure'>
                  <img className='project__card__image' src={cover} alt={title}/>        
                  <figcaption className='project__card__title'>{title}</figcaption>                 
               </figure>
            </Link>
         );
}
 
export default Card