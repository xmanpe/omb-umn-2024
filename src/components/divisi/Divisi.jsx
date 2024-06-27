import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Divisi.scss';

import PesertaWawancara from '../peserta-wawancara/PesertaWawancara';

// import icons
import X from '../../images/Menu/Close_MD.svg'
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg'
import Warning from '../../images/Warning/Circle_Warning.svg'
import External from '../../images/icons/External.svg'
import Suara from '../../images/icons/sound.svg'

// import supergraphics
import Supergrafis from '../../images/supergrafis/SUPERGRAFIS METALLIC VIOLET/Fill - Bunga Lotus Biru 3.svg'
import Supergrafis2 from '../../images/supergrafis/Apaituomb Supergrafis.png'
import Wave from '../../images/waves/Wave Two.png'
import SecondWave from '../../images/waves/Wave Three.png'

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
import BphSound from '../../audio/gandara.mp3'

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
import MedisSound from '../../audio/saraya.mp3'

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
    { 
        logo: Acara, 
        name: "BALWANA",
        sub: 'Acara', 
        description: "Kendang terbuat dari batang pohon, sedangkan arti dari divisi acara adalah akar. Tanpa adanya akar, pohon tidak akan tumbuh. Kendang sendiri dalam bahasa Sansekerta memiliki arti memukul atau menabuh, sehingga serupa dengan divisi Balwana yang akan menabuh konsep OMB UMN 2024.<br><br>Balwana bertugas membuat dan mengembangkan konsep kegiatan OMB UMN 2024, untuk mengeksekusi program acara yang sejalan dengan nilai dan tujuan konsep OMB UMN 2024. Fokus pada pengembangan pribadi, termasuk peningkatan keterampilan, kepercayaan diri, dan semangat juang panitia serta calon mahasiswa baru OMB UMN 2024.",
        arti: 'Akar',
        senjata: 'Kendang',
        wikipedia: 'https://id.wikipedia.org/wiki/Kendang',
        photo1: Acara1,
        photo2: Acara2,
        photo3: Acara3, 
        link: "https://forms.gle/uLprvDjuDMPv4rox5",
        sound: AcaraSound,
        oprec2: 0 
    },
    {   logo: Bph,
        name: "GANDARA",
        sub: 'Badan Pengurus Harian',
        description: "Angklung merupakan rangkaian alat musik yang berasal dari Jawa Barat. Alat musik ini menggambarkan kesempurnaan yang tercapai ketika kita dapat melengkapi satu sama lain. Hal ini melambangkan Gandara sebagai rangkaian nada suara yang senantiasa saling melengkapi sesamanya sekaligus menyempurnakan segala hal yang ada di OMB UMN 2024.<br><br>Gandara bertugas sebagai pemimpin dan bertanggung jawab atas seluruh rangkaian kegiatan OMB UMN 2024.",
        arti: 'Kelompok Nada Suara',
        senjata: 'Angklung',
        wikipedia: 'https://id.wikipedia.org/wiki/Angklung',
        photo1: Bph1,
        photo2: Bph2,
        photo3: Bph3,
        link: null,
        sound: BphSound,
        oprec2: 0
    },
    {   logo: Pic,
        name: "SAKHA",
        sub: '<i>Person In Charge</i>',
        description: "Kecapi adalah alat musik tradisional Sulawesi Barat yang mengiringi dan menghasilkan melodi merdu jika kedua senarnya dipetik dengan selaras. Sama halnya dengan Sakha yang dapat mencapai potensi terbaiknya dengan bimbingan yang baik dan benar, serta menjadi pengiring bagi peserta OMB UMN 2024.<br><br>Sakha bertugas untuk mengiring dan membimbing peserta OMB UMN 2024 agar siap menghadapi dunia perkuliahan.",
        arti: 'Teman, Sahabat, dan Kawan',
        senjata: 'Kecapi',
        wikipedia: 'https://id.wikipedia.org/wiki/Kecapi',
        photo1: Pic1,
        photo2: Pic2,
        photo3: Pic3,
        link: "https://forms.gle/uR4t7BRDwQXog4tj6",
        sound: PicSound,
        oprec2: 0
    },
    {   logo: Pr,
        name: "CAKSANA",
        sub: '<i>Public Relations</i>',
        description: "Talindo merupakan alat musik dari Sulawesi Selatan yang memiliki bentuk seperti busur dan terdapat tempurung kelapa sebagai tonggak utama agar Talindo bisa berdiri. Hal tersebut sesuai dengan peran Caksana, yang menjadi tonggak utama dalam penyampaian informasi dengan jelas dan penuh dedikasi kepada para peserta, untuk menjaga reputasi baik OMB UMN 2024.<br><br>Caksana bertanggung jawab dalam membuat dan menyebarkan informasi yang akurat serta detail kepada peserta OMB UMN 2024.",
        arti: 'Bijak Bestari',
        senjata: 'Talindo',
        wikipedia: 'https://id.wikipedia.org/wiki/Talindo',
        photo1: Pr1,
        photo2: Pr2,
        photo3: Pr3,
        link: "https://forms.gle/Zpf7xte6dfFNBUgg8",
        sound: PrSound,
        oprec2: 0
    },
    {   logo: Desain,
        name: "LAVANYA",
        sub: 'Desain',
        description: "Seruling adalah alat musik tradisional dari Jawa Barat yang digunakan untuk menciptakan alunan musik yang indah. Seperti seruling yang dapat menghasilkan nada dan suara merdu bila dikomposisikan dengan benar, maka ketelitian dan kreativitas tinggi dapat menghasilkan segala media desain OMB UMN 2024 yang berkualitas.<br><br>Lavanya bertanggung jawab merancang segala kebutuhan desain grafis melalui berbagai media kreatif untuk membangun identitas visual OMB UMN 2024 yang berkualitas secara kreatif dan inovatif.",
        arti: 'Keindahan dan Kecantikan',
        senjata: 'Seruling',
        wikipedia: 'https://id.wikipedia.org/wiki/Seruling',
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
        description: "Rumba merupakan alat musik tradisional asal Kuba yang dibawa ke Ambon yang biasanya dimainkan dengan musik hawaiian. Rumba juga digunakan untuk menyatukan tarian dengan alat musik yang sedang bermain. Seperti Nayanika yang menyatukan peserta OMB UMN 2024 dengan memberikan wadah informasi.<br><br>Nayanika bertugas dalam merancang <i>website</i> resmi OMB UMN 2024.",
        arti: 'Mata Yang Indah',
        senjata: 'Rumba',
        wikipedia: 'https://id.wikipedia.org/wiki/Rumba',
        photo1: Web1,
        photo2: Web2,
        photo3: Web3,
        link: "https://forms.gle/nttxPLQZNsDtLZrv9",
        sound: WebSound,
        oprec2: 0,
    },
    {   logo: Dokum,
        name: "BASKARA",
        sub: 'Dokumentasi',
        description: "Rebab merupakan alat musik asal Jawa Barat yang dimainkan dengan cara digesekan. Rebab memiliki 3 bagian (watangan, bathokan, sikilan) dan 1 bagian (senggreng) yang membuat Rebab dapat menghasilkan suaranya. Hal tersebut melambangkan kesatuan dari Baskara subdivisi foto dan video yang membutuhkan keselarasan supaya dapat menghasilkan karya yang indah. Rebab juga dikenal sebagai salah satu instrumen pembuka dalam sebuah pertunjukan kesenian. Ini melambangkan Baskara yang berperan sebagai pembuka pintu kenangan untuk setiap momen yang dihasilkan dari OMB UMN 2024.<br><br>Baskara bertugas untuk mendokumentasikan seluruh rangkaian kegiatan OMB UMN 2024 agar menjadi sebuah kenangan indah tak terlupakan yang dibungkus dalam bentuk foto dan video.",
        arti: 'Matahari dan Surya',
        senjata: 'Rebab',
        wikipedia: 'https://id.wikipedia.org/wiki/Rebab',
        photo1: Dokum1,
        photo2: Dokum2,
        photo3: Dokum3,
        link: "https://forms.gle/zXQhNw18whKMiqUX8",
        sound: DokumSound,
        oprec2: 0
    },
    {   logo: Keamanan,
        name: "BIMASENA",
        sub: 'Keamanan',
        description: "Genggong merupakan alat musik tradisional yang berasal dari Bali. Penggunaan alat musik ini memiliki keunikan di mana alat musik ini membutuhkan keahlian khusus dengan sikap posisi tubuh yang baik agar dapat menghasilkan nada yang indah. Hal ini selaras dengan Bimasena yang memerlukan keahlian dan sikap yang baik agar dapat menjalankan peran serta tugasnya dengan maksimal pada OMB UMN 2024.<br><br>Bimasena bertugas untuk menjaga kedisiplinan, keamanan, kekondusifan, serta kelancaran rangkaian kegiatan OMB UMN 2024.",
        arti: 'Panglima Gagah Berani',
        senjata: 'Genggong',
        wikipedia : 'https://id.wikipedia.org/wiki/Genggong',
        photo1: Keamanan1,
        photo2: Keamanan2,
        photo3: Keamanan3,
        link: "https://forms.gle/F5QWbumyWKryA3qJ9",
        sound: KeamananSound,
        oprec2: 0
    },
    {   logo: Perkap,
        name: "GAJENDRA",
        sub: 'Perlengkapan',
        description: "Bonang merupakan alat musik tradisional asal Jawa Tengah yang biasanya digunakan dengan cara dipukul. Alat musik tersebut dipilih karena terbuat dari bahan logam seperti kuningan, perunggu, atau besi. Hal ini mencerminkan Gajendra yang kuat dan perkasa dalam menunjukkan kemampuannya dalam menyukseskan segala keperluan logistik selama rangkaian OMB UMN 2024 berlangsung.<br><br>Gajendra bertugas untuk menyiapkan segala kebutuhan logistik pada seluruh rangkaian OMB UMN 2024.",
        arti: 'Perkasa',
        senjata: 'Bonang',
        wikipedia: 'https://id.wikipedia.org/wiki/Bonang',
        photo1: Perkap1,
        photo2: Perkap2,
        photo3: Perkap3,
        link: "https://forms.gle/kJFxaWLMrzV9YfgCA",
        sound: PerkapSound,
        oprec2: 0 
    },
    {   logo: Konsum,
        name: "SARKARA",
        sub: 'Konsumsi',
        description: "Rindik adalah alat tradisional berasal dari Bali. Pembuatan alat musik ini terbuat dari potongan bambu pilihan yang telah diproses. Hal ini menggambarkan Sarkara yang dapat menyediakan keberagaman makanan yang sehat dan bermanfaat bagi Panitia OMB UMN 2024 dimana pun dan kapan pun.<br><br>Sarkara bertugas untuk bertanggung jawab terkait makanan dan minuman yang bergizi serta dapat menyehatkan bagi seluruh panitia selama rangkaian kegiatan OMB UMN 2024.",
        arti: 'Gula dan Madu',
        senjata: 'Rindik',
        wikipedia: 'https://id.wikipedia.org/wiki/Rindik',
        photo1: Konsum1,
        photo2: Konsum2,
        photo3: Konsum3,
        link: "https://forms.gle/azqSnv4cVXBFD6fdA",
        sound: KonsumSound,
        oprec2: 0 // 0 : nampilin jadwal doang , 1 : nampilin tombol daftar juga, -1 : ga nampilin apa-apa
    },
    {   logo: Medis,
        name: "SARAYA",
        sub: 'Medis',
        description: "Karinding merupakan alat musik asal Jawa Barat. Alat musik ini memiliki filosofi “yakin, sabar, dan sadar” dan menjadi dasar sikap yang kuat dalam memberikan pertolongan pertama dengan kepercayaan diri, ketenangan, dan kesadaran terhadap kondisi sekitar.<br><br>Saraya bertugas menyediakan dukungan kesehatan dan pelayanan medis kepada panitia maupun peserta OMB UMN 2024.",
        arti: 'Bantuan dan Penolong',
        senjata: 'Karinding',
        wikipedia: 'https://id.wikipedia.org/wiki/Karinding',
        photo1: Medis1,
        photo2: Medis2,
        photo3: Medis3,
        link: null,
        sound: MedisSound,
        oprec2: 0 
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
            audio.volume = 0.2;
            audio.play();
        }
    };

    const suaraClick = (index) => {
        const audio = document.getElementById(`audio_${index}`);
        if (audio) {
            audio.volume = 0.2;
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
                                </div>
                            </div>
                            <div className='divisi-explain'>
                                <div className='core-desc'>
                                    <div className='each-core'>
                                        <p className='placeholder'>Logo</p>
                                        <div className='the-flex'>
                                            <p className='info'>
                                                {selectedDivisi.senjata}
                                            </p>
                                            <a href={selectedDivisi.wikipedia} target='_blank'>
                                                <img src={External} alt="external" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='each-core bottom-core'>
                                        <p className='placeholder'>Arti</p>
                                        <p className='info'>{selectedDivisi.arti}</p>
                                    </div>
                                </div>
                                <div className='long-desc'>
                                    <p className='long-p' dangerouslySetInnerHTML={{ __html: selectedDivisi.description }} />
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
                        {/* <div className='button_section'>
                            <p>This is the left text of the button</p>
                            <a href="">
                                <button onClick={handleLinkClick}>Daftar Sekarang
                                    <img src={ArrowRight} alt="Arrow Right" />
                                </button>
                            </a>
                        </div> */}
                    </div>
                </div>
            )}

            <section className="divisi_section" id='divisi_section'>
                {/* <img className='wave_two' src={Wave} alt="Wave" /> */}
                <img className='divisi_supergrafis' src={Supergrafis2} alt="Supergrafis" />
                <div className="title_and_description">
                    <div className='divisi_title'>
                        <img src={Supergrafis} alt="Supergrafis" />
                        <h1>Divisi-Divisi OMB UMN</h1>
                    </div>
                    <p>Klik divisi untuk melihat informasi lebih lanjut.</p>
                    {/* <div className='notes'>
                        <img src={Warning} alt="Circle Warning" />
                        <p>Pendaftaran kepanitiaan OMB UMN 2024 <i>batch</i> 2 telah dibuka untuk beberapa divisi. Kami mengimbau kepada calon panitia OMB UMN 2024 untuk memakai <i>email</i> pribadi saat mengisi Formulir Pendaftaran!</p>
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
                {/* <img className='wave_three' src={SecondWave} alt="Wave" /> */}
            </section>
        </>
    );
};

export default Divisi;