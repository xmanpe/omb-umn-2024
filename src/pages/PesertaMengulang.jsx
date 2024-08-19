import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mengulangData from './daftar-peserta-mengulang/mengulangData';
import './temporary-styles/PesertaMengulangContent.scss';

// import components
import Footer from "../components/footer/Footer";

// import images
import Wave from '../images/waves/Wave One.png';
import Background from '../images/background/Cover.jpeg';
import BungaLotus from '../images/Outline - Bunga Lotus Biru di Atas Air 1 1.png'

// import icons
import ArrowRight from '../images/Arrow/Arrow_Right_MD.png';
import Warning from '../images/Warning/Circle_Warning_White.svg';

const PesertaMengulang = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const divisionMengulang = mengulangData["daftar-peserta"] || [];
    const [selectedYear, setSelectedYear] = useState('');

    const handleYearClick = (year) => {
        if (selectedYear === year) {
            setSelectedYear('');
        } else {
            setSelectedYear(year);
        }
    };

    const filteredSchedule = divisionMengulang.filter(schedule => 
        selectedYear === '' || schedule.room === selectedYear
    ).map(schedule => ({
        ...schedule,
        participants: schedule.participants.filter(participant =>
            participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            participant.nim.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(schedule => schedule.participants.length > 0);

    const years = ["2023", "2022", "2021", "2020"];

    const defaultText = "<ul><li>Silakan bergabung ke dalam grup LINE divisi yang dikirimkan melalui <i>email</i> kalian.</li><li>Sebelum bergabung, pastikan <i>display name</i> kalian merupakan nama asli dan menggunakan <i>profile picture</i> dengan foto diri yang terkini dan wajah terlihat dengan jelas. </li></ul>";
    return (
        <>
            <section className="hero-peserta_section">
                <img className='bunga-lotus' src={BungaLotus} alt="" />
                <div className='hero-peserta_content'>
                    <Link to={{ pathname: '/' }} style={{textDecoration: "none"}}>
                        <div className='back_button' onClick={() => window.history.back()}>
                            <img src={ArrowRight} alt="Left Arrow" />
                            <p>Kembali</p>
                        </div>
                    </Link>
                    <div className='title_divisi'>
                        <div className='left_thing'>
                            <div className='literally_title'>
                                <p>Selamat datang, Pejuang Lotus Biru!</p>
                                <h1>Berikut daftar mahasiswa aktif yang telah berhasil terdaftar ke dalam OMB UMN 2024.</h1>
                            </div>
                        </div>
                        {/* <div className='right_thing'>
                            <p dangerouslySetInnerHTML={{ __html: defaultText }}></p>
                        </div> */}
                    </div>
                </div>
                <img className='wave' src={Wave} alt="The Wave" />
            </section>
            <section className='daftar-peserta_section'>
                <div className='note-search'>
                    <div className='search_wrapper'>
                        <input 
                            type="text" 
                            placeholder='🔍  Klik untuk mencari nama atau NIM...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className='right-input'>
                            {years.map((year, index) => (
                                <button 
                                    key={year}
                                    className={`year-button ${selectedYear === year ? 'active' : ''} ${index === 0 ? 'far-left' : ''} ${index === years.length - 1 ? 'far-right' : ''}`}
                                    onClick={() => handleYearClick(year)}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                    {filteredSchedule.map((schedule, index) => (
                        <div className='daftar-peserta_content' key={index}>
                            <div className='top_thing'>
                                <p>{schedule.room}</p>
                                <h1>{schedule.date}</h1>
                            </div>
                            <div className='peserta_wrapper'>
                                {schedule.participants.map((participant, idx) => (
                                    <div className='each_peserta' key={idx}>
                                        <p className='name'>{participant.name}</p>
                                        <p className='time-nim'>{participant.nim}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />                      
        </>
    );
}
 
export default PesertaMengulang;