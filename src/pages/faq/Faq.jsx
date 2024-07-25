import React from 'react';
import  { useState } from 'react';
import './Faq.scss';

//import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Faq from '../../components/faq/Faq';

const PelaksanaanRevisi = () => {
    return (
        <>
            <Header 
                top="<i>Frequently Asked Questions</i>"
                bottom={<>Selamat datang di laman FAQ!</>}
            />
            <Faq />
            <Footer />
        </>
    );
}

export default PelaksanaanRevisi;