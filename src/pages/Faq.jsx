import React from 'react';

//import components
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Faq from '../components/faq/Faq';

const PelaksanaanRevisi = () => {
    const top = `<i>Frequently Asked Questions</i>`;
    const bottom = `Selamat datang di laman FAQ!`;

    return (
        <>
            <Header 
                top={top}
                bottom={bottom}
            />
            <Faq />
            <Footer />
        </>
    );
}

export default PelaksanaanRevisi;