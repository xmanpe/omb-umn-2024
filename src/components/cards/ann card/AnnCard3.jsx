import React, { useState, useEffect } from 'react';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';

const AnnCard = () => {
    const openPage = () => {
        window.location.href = '/atribut-peserta';
    };

    // const openPage = () => {
    //     document.getElementById('swara-bestari').scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <>
            <div className="ann_card">
                <div className='text_section'>
                    <div className='title_and_desc'>
                        <h3>Informasi Atribut Peserta OMB UMN 2024</h3>
                        <p>Klik tombol di bawah ini untuk mengakses Atribut Peserta OMB UMN 2024!</p>
                    </div>
                </div>
                <div className='cta_button'>
                    <button onClick={openPage}>Lihat
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default AnnCard;
