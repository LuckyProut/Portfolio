import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/data.json';
import Gallery from '../../components/gallery/gallery';
import Description from '../../components/description/description';
import Competence from '../../components/competence/competence';
import '../../style/project.scss';

function Projet() {
  const { id } = useParams(); 
  const project = Data.find((item) => item.id === id);

 
  if (!project) {
    return <p>Projet introuvable</p>;
  }

  return (
    <>
    <div className='project'>
        <Gallery pictures={project.pictures} />
        <div className='project__text'>
        <Description 
        description={project.description}
        problematique={project.problematique}
        />
        <h2>Compétences développées</h2>
        <div className='project__competence' >  
        <Competence competence={project.competence}/>
        </div>
        </div>
    </div>
    </>
);
}   

export default Projet;
