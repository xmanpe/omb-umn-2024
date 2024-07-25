import React from 'react';
import { useState } from 'react';
import './AtributPeserta.scss';

// import components
import Header from '../../components/header/Header';
import listAtributPeserta from './listAtributPeserta';
import ModalNilai from "../../components/modal-nilai/ModalNilai";
import Footer from '../../components/footer/Footer';
import SwaraBestari from '../../components/swara-bestari/SwaraBestari';
import InfoPWRevisi from '../../components/informasi-penting-wajib/InfoPWRevisi';

// import images
import ArrowDropdown from '../../images/Arrow/ArrowDropdown.svg';
import lebah from '../../images/supergrafis/Kunang-top-view.svg';
import lebah2 from '../../images/supergrafis/SUPERGRAFIS METALLIC VIOLET/Fill - Firefly 2.svg';
import tangkai from '../../images/supergrafis/Tangkai-line.svg';

const AtributPeserta = () => {
    const [modalInfo, setModalInfo] = useState({ show: false, title: "", subtitle: "", content: "" });
    const openModal = (title, subtitle, content) => {
        setModalInfo({ show: true, title, subtitle, content });
    };
    const closeModal = () => {
        setModalInfo({ show: false, title: "", subtitle: "", content: "" });
    };
    const [sliderState,setSliderState] = useState(0);
    const slides = ["Hari Pemupukan","Perkembangan Hari 1","Perkembangan Hari 2","Sidang Terbuka Senat"];
    const [showMobileDropdown, setShowMobileDropdown] =useState(false);
    const handleDropdownClick = () => {
        setShowMobileDropdown(!showMobileDropdown);
    }
    const handleUserClick = (index) => {
        setShowMobileDropdown(!showMobileDropdown);
        setSliderState(index);
    }
    return (
        <>
            <div className='content-wrapper'>
                <div className="atribut_title">
                    <h1>Atribut Peserta</h1>
                </div>
                <div className='slider'>
                    {slides.map((slides,index)=>(
                        <button key={index}
                                className={`slider-button ${sliderState === index ? 'active' : ''}`}
                                onClick={() => setSliderState(index)}>
                            {slides}
                        </button>
                    ))}
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
                {/* <img className='lebah' src={lebah} alt='kunang1'/>
                <img className='lebah2'src={lebah2} alt='kunang2'/>
                <img className='tangkai'src={tangkai} alt='tangkai'/> */}
                <div className='atribut-wrapper'>
                    {listAtributPeserta["list-atribut-peserta"].filter(item=> item.hari.includes(sliderState)).map((item, index) => (
                        <div className='each-list' key={index}>
                            <img className='list-image' src={item.image} alt={item.barang}/>
                            <div className='text-wrapper'>
                                <p className='item' dangerouslySetInnerHTML={{ __html: item.barang }}></p>
                            </div>
                            {
                                item.bajuDesc?(
                                    <button onClick={() => openModal(
                                        <p className='item' dangerouslySetInnerHTML={{ __html: item.barang }}></p>,
                                        <></>,
                                        <div>
                                            <div className='fakultas-wrapper'>
                                                {item.bajuDesc.map((item,index)=>(
                                                    <div key={index} className='fakultas-item'>
                                                        <img className='baju-fakultas' src={item.bajuImage} alt={item.fakultas}/>
                                                        <div className='fakultas-text-wrapper'>
                                                            <div className={`warna-${item.warna}`}>{item.fakultas}</div>
                                                            <p>{item.jurusan}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className='item' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                                        </div>,
                                    )}>
                                    Selengkapnya
                                    </button>
                                ):(
                                    <button onClick={() => openModal(
                                        <p className='item' dangerouslySetInnerHTML={{ __html: item.barang }}></p>,
                                        <div>
                                            <br></br>
                                            <img className='list-image' src={item.image} alt={item.barang}/>
                                        </div>,
                                        <p className='item' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                                    )}>
                                    Selengkapnya
                                    </button>
                                )
                            }
                            
                            {/* <p className='text' dangerouslySetInnerHTML={{ __html: item.desc }}></p> */}
                        </div>
                    ))}
                </div>
            </div>
            {/* <InfoPWRevisi/>
            <SwaraBestari /> */}
            <ModalNilai 
                show={modalInfo.show} 
                onClose={closeModal} 
                title={modalInfo.title} 
                subtitle={modalInfo.subtitle} 
                content={modalInfo.content} 
            />
        </>
    );
}
 
export default AtributPeserta;