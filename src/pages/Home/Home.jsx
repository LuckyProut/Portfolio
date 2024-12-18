import React from 'react';
import Banner from '../../components/banner/banner';
import bannerImg from "../../img/bannerImg.mp4"
import Card from '../../components/card/card';
import Data from '../../data/data.json'
import '../../style/cardarray.scss'
import '../../style/home.scss';

const Home = () => {


  return (
    <>
    <div className='top__banner'>
      <Banner 
        video={bannerImg}
      />
      </div>
      <h2 className='project__title'>Mes Réalisations</h2>
      <section className='location__background'>
        {Data.map((Data) => (
          <Card
            key={Data.id}
            id={Data.id}
            title={Data.title}
            cover={Data.cover}
            techno={Data.techno}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
