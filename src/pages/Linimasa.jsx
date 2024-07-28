import React from 'react';

import Header from '../components/header/Header';
import Timeline from '../components/timeline/Timeline';
import Footer from '../components/footer/Footer';

const Linimasa = () => {
    const top = `Linimasa`;
    const bottom = `Selamat datang di laman linimasa!`;

    return (
        <>
        <Header 
            top={top}
            bottom={bottom}
        />
        <Timeline />
        <Footer />
        </>
    );
}
 
export default Linimasa;