import React, { useState } from 'react';
import '../../style/gallery.scss';
import left from "../../img/left.png";
import right from "../../img/right.png";

const Gallery = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? pictures.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const isLastImage = currentIndex === pictures.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    return (
        <><div className="gallery">

            <img
                src={left}
                className="gallery__button gallery__button--left"
                alt="Précédent"
                onClick={goToPrevious} />

            <img src={pictures[currentIndex]} className="gallery__image" />

            <img
                src={right}
                className="gallery__button gallery__button--right"
                alt="Suivant"
                onClick={goToNext} />
        </div>
        </>
      );
};

export default Gallery;