import React from 'react';
import  { useState } from 'react';
import './PelaksanaanRevisi.scss';

//import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SwaraBestari from '../../components/swara-bestari/SwaraBestari';
import InfoPWRevisi from '../../components/informasi-penting-wajib/InfoPWRevisi';

//import images
import listPelaksanaan from './listPelaksanaan';
import Supergrafis1 from '../../images/supergrafis/SupergrafisPelaksanaan.png'
import Supergrafis2 from '../../images/supergrafis/SupergrafisPelaksanaan2.png'
import Supergrafis3 from '../../images/supergrafis/SupergrafisPelaksanaan3.svg'
import ArrowDropdown from '../../images/Arrow/ArrowDropdown.svg'

const PelaksanaanRevisi = () => {
    const top = `Pelaksanaan`;
    const bottom = `Selamat datang di laman pelaksanaan!`;

    const [sliderState,setSliderState] = useState(0);
    const [showMobileDropdown, setShowMobileDropdown] =useState(false);
    const handleDropdownClick = () => {
        setShowMobileDropdown(!showMobileDropdown);
    }
    const handleUserClick = (index) => {
        setShowMobileDropdown(!showMobileDropdown);
        setSliderState(index);
    }
    const slides = ["Landasan","Maksud","Tujuan"];

    return (
        <>
            <Header 
                top={top}
                bottom={bottom}
            />
            <section className='pelaksanaan_content'>
                <div className='slider'>
                    {slides.map((slides,index)=>(
                        <button key={index}
                                className={`slider-button ${sliderState === index ? 'active' : ''}`}
                                onClick={() => setSliderState(index)}>
                            {slides} <span className='pelaksanaan-text'>Pelaksanaan</span>
                        </button>
                    ))}
                </div>
                <div className='list-wrapper'>
                    {listPelaksanaan["list-pelaksanaan"].map((item, index) => (
                        <div key={index}>
                            {item.kategori===sliderState && 
                            <div className='list'>
                                {item.text.map((textItem, textIndex) => (
                                    <div className='each-list' key={textIndex}>
                                        <p className='number'>{textItem.nomor}</p>
                                        <p className='text' dangerouslySetInnerHTML={{ __html: textItem.isi }}></p>
                                    </div>
                                ))}
                            </div>
                            }
                        </div>
                    ))}
                </div>
            </section>
            {/* <InfoPWRevisi/>
            <SwaraBestari /> */}
            <Footer />
        </>
    );
}
 
export default PelaksanaanRevisi;