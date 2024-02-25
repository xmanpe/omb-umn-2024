import React, { useState, useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Divisi.scss';

import PesertaWawancara from '../peserta-wawancara/PesertaWawancara';

// import icons
import X from '../../images/Menu/Close_MD.svg'
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg'
import Warning from '../../images/Warning/Circle_Warning.svg'

// import supergraphics
import Supergrafis from '../../images/supergrafis/SUPERGRAFIS METALLIC VIOLET/Fill - Bunga Lotus Biru 3.svg'
import Supergrafis2 from '../../images/supergrafis/Apaituomb Supergrafis.png'

// Import images
import Acara from '../../images/Logo Divisi OMB 2024/Balwana Large.png';
import Acara1 from '../../images/divisi/acara/acara 1.jpeg'
import Acara2 from '../../images/divisi/acara/acara 2.jpeg'
import Acara3 from '../../images/divisi/acara/acara 3.jpeg'
import AcaraSound from '../../audio/Balwana.mp3'

import Bph from '../../images/Logo Divisi OMB 2024/Gandara Large.png';
import Bph1 from '../../images/divisi/bph/bph 1.jpeg'
import Bph2 from '../../images/divisi/bph/bph 2.jpeg'
import Bph3 from '../../images/divisi/bph/bph 3.jpeg'

import Desain from '../../images/Logo Divisi OMB 2024/Lavanya Large.png';
import Desain1 from '../../images/divisi/desain/desain 1.jpeg'
import Desain2 from '../../images/divisi/desain/desain 2.jpeg'
import Desain3 from '../../images/divisi/desain/desain 3.jpeg'
import DesainSound from '../../audio/Lavanya.mp3'

import Dokum from '../../images/Logo Divisi OMB 2024/Baskara Large.png';
import Dokum1 from '../../images/divisi/dokum/dokum 1.jpeg'
import Dokum2 from '../../images/divisi/dokum/dokum 2.jpeg'
import Dokum3 from '../../images/divisi/dokum/dokum 3.jpeg'
import DokumSound from '../../audio/Baskara.mp3'

import Keamanan from '../../images/Logo Divisi OMB 2024/Bimasena Large.png';
import Keamanan1 from '../../images/divisi/keamanan/keamanan 1.jpeg'
import Keamanan2 from '../../images/divisi/keamanan/keamanan 2.jpeg'
import Keamanan3 from '../../images/divisi/keamanan/keamanan 3.jpeg'
import KeamananSound from '../../audio/Bimasena.mp3'

import Konsum from '../../images/Logo Divisi OMB 2024/Sarkara Large.png';
import Konsum1 from '../../images/divisi/konsum/konsum 1.jpeg'
import Konsum2 from '../../images/divisi/konsum/konsum 2.jpeg'
import Konsum3 from '../../images/divisi/konsum/konsum 3.jpeg'
import KonsumSound from '../../audio/Sarkara.mp3'

import Medis from '../../images/Logo Divisi OMB 2024/Saraya Large.png';
import Medis1 from '../../images/divisi/medis/medis 1.jpeg'
import Medis2 from '../../images/divisi/medis/medis 2.jpeg'
import Medis3 from '../../images/divisi/medis/medis 3.jpeg'

import Perkap from '../../images/Logo Divisi OMB 2024/Gajendra Large.png';
import Perkap1 from '../../images/divisi/perkap/perkap 1.jpeg'
import Perkap2 from '../../images/divisi/perkap/perkap 2.jpeg'
import Perkap3 from '../../images/divisi/perkap/perkap 3.jpeg'
import PerkapSound from '../../audio/Gajendra.mp3'

import Pic from '../../images/Logo Divisi OMB 2024/Sakha Large.png';
import Pic1 from '../../images/divisi/pic/pic 1.jpeg'
import Pic2 from '../../images/divisi/pic/pic 2.jpeg'
import Pic3 from '../../images/divisi/pic/pic 3.jpeg'
import PicSound from '../../audio/Sakha.mp3'

import Pr from '../../images/Logo Divisi OMB 2024/Caksana Large.png';
import Pr1 from '../../images/divisi/pr/pr 1.jpeg'
import Pr2 from '../../images/divisi/pr/pr 2.jpeg'
import Pr3 from '../../images/divisi/pr/pr 3.jpeg'
import PrSound from '../../audio/Caksana.mp3'   

import Web from '../../images/Logo Divisi OMB 2024/Nayanika Large.png';
import Web1 from '../../images/divisi/web/web 1.jpeg'
import Web2 from '../../images/divisi/web/web 2.jpeg'
import Web3 from '../../images/divisi/web/web 3.jpeg'
import WebSound from '../../audio/Nayanika.mp3'

const divisiInfo = [
    {   logo: Konsum,
        name: "SARKARA",
        sub: 'Konsumsi',
        description: "SARKARA: Gula dan Madu<br>Logo: Rindik<br><br>Rindik adalah alat tradisional berasal dari Bali. Pembuatan alat musik ini terbuat dari potongan bambu pilihan yang telah diproses. Hal ini menggambarkan Sarkara yang dapat menyediakan keberagaman makanan yang sehat dan bermanfaat bagi panitia OMB UMN 2024 dimana pun dan kapan pun.<br><br><hr><br>Sarkara bertugas untuk bertanggung jawab terkait makanan dan minuman yang bergizi serta dapat menyehatkan bagi seluruh panitia selama rangkaian kegiatan OMB UMN 2024.",
        photo1: Konsum1,
        photo2: Konsum2,
        photo3: Konsum3,
        link: "https://forms.gle/azqSnv4cVXBFD6fdA",
        sound: KonsumSound,
        oprec2: 0
    },
    {   logo: Desain,
        name: "LAVANYA",
        sub: 'Desain',
        description: "LAVANYA: Keindahan dan Kecantikan<br>Logo: Seruling<br><br>Divisi Lavanya berlandaskan 5 nilai Seruling, yaitu: Niti Harti (tahap mengerti atau mengetahui brief), Niti Surti (tahap memahami, menguasai brief desain), Niti Bukti (tahap membuktikkan, mengerjakan desain dengan kemampuan dan kreativitas diri), Niti Bakti (tahap membaktikkan, membaktikkan diri untuk menyempurnakan desain OMB UMN 2024), dan Niti Jati (kesejatian, sebagaimana desain mencerminkan nilai OMB UMN 2024).<br><br><hr><br>Tugas Divisi Lavanya adalah merancang segala kebutuhan desain grafis melalui berbagai media kreatif untuk membangun identitas visual OMB UMN 2024 yang berkualitas secara kreatif dan inovatif.",
        photo1: Desain1,
        photo2: Desain2,
        photo3: Desain3,
        link: "https://forms.gle/FhqJnGLrPnLGLE777",
        sound: DesainSound,
        oprec2: 0
    },
    {   logo: Web,
        name: "NAYANIKA",
        sub: '<i>Website</i>',
        description: "NAYANIKA: Mata Yang Indah<br>Logo: Rumba<br><br>Rumba merupakan alat musik tradisional asal Kuba yang dibawa ke Ambon yang biasanya dimainkan dengan musik hawaiian. Rumba juga digunakan untuk menyatukan tarian dengan alat musik yang sedang bermain. Seperti Nayanika yang menyatukan peserta OMB UMN 2024 dengan memberikan wadah informasi.<br><br><hr><br>Nayanika bertugas dalam merancang <i>website</i> resmi OMB UMN 2024.",
        photo1: Web1,
        photo2: Web2,
        photo3: Web3,
        link: "https://forms.gle/nttxPLQZNsDtLZrv9",
        sound: WebSound,
        oprec2: 0,
    },
    {   logo: Pr,
        name: "CAKSANA",
        sub: '<i>Public Relations</i>',
        description: "CAKSANA: Bijak Bestari<br>Logo: Talindo<br><br>Merupakan alat musik dari Sulawesi Selatan yang memiliki bentuk seperti busur dan terdapat tempurung kelapa sebagai tonggak utama agar Talindo bisa berdiri. Hal tersebut sesuai dengan peran Caksana, yang menjadi tonggak utama dalam penyampaian informasi dengan jelas dan penuh dedikasi kepada para peserta, untuk menjaga reputasi baik OMB UMN 2024.<br><br><hr><br>Caksana bertanggung jawab dalam membuat dan menyebarkan informasi yang akurat serta detail kepada peserta OMB UMN 2024.",
        photo1: Pr1,
        photo2: Pr2,
        photo3: Pr3,
        link: "https://forms.gle/Zpf7xte6dfFNBUgg8",
        sound: PrSound,
        oprec2: 1
    },
    {   logo: Pic,
        name: "SAKHA",
        sub: '<i>Person In Charge</i>',
        description: "SAKHA: Teman, Sahabat, dan Kawan<br>Logo: Kecapi<br><br>Kecapi adalah alat musik tradisional Sulawesi Barat yang mengiringi dan menghasilkan melodi merdu jika kedua senarnya dipetik dengan selaras. Sama halnya dengan Sakha yang dapat mencapai potensi terbaiknya dengan bimbingan yang baik dan benar, serta menjadi pengiring bagi peserta OMB UMN 2024.<br><br><hr><br>Sakha bertugas untuk mengiring dan membimbing peserta OMB UMN 2024 agar siap menghadapi dunia perkuliahan.",
        photo1: Pic1,
        photo2: Pic2,
        photo3: Pic3,
        link: "https://forms.gle/uR4t7BRDwQXog4tj6",
        sound: PicSound,
        oprec2: 1
    },
    {   logo: Dokum,
        name: "BASKARA",
        sub: 'Dokumentasi',
        description: "BASKARA: Matahari dan Surya<br>Logo: Rebab<br><br>Rebab merupakan alat musik asal Jawa Barat yang dimainkan dengan cara digesekan. Rebab memiliki 3 bagian (watangan, bathokan, dan sikilan) serta 1 bagian (senggreng) yang membuat Rebab dapat menghasilkan suaranya. Hal tersebut melambangkan kesatuan dari Baskara subdivisi foto dan video yang membutuhkan keselarasan supaya dapat menghasilkan karya yang indah. Rebab juga dikenal sebagai salah satu instrumen pembuka dalam sebuah pertunjukan kesenian. Hal ini melambangkan Baskara yang berperan sebagai pembuka pintu kenangan untuk setiap momen yang dihasilkan dari OMB UMN 2024.<br><br><hr><br>Baskara bertugas untuk mendokumentasikan seluruh rangkaian kegiatan OMB UMN 2024 agar menjadi sebuah kenangan indah tak terlupakan yang dibungkus dalam bentuk foto dan video.",
        photo1: Dokum1,
        photo2: Dokum2,
        photo3: Dokum3,
        link: "https://forms.gle/zXQhNw18whKMiqUX8",
        sound: DokumSound,
        oprec2: 0
    },
    {   logo: Perkap,
        name: "GAJENDRA",
        sub: 'Perlengkapan',
        description: "GAJENDRA: Perkasa<br>Logo: Bonang<br><br>Bonang merupakan alat musik tradisional asal Jawa Tengah yang biasanya digunakan dengan cara dipukul. Alat musik tersebut dipilih karena terbuat dari bahan logam seperti kuningan, perunggu, atau besi. Hai ini mencerminkan Gajendra yang kuat dan perkasa dalam menunjukkan kemampuannya dalam menyukseskan segala keperluan logistik selama rangkaian OMB UMN 2024 berlangsung.<br><br><hr><br>Gajendra bertugas untuk menyiapkan segala kebutuhan logistik pada seluruh rangkaian OMB UMN 2024.",
        photo1: Perkap1,
        photo2: Perkap2,
        photo3: Perkap3,
        link: "https://forms.gle/kJFxaWLMrzV9YfgCA",
        sound: PerkapSound,
        oprec2: 1
    },
    { 
        logo: Acara, 
        name: "BALWANA",
        sub: 'Acara', 
        description: "BALWANA: Akar<br>Logo: Kendang<br><br>Kendang terbuat dari batang pohon, sedangkan arti dari divisi acara adalah akar. Tanpa adanya akar, pohon tidak akan tumbuh. Kendang sendiri dalam bahasa Sanskerta memiliki arti memukul atau menabuh, sehingga serupa dengan divisi balwana yang akan menabuh konsep OMB UMN 2024.<br><br><hr><br>Balwana bertugas membuat dan mengembangkan konsep kegiatan OMB UMN 2024, untuk mengesekusi program acara yang sejalan dengan nilai dan tujuan konsep OMB UMN 2024. Fokus pada pengembangan pribadi, termasuk peningkatan keterampilan, kepercayaan diri, dan semangat juang panitia serta peserta OMB UMN 2024.",
        photo1: Acara1,
        photo2: Acara2,
        photo3: Acara3, 
        link: "https://forms.gle/uLprvDjuDMPv4rox5",
        sound: AcaraSound,
        oprec2: 1
    },
    {   logo: Keamanan,
        name: "BIMASENA",
        sub: 'Keamanan',
        description: "BIMASENA: Panglima Gagah Berani<br>Logo: Genggong<br><br>Genggong merupakan alat musik tradisional yang berasal dari Bali. Penggunaan alat musik ini memiliki keunikan di mana alat musik ini membutuhkan keahlian khusus dengan sikap posisi tubuh yang baik agar dapat menghasilkan nada yang indah. Hal ini selaras dengan Bimasena yang memerlukan keahlian dan sikap yang baik agar dapat menjalankan peran serta tugasnya dengan maksimal pada OMB UMN 2024.<br><br><hr><br>Bimasena bertugas untuk menjaga kedisiplinan, keamanan, kekondusifan, serta kelancaran rangkaian kegiatan OMB UMN 2024.",
        photo1: Keamanan1,
        photo2: Keamanan2,
        photo3: Keamanan3,
        link: "https://forms.gle/F5QWbumyWKryA3qJ9",
        sound: KeamananSound,
        oprec2: 1
    },
];

const Divisi = () => {
    const [selectedDivisi, setSelectedDivisi] = useState(null);

    const handleDivisiClick = (index) => {
        const selectedData = divisiInfo[index];
        setSelectedDivisi(selectedData);
        localStorage.setItem('selectedDivisi', JSON.stringify(selectedData));

        const audio = document.getElementById(`audio_${index}`);
        if (audio) {
            audio.volume = 0.1; // Set initial volume
            audio.play();
        }
    };

    const handleCloseModal = () => {
        setSelectedDivisi(null);
    };

    const handleLinkClick = () => {

    };

    return (
        <>
            {/* Modal */}
            {selectedDivisi && (
                <div className="overlay">
                    <div className="modal">
                        <div className='close_button'>
                            <img src={X} alt="Close button" onClick={handleCloseModal} />
                        </div>
                        <div className='content_section'>
                            <div className='logo_and_text'>
                                <div className='divisi_logo'>
                                    <img src={selectedDivisi.logo} alt={selectedDivisi.name} />
                                </div>
                                <div className='divisi_desc'>
                                    <div className='logo_text'>
                                        <h3>{selectedDivisi.name}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: selectedDivisi.sub }} />
                                    </div>
                                    <p dangerouslySetInnerHTML={{ __html: selectedDivisi.description }} />
                                </div>
                            </div>
                            <div className='photos_wrapper'>
                                <div className='each_photo'>
                                    <img src={selectedDivisi.photo1} alt="Tets" />
                                </div>
                                <div className='each_photo'>
                                    <img src={selectedDivisi.photo2} alt="Tets" />
                                </div>
                                <div className='each_photo'>
                                    <img src={selectedDivisi.photo3} alt="Tets" />
                                </div>
                            </div>
                        </div>
                        {/* Menampilkan Button untuk Jadwal Wawancara */}
                        {selectedDivisi.oprec2 == 0 &&
                        ( 
                            <div className='button_section'>
                                <div className='cta_button'>
                                    <a
                                        href="/jadwal-wawancara"
                                        onClick={handleLinkClick}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <button>
                                            {selectedDivisi.name === "BALWANA" ? "Jadwal Seleksi" : "Jadwal Wawancara"} {selectedDivisi.name}
                                            <img src={ArrowRight} alt="Arrow Icon" />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        )}
                        {/* Menampilkan 2 Button Untuk Divisi OPREC BATCH 2*/}
                        {selectedDivisi.oprec2 == 1 &&
                        ( 
                            <div className='button_section'>
                                {/* Button Daftar Batch #2 */}
                                <div className='cta_button'>
                                    <a
                                        // href={selectedDivisi.link}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <button onClick={() => window.open(selectedDivisi.link, '_blank')}>
                                        Daftar {selectedDivisi.name}
                                        <img src={ArrowRight} alt="Arrow Icon" />
                                        </button>
                                    </a>
                                </div>
                                {/* Button Lihat Jadwal */}
                                <div className='cta_button'>
                                    <a
                                        href="/jadwal-wawancara"
                                        onClick={handleLinkClick}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <button>
                                            {selectedDivisi.name === "BALWANA" ? "Jadwal Seleksi" : "Jadwal Wawancara"} {selectedDivisi.name}
                                            <img src={ArrowRight} alt="Arrow Icon" />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <section className="divisi_section" id='divisi_section'>
                <img className='divisi_supergrafis' src={Supergrafis2} alt="Supergrafis" />
                <div className="title_and_description">
                    <div className='divisi_title'>
                        <img src={Supergrafis} alt="Supergrafis" />
                        <h1>Informasi Divisi</h1>
                    </div>
                    <p>Klik divisi pilihan kalian untuk melihat jadwal wawancaranya!</p>
                    {/* <div className='notes'>
                        <p>Kami mengimbau kepada calon panitia OMB UMN 2024 untuk memakai <i>email</i> pribadi saat mengisi Formulir Pendaftaran!</p>
                        <img src={Warning} alt="Circle Warning" />
                    </div> */}
                </div>
                <div className="divisi_wrapper">
                    {divisiInfo.map((divisi, index) => (
                        <div className="each_divisi" key={index} onClick={() => handleDivisiClick(index)}>
                            <img className={`${divisi.color}`} src={divisi.logo} alt={divisi.name} />
                            <audio id={`audio_${index}`} src={divisi.sound} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Divisi;