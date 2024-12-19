import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Data from '../../data/data.json';
import Gallery from '../../components/gallery/gallery';
import Description from '../../components/description/description';
import Competence from '../../components/competence/competence';
import ButtonGithub from '../../components/button/github';
import ButtonSite from '../../components/button/site';
import github from "../../img/github2.png";
import siteweb from "../../img/www.webp";
import '../../style/project.scss';


function Projet() {
  const { id } = useParams(); 
  const project = Data.find((item) => item.id === id);
  const navigate = useNavigate();

 
  useEffect(() => {
    if (!project) {
        navigate('/NotFound');
    }
}, [project, navigate]);
if (!project) return null;

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
    <div className='button__site'>
        <ButtonGithub
        github={project.github}
        image={github} />
        <ButtonSite
        siteurl={project.siteurl}
        image={siteweb} />
        </div>
    </>
);
}   

export default Projet;
