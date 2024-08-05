import React from "react";
import "./SIO.scss";

//images
import ArrowRight from "../../images/Arrow/Arrow_Right_MD_purple.svg"
import Laptop from "../../images/sio/sio_laptop.png" //temporary, jgn lupa diganti
import BG from "../../images/sio/BG.png"
import Calender_Days from "../../images/icons/Calendar_Days.svg"
import Clock from "../../images/icons/Clock.svg"


//supergrafis
import Tangkai from "../../images/supergrafis/SupergrafisSIO/Outline - 4 Bunga Lotus Biru.svg"
import Bunga from "../../images/supergrafis/SupergrafisSIO/Outline - Bunga Lotus Biru di Atas Air 1.svg"
import SecondWave from '../../images/waves/Wave Three.png'

const SIO = () => {
    const openPage = () => {
        window.open("https://forms.gle/N51HPnDK8ERLmWRF9", "_blank");
    }
    return(
        <>
        <section className="sesi-informasi-omb" >
            <img className="tangkai-sio" src={Tangkai} alt="tangkai"/>
            <img className="bunga-sio" src={Bunga} alt="bunga"/>
            <div className="content-wrapper-sio">
                <div className="judul">
                    <h1>Sesi Informasi OMB</h1>
                    <p>Sesi Informasi OMB merupakan bagian dari rangkaian kegiatan OMB UMN 2024. Kegiatan Sesi Informasi OMB bertujuan untuk memberikan informasi, mencegah terjadinya kekeliruan informasi, dan memberikan kesempatan tanya jawab terkait hal yang dibutuhkan peserta selama rangkaian kegiatan OMB UMN 2024.</p>
                </div>
                <p className="wajib">Rangkaian ini wajib diikuti oleh seluruh Peserta OMB UMN 2024!</p>
                <div className="keterangan-wrapper">
                    <div className="pelaksanaan-wrapper">
                        <div className="title-thing">
                            <h1>Pelaksanaan</h1>
                            <p>Sesi informasi OMB UMN 2024 akan dilaksanakan pada:</p>
                        </div>
                        <div className="icons">
                            <div className="each-icons">
                                <img src={Calender_Days} alt="calender"/>
                                <p>Senin, 12 Agustus 2024</p>
                            </div>
                            <div className="each-icons">
                                <img src={Clock} alt="clock"/>
                                <p>09.00 WIB</p>
                            </div>
                        </div>
                        <div className='cta_button'>
                            <button onClick={openPage}>Daftar sekarang
                                <img src={ArrowRight} alt="Arrow Icon" />
                            </button>
                        </div>
                    </div>
                    <img className="laptop-SIO" src={Laptop} alt="laptop"/>
                </div>
            </div>
        </section>
        </>
    )
}

export default SIO;