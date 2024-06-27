import React from 'react';
import './Pelaksanaan.scss';

//import components
import Header from '../../components/header/Header';

const Pelaksanaan = () => {
    return (
        <>
            <Header 
                top="Lotus Biru merajut mimpi masa depan,"
                bottom={<>Selamat datang di <i>page</i> pelaksanaan!</>}
            />
        </>
    );
}
 
export default Pelaksanaan;