import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import components
import Footer from "../components/footer/Footer";

// import images
import Wave from '../images/waves/Wave One.png';
import Background from '../images/background/Cover.jpeg';
import BungaLotus from '../images/Outline - Bunga Lotus Biru di Atas Air 1 1.png'

// import icons
import ArrowRight from '../images/Arrow/Arrow_Right_MD.png';
import Warning from '../images/Warning/Circle_Warning_White.svg';

const defaultText = "<ul><li>Silakan bergabung ke dalam grup LINE divisi yang dikirimkan melalui <i>email</i> kalian.</li><li>Sebelum bergabung, pastikan <i>display name</i> kalian merupakan nama asli dan menggunakan <i>profile picture</i> dengan foto diri yang terkini dan wajah terlihat dengan jelas. </li></ul>";

const PesertaMengulang = () => {
    const [searchQuery, setSearchQuery] = useState('');
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
                            <img src={BungaLotus} alt="" />
                            <div className='literally_title'>
                                <p>Daftar Nama-Nama</p>
                                <h1>Peserta Mengulang</h1>
                            </div>
                        </div>
                        <div className='right_thing'>
                            <p dangerouslySetInnerHTML={{ __html: defaultText }}></p>
                        </div>
                    </div>
                </div>
                <img className='wave' src={Wave} alt="The Wave" />
            </section>
            <section className='peserta-mengulang_section'>
                <div className='note-search'>
                    <div className='search_wrapper'>
                        <input 
                            type="text" 
                            placeholder='Klik untuk mencari nama atau NIM...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    {/* {filteredSchedule.map((schedule, index) => (
                        <div className='peserta-mengulang_content' key={index}>
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
                    ))} */}
                </div>
            </section>
            <Footer />                      
        </>
    );
}
 
export default PesertaMengulang;