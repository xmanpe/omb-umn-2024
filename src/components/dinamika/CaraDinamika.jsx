import React, { useState } from 'react';
import './Dinamika.scss';
import X from '../../images/Menu/Close_MD.svg'
import TutorialDinamika from '../../videos/TutorialDinamika.mp4';

const CaraDinamika = ({ onClose }) => {
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
    <div className="overlay" onClick={handleClose}>
        <div className="modal">
            <div className='close_button' onClick={handleClose}>
                <img src={X} alt="Close button" />
            </div>
            <div className='cara_section'>
                <video controls>
                    <source src={TutorialDinamika} type="video/mp4" />
                </video>
                <div className='how-to'>
                    <h1>Cara berdinamika:</h1>
                    <ol>
                        <li>Ketuk tombol "Mulai" untuk berdinamika.</li>
                        <li>Agar mendapatkan poin, gabungkan objek yang serupa untuk menciptakan objek baru.</li>
                        <li>Jawab pertanyaan yang muncul untuk menambah poin dalam berdinamika. Pertanyaan akan terlihat setiap menggabungkan objek baru <i>(TRUE or FALSE)</i>.</li>
                        <li>Jawablah pertanyaan dengan tepat! Karena jawaban yang benar akan mendapatkan 30 poin tambahan.</li>
                        <li>Susun strategi untuk menciptakan Lotus Biru tanpa melampaui garis pembatas yang ada.</li>
                    </ol>
                    <div className='reminder-sosmed'>
                        <p>Bagikan hasil poin yang kamu dapatkan ke Instagram masing-masing dengan menggunakan hastag <b>#RembakaAninditaOMBUMN2024</b>.</p>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default CaraDinamika;