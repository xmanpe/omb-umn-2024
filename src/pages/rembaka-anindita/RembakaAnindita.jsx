import React, { useState } from "react";

import Dinamika from "../../components/dinamika/Dinamika";
import CaraDinamika from "../../components/dinamika/CaraDinamika";
import Footer from "../../components/footer/Footer";
import Header from '../../components/header/Header';

import RembakaImage from '../../images/rembaka-anindita.png'

import './RembakaAnindita.scss';

const RembakaAnindita = () => {
    const top = `Rembaka Anindita`;
    const bottom = `Yuk, kenali kampus melalui dinamika`;

    const [isModalCara, setIsModalCara] = useState(false);
    const [isModalMain, setIsModalMain] = useState(false);

    const openModalCara = () => setIsModalCara(true);
    const openModalMain = () => setIsModalMain(true);
    const closeModalCara = () => setIsModalCara(false);
    const closeModalMain = () => setIsModalMain(false);

    return (
        <>
            {isModalCara && <CaraDinamika onClose={closeModalCara} />}
            {isModalMain && <Dinamika onClose={closeModalMain} />}
            <Header 
                top={top}
                bottom={bottom}
            />
            <section className="rembaka_anindita">
                <img src={RembakaImage} alt="" />
                <div className="explanation">
                    <p className="penjelasan">
                        Rembaka Anindita, berasal dari bahasa Sanskerta yang berarti <b>"Berkembang Sempurna"</b>. Dalam dinamika ini, objek digabungkan ke objek yang sama, sehingga menyatu dan berubah menjadi objek baru, dimulai dari kunang-kunang hingga Lotus Biru. Objek yang digunakan merupakan supergrafis OMB UMN 2024.
                        <br /><br />
                        Dinamika ini mencerminkan salah satu nilai OMB UMN 2024, yaitu 5C, yang mengandung nilai <i>competent</i> dan <i>competitive</i> di mana Peserta OMB UMN 2024 dapat aktif dalam mengasah kemampuannya dan bersaing secara sehat untuk mendapatkan poin tertinggi dalam dinamika.
                    </p>
                    <div className="tujuan-dinamika">
                        <p>Tujuan utama dinamika ini selaras dengan tujuan dari OMB UMN 2024, yakni agar peserta dapat lebih <b>mengenal lingkungan UMN</b> dengan menjawab pertanyaan-pertanyaan seputar UMN selama berdinamika.</p>
                    </div>
                    <br />
                    <div className="button-wrapper">
                        <div className='cta_button'>
                            <button className="dinamika-button" onClick={openModalCara}>Cara berdinamika
                            </button>
                        </div>
                        <div className='cta_button'>
                            <button onClick={openModalMain}>Mulai berdinamika!
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default RembakaAnindita;