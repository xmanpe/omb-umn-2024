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
        const targetDate = new Date('2024-08-18T00:00:00+07:00'); // August 18, 2024, at midnight WIB (UTC+7)
        console.log(targetDate.toString());

    
        // Update the countdown every second
        const interval = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = targetDate.getTime() - currentDate.getTime();
    
            // Check if the target date has passed
            if (timeDifference <= 0) {
                clearInterval(interval);
                setCountdown('Pendaftaran telah ditutup!');
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

    const handleScrollToUpacara = () => {
        const upacaraSection = document.getElementById('petugas_upacara_section');
        if (upacaraSection) {
            upacaraSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    // const openPage = () => {
    //     window.location.href = '/daftar-peserta';
    // };

    const openPage = () => {
        document.getElementById('infopw_section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        {showModal && <InformationModal onClose={toggleModal} />}
            <div className="ann_card highlight">
                <div className='text_section'>
                    <div className='title_and_desc'>
                        <h3>Informasi Penting & Wajib!</h3>
                        {/* <p>Klik tombol disamping untuk melihat daftar Peserta OMB UMN 2024 bagi mahasiswa aktif.</p> */}
                            {/* <h3>Formulir Keikutsertaan OMB UMN 2024</h3> */}
                            <p>Formulir Keikutsertaan OMB UMN 2024 <b style={{fontWeight: 600}}>wajib</b> diisi oleh seluruh calon peserta sebagai salah satu syarat mengikuti OMB UMN 2024.</p>
                    </div>
                    {/* <div className='schedule'>
                        <div className='date'>
                            <img src={Calendar} alt="Calendar Icon" />
                            <p>30 Juni - 18 Agustus 2024</p>
                        </div>
                        <p className='countdown'>{countdown}</p>
                    </div> */}
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
