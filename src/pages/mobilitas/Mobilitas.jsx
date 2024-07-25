import React from 'react';
import  { useState } from 'react';

//import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Tikum from '../../components/tikum/Tikum';
import ShuttleBus from '../../components/shuttle-bus/ShuttleBus';

const Mobilitas = () => {
    return (
        <>
            <Header 
                top="Mobilitas Peserta"
                bottom={<>Selamat datang di laman mobilitas peserta!</>}
            />
              <Tikum />
              <ShuttleBus />
            <Footer />
        </>
    );
}
 
export default Mobilitas;