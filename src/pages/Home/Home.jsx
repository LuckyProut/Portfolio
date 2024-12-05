import React from 'react';
import Banner from '../../components/banner/banner';
import bannerImg from "../../img/bannerImg.gif"
import Card from '../../components/card/card';
import Data from '../../data/data.json'
import '../../style/cardarray.scss'
import '../../style/home.scss';

const Home = () => {


  return (
    <>
    <div className='top__banner'>
      <Banner 
        picture={bannerImg}
      />
      <h1 className='main__title'>Développement Web<br />Front-End<br/>Back-End<br />Optimisation Web</h1>
      </div>
      <h2 className='project__title'>Réalisations</h2>
      <section className='location__background'>
        {Data.map((locationData) => (
          <Card
            key={locationData.id}
            id={locationData.id}
            title={locationData.title}
            cover={locationData.cover}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
