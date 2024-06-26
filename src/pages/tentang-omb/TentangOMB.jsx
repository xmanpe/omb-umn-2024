import React from 'react';
import './TentangOMB.scss';

// import components
import Header from '../../components/header/Header';

const TentangOMB = () => {
    return (
        <>
            <Header 
                top="Lotus Biru merajut mimpi masa depan,"
                bottom={<>Selamat datang di <i>page</i> tentang OMB!</>}
            />
        </>
    );
}
 
export default TentangOMB;