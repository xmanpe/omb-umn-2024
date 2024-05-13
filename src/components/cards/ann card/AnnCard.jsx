import React, { useState, useEffect } from 'react';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';
import Calendar from '../../../images/Calendar/Calendar.svg';

// import component
import InformationModal from './information modal/InformationModal';

const AnnCard = () => {
    const [countdown, setCountdown] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Set the target date for the countdown
        const targetDate = new Date('2024-05-19T00:00:00'); // Adjusted to midnight on May 19, 2024, local time
    
        // Update the countdown every second
        const interval = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = targetDate.getTime() - currentDate.getTime();
    
            // Check if the target date has passed
            if (timeDifference <= 0) {
                clearInterval(interval);
                setCountdown('Countdown Ended');
            } else {
                // Calculate remaining time
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
                // Format the countdown string
                const countdownString = `${days} Hari ${hours} Jam ${minutes} Menit`;
                setCountdown(countdownString);
            }
        }, 1000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);
    

    const handleScrollToDivisi = () => {
        const divisiSection = document.getElementById('divisi_section');
        if (divisiSection) {
            divisiSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
        {showModal && <InformationModal onClose={toggleModal} />}
            <div className="ann_card">
                <div className='text_section'>
                    <div className='title_and_desc'>
                        <h3>PENDAFTARAN PESERTA OMB UMN 2024!</h3>
                        <p>Silakan klik tombol berikut untuk menuju ke laman pendaftaran.</p>
                    </div>
                    <div className='schedule'>
                        <div className='date'>
                            <img src={Calendar} alt="Calendar Icon" />
                            <p>14–18 Mei 2024</p>
                        </div>
                        <p className='countdown'>{countdown}</p>
                    </div>
                </div>
                <div className='cta_button'>
                    {/* <button onClick={handleScrollToDivisi}>Daftar
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button> */}
                    <button onClick={toggleModal}>Daftar
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default AnnCard;
