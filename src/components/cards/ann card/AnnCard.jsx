import React, { useState, useEffect } from 'react';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';
import Calendar from '../../../images/Calendar/Calendar.svg';

const AnnCard = () => {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        // Set the target date for the countdown
        const targetDate = new Date('2024-02-17T23:59:59Z');

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
                const countdownString = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
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

    return (
        <div className="ann_card">
            <div className='text_section'>
                <div className='title_and_desc'>
                    <h3>SELAMAT UNTUK PEJUANG YANG LOLOS KE TAHAP WAWANCARA!</h3>
                    {/* <p>Klik tombol ini untuk mengetahui informasi lebih lanjut.</p> */}
                </div>
                {/* <div className='schedule'>
                    <div className='date'>
                        <img src={Calendar} alt="Calendar Icon" />
                        <p>7 - 17 Februari 2024</p>
                    </div>
                    <p className='countdown'>{countdown}</p>
                </div> */}
            </div>
            <div className='cta_button'>
                <button onClick={handleScrollToDivisi}>Cek Jadwal
                    <img src={ArrowRight} alt="Arrow Icon" />
                </button>
            </div>
        </div>
    );
}

export default AnnCard;
