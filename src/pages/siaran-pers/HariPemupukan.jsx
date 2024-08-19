import React from "react";

// import scss
import './SiaranPers.scss';

//import components
import AnnCard from "../../components/cards/ann card/AnnCard";
import AnnCard2 from "../../components/cards/ann card/AnnCard6";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

//import images
import Test from '../../images/Second.png';
import Test2 from '../../images/gedung umn.jpg';
import Test3 from '../../images/gif.gif'

const HariPemupukan = () => {
    const top = 'Siaran Pers';
    const bottom = 'Hari Pemupukan';

    return (
        <>
            <Header top={top} bottom={bottom} image={Test} />
            <section className="pers_section">
                <div className="left-pers">
                    <div className="pers-title">
                        <div className="day-and-date">
                            <p className="hari-name">Hari Pemupukan OMB UMN 2024</p>
                            <p>•</p>
                            <p className="hari-date">Senin, 19 Agustus 2024</p>
                        </div>
                        <h1>Tanpa Senioritas, OMB UMN 2024 Turut Bangun Potensi Mahasiswa Baru</h1>
                        
                    </div>
                    <div className="paragraph-pers">
                        <p><b>Tangerang</b> - Hari Briefing atau Hari Penetasan Orientasi Mahasiswa Baru Universitas Multimedia Nusantara (OMB UMN) 2023 telah resmi dilaksanakan, Senin (21/8/2023). Kegiatan yang membuka langkah awal peserta dalam memasuki dunia perkuliahan ini, diadakan secara daring via Zoom. Dihadiri oleh lebih dari 3.000 peserta dari seluruh penjuru Nusantara, OMB UMN 2023 menjadi pijakan awal peserta dalam menerima nilai-nilai yang relevan untuk menghadapi tantangan di perkuliahan mendatang.</p>
                        <div className="image-pers">
                            <img src={Test2} alt="" />
                        </div>
                        <p className="image-text">Divisi Kampana (Acara), menyambut peserta OMB UMN 2023 dalam Hari Penetasan OMB UMN 2023, Senin (21/8/2023).</p>
                        <p>Melalui rangkaian HariBriefing, Arsa/<i>Person in Charge</i> (PIC) untuk pertama kalinya berjumpa dan berinteraksi langsung dengan para peserta. Tanpa adanya senioritas, pertukaran sapa dan salam hangat di antara keduanya berlangsung dengan penuh semangat dan antusias.</p>
                        <p>Pembacaan instruksi penugasan memegang peranan penting dalam rangkaian kegiatan Hari Briefing. Melalui kegiatan inilah para peserta memperoleh penugasan yang dirancang khusus untuk membangkitkan potensi dan kreativitas diri. Harapannya, penugasan ini mampu mengarahkan para peserta untuk berkarya secara positif dan mendorong partisipasi mereka dalam memberikan kontribusi bermakna sebagai generasi muda.</p>
                        <p>Yemima Willona, Koordinator divisi Kampana (Acara), menjelaskan bahwa setiap penugasan yang diberikan dalam OMB UMN 2023 pastinya memiliki esensinya masing-masing dan bertujuan untuk mempersiapkan peserta dalam memasuki dunia perkuliahan nantinya.</p>
                        <p>“Biar nanti ketika pesertanya masuk UMN, mereka sudah tahu informasi-informasi mengenai OMB ataupun UMN. Jadi, setiap penugasan pasti memberikan dampak positif dan bertujuan untuk memperkenalkan UMN lebih dekat lagi dengan memberikan informasi-informasi yang juga relevan,” jelasnya.</p>
                        <div className="image-pers">
                            <img src={Test3} alt="" />
                        </div>
                        <p className="image-text">Divisi Kampana (Acara), menyambut peserta OMB UMN 2023 dalam Hari Penetasan OMB UMN 2023, Senin (21/8/2023).</p>
                        <p>Selanjutnya, beberapa informasi penting juga disampaikan kepada para peserta demi keamanan dan kenyamanan selama OMB UMN 2023 berlangsung. Divisi Adhyasta (Keamanan), contohnya, membacakan peraturan yang berlaku selama rangkaian kegiatan OMB UMN 2023. Hal ini bertujuan untuk memastikan bahwa rangkaian kegiatan OMB UMN 2023 nantinya dapat berjalan dengan kondusif tanpa mengurangi esensi positif bagi para peserta.</p>
                        <p>Divisi Sarwaga (Medis) juga turut memberikan imbauan penting seputar keselamatan dan kesehatan peserta selama menjalani rangkaian kegiatan OMB UMN 2023. Aspek-aspek penting, seperti K3L (Keselamatan, Kesehatan Kerja, dan Lingkungan) ataupun HSE (Health, Security, dan Environment), juga turut disampaikan dalam imbauan ini.</p>
                        <p>Selain itu, divisi Kampana (Acara) juga mengajarkan peserta tentang salam OMB, salam UMN, Mars UMN, Mars OMB, tagline , dan filosofi di baliknya. Tak hanya memperkuat identitas sebagai mahasiswa Universitas Multimedia Nusantara, rangkaian kegiatan pada Hari Briefing ini pun sukses membakar semangat para peserta.</p>
                        <p>“Intinya senang dan excited untuk besok! Kita semua harus semangat untuk OMB UMN tahun ini. Karena selama beberapa hari ke depan, kita akan bareng-bareng terus. Jadi, kita harus tetap kompak sekaligus enjoy,” pesan Aldi Pratama, salah satu peserta OMB UMN 2023.</p>
                    </div>
                </div>
                <div className="right-pers">
                    <p>Jangan lewatkan info ini!</p>
                    <div className="info-stack">
                        <AnnCard />
                        <AnnCard2 />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
 
export default HariPemupukan;