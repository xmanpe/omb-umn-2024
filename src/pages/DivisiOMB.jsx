import React from 'react';

import Header from '../components/header/Header';
import Divisi from '../components/divisi/Divisi';
import Footer from '../components/footer/Footer';

const DivisiOMB = () => {
    const top = `Divisi`;
    const bottom = `Selamat datang di laman divisi!`;
    const veryBottom = 'Klik divisi untuk melihat informasi lebih lanjut.'

    return (
        <>
        <Header 
            top={top}
            bottom={bottom}
            veryBottom={veryBottom}
        />
        <Divisi />
        <Footer />
        </>
    );
}
 
export default DivisiOMB;