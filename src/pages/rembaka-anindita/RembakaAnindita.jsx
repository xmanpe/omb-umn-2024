import React from "react";
import { useState, useEffect } from 'react';

import Dinamika from "../../components/dinamika/Dinamika";
import Footer from "../../components/footer/Footer";
import Header from '../../components/header/Header';

import TutorialDinamika from '../../videos/TutorialDinamika.mp4'

import './RembakaAnindita.scss';
import Modal from "../../components/modal/Modal";

const RembakaAnindita = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [widthVideo, setWidthVideo] = useState(0);
    const [heightVideo, setHeightVideo] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        const handleResize = () => {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };

        if(screenSize.width >= 1440) {
            setWidthVideo(1100)
            setHeightVideo(700)
        } else if(screenSize.width > 1200) {
            setWidthVideo(900)
            setHeightVideo(600)
        } else if(screenSize.width > 810) {
            setWidthVideo(600)
            setHeightVideo(400)
        } else if(screenSize.width > 560) {
            setWidthVideo(450)
            setHeightVideo(300)
        } else if(screenSize.width > 320) {
            setWidthVideo(300)
            setHeightVideo(200)
        }
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <section className="rembaka_anindita">
                <Header 
                    top="Rembaka Anindita"
                    bottom={<>Yuk, kenali kampus melalui dinamika</>}
                />
                <div className="wordingan">
                    <h1 className="judul">Rembaka Anindita</h1>
                    <p className="penjelasan">Rembaka Anindita, berasal dari bahasa Sanskerta yang berarti <b>"Berkembang Sempurna"</b>. Dalam dinamika ini, objek digabungkan ke objek yang sama, sehingga menyatu dan berubah menjadi objek baru, dimulai dari kunang-kunang hingga Lotus Biru. Objek yang digunakan merupakan supergrafis OMB UMN 2024.</p>
                    <br />
                    <p className="penjelasan">Dinamika ini mencerminkan salah satu nilai OMB UMN 2024, yaitu 5C, yang mengandung nilai competent dan competitive di mana Peserta OMB UMN 2024 dapat aktif dalam mengasah kemampuannya dan bersaing secara sehat untuk mendapatkan poin tertinggi dalam dinamika.</p>
                    <br />
                    <p className="penjelasan">Tujuan utama dinamika ini selaras dengan tujuan dari OMB UMN 2024, yakni agar peserta dapat lebih <b>mengenal lingkungan UMN</b> dengan menjawab pertanyaan-pertanyaan seputar UMN selama berdinamika.</p>

                    <div className="button_cara" onClick={toggleModal}>Cara Berdinamika</div>
                </div>
                <Dinamika />
                <Footer />
            </section>
            {showModal &&
                <Modal handleClose={toggleModal}>
                    <div style={{width: '100%', height: '100%', display: 'flex'}}>
                        <video width={widthVideo} height={heightVideo} controls style={{margin: 'auto'}}>
                            <source src={TutorialDinamika} type="video/mp4" />
                        </video>
                    </div>
                </Modal>
            }
        </>
    )
}

export default RembakaAnindita;