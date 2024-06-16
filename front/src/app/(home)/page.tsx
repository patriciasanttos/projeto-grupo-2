import React from 'react';
import Style from './page.module.scss';
import Footer from '../../components/Footer/Footer'
import Image from 'next/image';
import site from './site.png';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '350px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Image
          src={site}
          alt="Picture of the author"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
