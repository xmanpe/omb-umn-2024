import React, { useState, useEffect } from 'react';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';
import Calendar from '../../../images/Calendar/Calendar.svg';

const AnnCard = () => {
    const openPage = () => {
        document.getElementById('sio_section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="ann_card hightlight">
                <div className='text_section'>
                    <div className='title_and_desc'>
                        <h3>Formulir Sesi Informasi OMB UMN 2024</h3>
                        <p>Untuk mendapatkan tautan Zoom pada hari Sesi Informasi OMB UMN, peserta WAJIB untuk mengisi formulir sebagai salah satu syarat mengikuti rangkaian OMB UMN 2024!</p>
                    </div>
                </div>
                <div className='cta_button'>
                    <button onClick={openPage}>Lihat
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
                {/* <div className='label'>
                    <p>Penting!</p>
                </div> */}
            </div>
        </>
    );
}

export default AnnCard;
