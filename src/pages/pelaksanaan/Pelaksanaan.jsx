import React from 'react';
import  { useState } from 'react';
import './Pelaksanaan.scss';

//import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

//import images
import listPelaksanaan from './listPelaksanaan';
import Supergrafis1 from '../../images/supergrafis/SupergrafisPelaksanaan.png'
import Supergrafis2 from '../../images/supergrafis/SupergrafisPelaksanaan2.png'
import Supergrafis3 from '../../images/supergrafis/SupergrafisPelaksanaan3.svg'
import ArrowDropdown from '../../images/Arrow/ArrowDropdown.svg'

const Pelaksanaan = () => {
    const [sliderState,setSliderState] = useState(0);
    const [showMobileDropdown, setShowMobileDropdown] =useState(false);
    const handleDropdownClick = () => {
        setShowMobileDropdown(!showMobileDropdown);
    }
    const handleUserClick = (index) => {
        setShowMobileDropdown(!showMobileDropdown);
        setSliderState(index);
    }
    const slides = ["Landasan Pelaksanaan","Maksud Pelaksanaan","Tujuan Pelaksanaan"];
    return (
        <>
            <Header 
                top="Lotus Biru merajut mimpi masa depan,"
                bottom={<>Selamat datang di laman pelaksanaan!</>}
            />
            <section className='wrapper-content'>
            <img className='background-upper' src={Supergrafis1} alt='Bg'/>
            <img className='background-lower' src={Supergrafis2} alt='Bg'/>
            <img className='background-extra' src={Supergrafis3} alt='Bg'/>
                <div className='slider-wrapper'>
                    <div className='slider'>
                        {slides.map((slides,index)=>(
                            <button key={index}
                                    className={`slider-button ${sliderState === index ? 'active' : ''}`}
                                    onClick={() => setSliderState(index)}>
                                {slides}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='slider-wrapper-mobile'>
                    <div className='slider-mobile'>
                        {slides.map((slides,index)=>(
                            sliderState === index && 
                            <button key={index} className='slider-button-mobile-active' onClick={handleDropdownClick}>
                                {slides}
                                <img className={`arrow ${!showMobileDropdown ? 'up':'down'}`} src={ArrowDropdown} alt='drop'/>
                            </button>
                        ))}
                        {showMobileDropdown && 
                            <div className='dropdown-wrapper'>
                                {slides.map((slides,index)=>(
                                    sliderState !== index &&
                                        <button key={index}
                                                className={`slider-button-mobile`}
                                                onClick={() => handleUserClick(index)}>
                                            {slides}
                                        </button>
                                ))}
                            </div>
                        }
                    </div>
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
            <Footer />
        </>
    );
}
 
export default Pelaksanaan;