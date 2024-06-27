import React from 'react';
import './TentangOMB.scss';

// import components
import Header from '../../components/header/Header';

// import pages
import NilaiNilai from '../../components/nilai-nilai/NilaiNilai';
import Mars from '../../components/mars/Mars'
import VisiMisi from '../../components/visi-misi/VisiMisi';
import Footer from '../../components/footer/Footer';
import FilosofiLogo from '../../components/filosofi-logo/FilosofiLogo';

const TentangOMB = () => {
    return (
        <>
            <Header 
                top="Lotus Biru merajut mimpi masa depan,"
                bottom={<>Selamat datang di <i>page</i> tentang OMB!</>}
            />
            <FilosofiLogo />
            <NilaiNilai />
            <VisiMisi />
            <Mars/>
            <Footer />
        </>
    );
}
 
export default TentangOMB;