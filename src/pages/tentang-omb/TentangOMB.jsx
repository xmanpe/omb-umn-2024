import React from 'react';
import './TentangOMB.scss';

// import components
import Header from '../../components/header/Header';

// import pages
import NilaiNilai from '../../components/nilai-nilai/NilaiNilai';

const TentangOMB = () => {
    return (
        <>
            <Header 
                top="Lotus Biru merajut mimpi masa depan,"
                bottom={<>Selamat datang di <i>page</i> tentang OMB!</>}
            />
            <NilaiNilai />
        </>
    );
}
 
export default TentangOMB;