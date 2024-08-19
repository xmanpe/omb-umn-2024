import React from "react";

// import scss
import './SiaranPers.scss';

//import components
import AnnCard2White from "../../components/cards/ann card/AnnCard2White";
import AnnCard2 from "../../components/cards/ann card/AnnCard6";
import AnnCard3White from "../../components/cards/ann card/AnnCard3White";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

//import images
import Image1 from '../../images/pers/pemupukan/Pemupukan-1.jpeg'
import Image2 from '../../images/pers/pemupukan/Pemupukan-2.jpeg'
import Image3 from '../../images/pers/pemupukan/Pemupukan-3.jpeg'
import Image4 from '../../images/pers/pemupukan/Pemupukan-4.jpeg'
import Image5 from '../../images/pers/pemupukan/Pemupukan-5.jpeg'
import Image6 from '../../images/pers/pemupukan/Pemupukan-6.jpeg'

const HariPemupukan = () => {
    const top = 'Rilis Pers';
    const bottom = 'Hari Pemupukan OMB UMN 2024';

    return (
        <>
            <Header top={top} bottom={bottom} />
            <section className="pers_section">
                <div className="left-pers">
                    <div className="pers-title">
                        <div className="day-and-date">
                            {/* <p className="hari-name">Hari Pemupukan OMB UMN 2024</p>
                            <p className="dot">•</p> */}
                            <p className="hari-date">Senin, 19 Agustus 2024</p>
                        </div>
                        <h1>Sambut Generasi Baru, OMB UMN 2024 Siap Tumbuhkan Potensi Baru Mahasiswa</h1>
                    </div>
                    <div className="paragraph-pers">
                        <p><b>TANGERANG</b> - Hari Briefing atau Hari Pemupukan OMB UMN 2024 pada Senin (19/8/2024) telah resmi dilaksanakan dengan ribuan mahasiswa baru Universitas Multimedia Nusantara (UMN). Hari Briefing atau Hari Pemupukan OMB UMN 2024 ini digelar secara daring/<i>online</i>, rangkaian kegiatan ini dirancang untuk membantu mahasiswa baru beradaptasi cepat dengan lingkungan kampus, memahami visi dan misi UMN, serta memperkuat hubungan sosial dengan sesama mahasiswa.</p>

                        <div className="image-pers">
                            <img src={Image1} alt="" />
                        </div>
                        <p className="image-text">Sakha (PIC) sedang membacakan instruksi untuk memulai dinamika bersama para Peserta OMB UMN 2024.</p>

                        <p>Dalam satu hari penuh, mereka terlibat dalam kegiatan interaktif, termasuk sesi dari berbagai divisi, perkenalan PIC (<i>Person in Charge</i>), instruksi penugasan, sesi tanya jawab, dan pemecahan nama kelompok yang memperkuat semangat kebersamaan sebagai awal perjalanan akademis di UMN.</p>

                        <div className="image-pers">
                            <img src={Image2} alt="" />
                        </div>
                        <p className="image-text">Balwana (Acara) sedang mengajarkan para peserta untuk bersama-sama menggaungkan Salam OMB UMN 2024 dengan semangat dan antusias.</p>
                        
                        <p>Peserta OMB UMN 2024 juga dilatih untuk bekerja sama melalui pembagian kelompok kecil yang dinamakan berdasarkan cerita rakyat Nusantara, yang dirancang untuk menanamkan nilai-nilai kolaborasi dan kebersamaan. Melalui dinamika tim dan diskusi kelompok, mahasiswa baru diajak untuk berkolaborasi, saling mendukung, dan membangun kepercayaan yang diharapkan dapat diterapkan dalam kehidupan sehari-hari mereka di kampus.</p>

                        <div className="image-pers">
                            <img src={Image3} alt="" />
                        </div>
                        <p className="image-text">Seluruh Panitia dan Peserta OMB UMN 2024 secara serentak menyanyikan lagu Mars UMN dengan mengepalkan tangan di depan dada.</p>

                        <p>Selain berkenalan dengan Sakha (<i>Person in Charge</i>), terdapat tiga divisi yang turut mendukung jalannya OMB UMN 2024, yaitu,  keamanan, medis, dan acara. Divisi keamanan atau Bimasena bertanggung jawab memastikan seluruh kegiatan berlangsung aman dan tertib. Divisi medis atau Saraya menangani situasi darurat serta mengoordinasikan keselamatan panitia dan peserta OMB UMN 2024. Sementara itu, divisi acara atau Balwana mengelola rangkaian kegiatan, termasuk Hari Briefing atau Hari Pemupukan, Perkembangan Hari 1 & 2, dan Sidang Terbuka Senat, memastikan semuanya berjalan sesuai rencana dan memberikan pengalaman tak terlupakan bagi mahasiswa baru.</p>

                        <div className="image-pers">
                            <img src={Image4} alt="" />
                        </div>
                        <p className="image-text">Seluruh Peserta OMB UMN 2024 dengan kompak dan tegas menyanyikan lagu Mars UMN. </p>
                        
                        <p>Dengan mengusung tema "Lotus Biru," OMB UMN 2024 menggambarkan mahasiswa sebagai lotus yang memerlukan nutrisi berupa informasi untuk tumbuh dan berkembang. Informasi yang diterima hari ini diharapkan membantu mahasiswa baru mengembangkan potensi diri mereka, memanfaatkan sumber daya kampus, dan mendukung kesuksesan akademik serta personal mereka di masa depan.</p>

                        <div className="image-pers">
                            <img src={Image5} alt="" />
                        </div>
                        <p className="image-text">Para peserta disambut dengan penuh semangat dan hangat dalam Hari Pemupukan atau Hari Briefing OMB UMN 2024.</p>

                        <div className="image-pers">
                            <img src={Image6} alt="" />
                        </div>
                        <p className="image-text">MC dengan penuh semangat menyapa para Peserta OMB UMN 2024 dalam momen penuh energi. </p>

                        <p>OMB UMN 2024 sendiri adalah rangkaian kegiatan wajib bagi seluruh mahasiswa baru Universitas Multimedia Nusantara sebagai syarat kelulusan. Rangkaian kegiatan ini membantu mahasiswa beradaptasi dengan lingkungan kampus, mengenalkan budaya akademis dan nilai-nilai universitas, serta membangun keterampilan sosial dan kepemimpinan. Melalui kegiatan interaktif, OMB UMN 2024 memberikan pengetahuan penting yang menjadi fondasi kesuksesan akademis mereka. Hari Briefing atau Hari Pemupukan menjadi momen berkesan yang mengawali perjalanan mereka menuju prestasi di UMN.</p>
                    </div>
                </div>
                <div className="right-pers">
                    <p>Informasi Penting!</p>
                    <div className="info-stack">
                        <AnnCard2 />
                        <AnnCard2White />
                        <AnnCard3White />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
 
export default HariPemupukan;