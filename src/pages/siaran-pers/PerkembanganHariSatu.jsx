import React from "react";

// import scss
import './SiaranPers.scss';

//import components
import AnnCard2White from "../../components/cards/ann card/AnnCard2White";
import AnnCardPers1 from "../../components/cards/ann card/AnnCardPers1White";
import AnnCardPers2 from "../../components/cards/ann card/AnnCardPers3White";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

//import images
import Image1 from '../../images/pers/pembentukan1/Pembentukan1-1.jpeg';
import Image2 from '../../images/pers/pembentukan1/Pembentukan1-2.jpeg';
import Image3 from '../../images/pers/pembentukan1/Pembentukan1-3.jpeg';
import Image4 from '../../images/pers/pembentukan1/Pembentukan1-4.jpeg';
import Image5 from '../../images/pers/pembentukan1/Pembentukan1-5.jpeg';

const PerkembanganHariSatu = () => {
    const top = 'Rilis Pers';
    const bottom = 'Perkembangan Hari 1 OMB UMN 2024';

    return (
        <>
            <Header top={top} bottom={bottom}/>
            <section className="pers_section">
                <div className="left-pers">
                    <div className="pers-title">
                        <div className="day-and-date">
                            <p className="hari-date">Selasa, 20 Agustus 2024</p>
                        </div>
                        <h1>Hari Pertama OMB UMN 2024 Tanamkan Kepercayaan Diri sebagai Langkah Awal Perkuliahan</h1>
                    </div>
                    <div className="paragraph-pers">
                        <p><b>TANGERANG</b> - Orientasi Mahasiswa Baru Universitas Multimedia Nusantara (OMB UMN) 2024 secara resmi dimulai dengan 2.218 peserta pada Selasa (20/08/2024). Hari pertama OMB UMN 2024 yang juga bisa disebut sebagai “Perkembangan Hari 1” mengajak mahasiswa baru untuk mengenali dunia baru melalui rangkaian-rangkaiannya.</p>

                        <div className="image-pers">
                            <img src={Image1} alt="" />
                        </div>
                        <p className="image-text">Rektor Universitas Multimedia Nusantara Ninok Leksono saat menjadi pembina upacara pada upacara peresmian Orientasi Mahasiswa Baru Universitas Multimedia Nusantara 2024.</p>

                        <p>Peresmian dimulainya OMB UMN 2024 ditandai dengan pemukulan gong sebanyak tiga kali oleh Rektor Universitas Multimedia Nusantara (UMN) Ninok Leksono saat upacara berlangsung. Rangkaian upacara diikuti oleh seluruh Peserta OMB UMN 2024 termasuk mahasiswa internasional yang berasal dari Nigeria, Korea Selatan, hingga Filipina.</p>

                        <div className="image-pers">
                            <img src={Image2} alt="" />
                        </div>
                        <p className="image-text">Penyambutan mahasiswa baru oleh divisi Person In Charge (Sakha) dan Acara (Balwana) Orientasi Mahasiswa Baru Universitas Multimedia Nusantara 2024.</p>
                        
                        <p>“Orientasi Mahasiswa Baru tidak lagi menjadi arena perpeloncoan, tidak ada ospek dan permainan yang berbahaya. OMB UMN kembali pada tujuan dasarnya, yaitu untuk mengenal kehidupan sebagai mahasiswa, mengenal program studi yang ditekuni, dan bersosialisasi untuk mengembangkan bakat,” ujar Ninok Leksono saat menjadi pembina upacara.</p>

                        <div className="image-pers">
                            <img src={Image3} alt="" />
                        </div>
                        <p className="image-text">Mahasiswa baru melakukan penghormatan saat pengibaran bendera merah putih pada upacara peresmian Orientasi Mahasiswa Baru Universitas Multimedia Nusantara 2024.</p>

                        <p>Selaras dengan apa yang dikatakan oleh Rektor UMN tersebut, hari pertama OMB UMN difokuskan kepada pemahaman mahasiswa baru terhadap lingkungan dan fasilitas kampusnya melalui rangkaian Kenali Kampus. Kenali kampus disampaikan dalam bentuk video yang telah dikemas dengan menarik dan mengangkat tema Penjelajahan. Tema Penjelajahan yang dimaksud adalah dimana mahasiswa baru harus menelusuri sumber daya yang melimpah untuk mendapatkan suatu informasi berupa gambaran fasilitas UMN.</p>

                        <div className="image-pers">
                            <img src={Image4} alt="" />
                        </div>
                        <p className="image-text">Mahasiswa baru mengikuti menonton video perkenalan fasilitas dan gedung Universitas Multimedia Nusantara pada rangkaian kegiatan Kenali Kampus.</p>
                        
                        <p>Selain itu, mahasiswa baru juga diajak untuk bersosialisasi dalam bentuk kerja sama antar kelompok pada rangkaian aktivitas angkatan yang mengambil tema “Jejak Biru di Taman Lotus”. Taman Lotus dilambangkan sebagai awal perjalanan mahasiswa baru atau Peserta OMB UMN 2024 saat memasuki dunia perkuliahan dan Jejak Biru yang disimbolkan dapat merekam setiap langkah yang telah diambil berdasarkan tujuan yang tepat.</p>

                        <div className="image-pers">
                            <img src={Image5} alt="" />
                        </div>
                        <p className="image-text">Mahasiswa baru mengikuti rangkaian kegiatan Aktivitas Angkatan "Jejak Biru di Taman Lotus" bersama anggota satu kelompok.</p>

                        <p>“Bagi aku, OMB bukan hanya sebatas rangkaian kegiatan melainkan sebuah proses yang wajib untuk dilalui,” ucap Lavia Jovelin selaku koordinator divisi acara OMB UMN 2024.</p>

                        <p>Lavia berpendapat bahwa hari pertama OMB UMN 2024 ini dapat menanamkan nilai kepercayaan diri yang merupakan salah satu dari nilai-nilai yang ingin ditanamkan pada OMB UMN 2024. </p>

                        <p>“Tanpa nilai tersebut, mahasiswa tidak akan dapat menyerap nilai-nilai lain dengan baik tapi hari ini merupakan langkah awal bagi mereka untuk memiliki nilai kepercayaan diri yang dilengkapi dengan pemikiran bijak agar menjadi individu yang semakin siap untuk berkembang dan ditanamkan dengan nilai-nilai OMB UMN 2024 lainnya pada Perkembangan Hari 2,” pungkas Lavia Jovelin.</p>
                    </div>
                </div>
                <div className="right-pers">
                    <p>Informasi Penting!</p>
                    <div className="info-stack">
                        <AnnCardPers2 />
                        <AnnCardPers1 />
                        <AnnCard2White />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
 
export default PerkembanganHariSatu;