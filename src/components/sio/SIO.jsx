import React from "react";
import "./SIO.scss";

//images
import Arrow from "../../images/Arrow/Arrow_Right_MD.svg"
import Laptop from "../../images/sio/Laptop.png" //temporary, jgn lupa diganti
import BG from "../../images/sio/BG.png"
import Calender_Days from "../../images/icons/Calendar_Days.svg"
import Clock from "../../images/icons/Clock.svg"

//supergrafis
import Tangkai from "../../images/supergrafis/SupergrafisSIO/Outline - 4 Bunga Lotus Biru.svg"
import Bunga from "../../images/supergrafis/SupergrafisSIO/Outline - Bunga Lotus Biru di Atas Air 1.svg"

const SIO = () => {
    const openPage = () => {
        window.open("https://forms.gle/N51HPnDK8ERLmWRF9", "_blank");
    }
    return(
        <>
        <section className="sesi-informasi-omb" >
            <img className="tangkai-sio" src={Tangkai} alt="tangkai"/>
            <img className="bunga-sio" src={Bunga} alt="bunga"/>
            <img className="background-sio" src={BG} alt="background"/>
            <div className="content-wrapper-sio">
                <div className="judul">
                    <div className="text-SIO">
                        <h1>Sesi Informasi OMB</h1>
                        <br/>
                        <p>Sesi Informasi OMB merupakan bagian dari rangkaian kegiatan OMB UMN 2024. Kegiatan Sesi Informasi OMB ditujukan untuk menjadi wadah sekaligus sumber informasi bagi setiap peserta dalam mempersiapkan segala keperluan sebelum mengikuti rangkaian kegiatan OMB UMN 2024. </p>
                    </div>
                    <img className="laptop-SIO" src={Laptop} alt="laptop"/>
                </div>
                <div className="modal-SIO">
                    <div className="keterangan-wrapper">
                        <div className="pelaksanaan-wrapper">
                            <h1>Pelaksanaan</h1>
                            <h2>Sesi Informasi OMB</h2>
                            <br/>
                            <p>Sesi informasi OMB UMN 2024 akan dilaksanakan pada:</p>
                            <div className="calender">
                                <img src={Calender_Days} alt="calender"/>
                                <p>Senin, 12 Agustus 2024</p>
                            </div>
                            <div className="clock">
                                <img src={Clock} alt="clock"/>
                                <p>09.00 WIB</p>
                            </div>
                            <p className="wajib">Rangkaian ini wajib diikuti oleh seluruh Peserta OMB UMN 2024.</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="horizontal-line"></div>
                        <div className="tujuan-wrapper">
                            <h1>Tujuan</h1>
                            <h2>Sesi Informasi OMB</h2>
                            <br/>
                            <p>Tujuannya adalah untuk memberikan informasi, mencegah terjadinya kekeliruan informasi, dan memberikan kesempatan tanya jawab terkait hal yang dibutuhkan peserta selama rangkaian kegiatan OMB UMN 2024.</p>
                        </div>
                    </div>
                    <p>Daftarkan dirimu dengan mengisi formulir pada tautan berikut:</p>
                    <button className="cta-button-SIO" onClick={openPage}>
                        Daftar Sekarang
                        <img  src={Arrow} alt="arrow"/>
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}

export default SIO;