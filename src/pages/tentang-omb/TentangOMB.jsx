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
import Tagline from '../../components/tagline-omb/Tagline';
import ApaItuOMB from '../../components/apa itu omb/ApaItuOMB';
import VisiMisiRevisi from '../../components/visi-misi/VisiMisiRevisi';
import MarsRevisi from '../../components/mars/MarsRevisi';
import InfoPWRevisi from '../../components/informasi-penting-wajib/InfoPWRevisi';
import SwaraBestari from '../../components/swara-bestari/SwaraBestari';

const TentangOMB = () => {
    return (
        <>
            <Header 
                top="Tentang OMB UMN"
                bottom={<>Yuk, kenalan dengan OMB UMN 2024!</>}
            />
            {/* <ApaItuOMB /> */}
            <FilosofiLogo />
            <Tagline/>
            <NilaiNilai />
            {/* <VisiMisi /> */}
            <VisiMisiRevisi/>
            <MarsRevisi />
            {/* <InfoPWRevisi/>
            <SwaraBestari /> */}
            <Footer />
        </>
    );
}
 
export default TentangOMB;