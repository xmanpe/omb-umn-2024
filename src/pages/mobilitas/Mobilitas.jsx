import React from 'react';
import  { useState } from 'react';

//import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Tikum from '../../components/tikum/Tikum';
import ShuttleBus from '../../components/shuttle-bus/ShuttleBus';

const Mobilitas = () => {
    const top = `Mobilitas Peserta`;
    const bottom = `Selamat datang di laman mobilitas peserta!`;

    return (
        <>
            <Header 
                top={top}
                bottom={bottom}
            />
              <Tikum />
              <ShuttleBus />
            <Footer />
        </>
    );
}
 
export default Mobilitas;