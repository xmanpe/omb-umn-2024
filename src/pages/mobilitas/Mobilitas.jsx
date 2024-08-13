import React from 'react';
import  { useState } from 'react';

import './Mobilitas.scss';

//import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Tikum from '../../components/tikum/Tikum';
import ShuttleBus from '../../components/shuttle-bus/ShuttleBus';
import TitikPemulangan from '../../components/titik-pemulangan/TitikPemulangan';

const Mobilitas = () => {
    const top = `Mobilitas Peserta`;
    const bottom = `Selamat datang di laman mobilitas peserta!`;

    return (
        <>
            <Header 
                top={top}
                bottom={bottom}
            />
            <div className='titik_section'>
                <Tikum />
                <TitikPemulangan />
            </div>
            <ShuttleBus />
            <Footer />
        </>
    );
}
 
export default Mobilitas;