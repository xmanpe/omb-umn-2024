import { useLocation } from 'react-router';

import './Footer.scss';

// import icons
import Line from '../../images/icons/line.svg'
import Instagram from '../../images/icons/instagram.svg'
import Facebook from '../../images/icons/facebook.svg'
import Website from '../../images/icons/Navigation/Globe.svg'
import Youtube from '../../images/icons/youtube.svg'
import Email from '../../images/icons/Communication/Mail.svg'
import Spotify from '../../images/icons/spotify.svg'
import Twitter from '../../images/icons/twitter.svg'
import Image from '../../images/icons/image.svg'
import WhatsApp from '../../images/icons/whatsapp.svg'

// import images
import FooterLogo from '../../images/Logo OMB 2024 - Biru.png'
import Wave from '../../images/waves/Wave Two.png'
import WaveWater from '../../images/Transisi Air.png'

const Footer = () => {
    const location = useLocation();
    const isJadwalWawancaraPage = location.pathname === '/hasil-seleksi';
    const isPesertaMengulangPage = location.pathname === '/daftar-peserta';
    const isHomePage = location.pathname === '/';
    const isPelaksanaanPage = location.pathname === '/pelaksanaan';
    const isAtributPesertaPage = location.pathname === '/atribut-peserta';
    const isTentangOMBPage = location.pathname === '/tentang-omb';
    const isFaqPage = location.pathname === '/faq';
    const isMobilitasPage = location.pathname === '/mobilitas-peserta';
    const isLinimasaPage = location.pathname === '/linimasa';
    const isDivisiPage = location.pathname === '/divisi';
    const isMarsPage = location.pathname === '/mars';

    return (
        <footer className='footer_section'>
            {(isHomePage || isPelaksanaanPage || isAtributPesertaPage || isTentangOMBPage || isFaqPage || isMobilitasPage || isLinimasaPage || isDivisiPage || isMarsPage ) && <img className='wave' src={Wave} alt="Wave" />}
            <div className='footer_content'>
                <div className='footer_top'>
                    <div className='left_content'>
                        <h1>Alamat</h1>
                        <p>Universitas Multimedia Nusantara Jl. Scientia Boulevard, Gading Serpong, Tangerang Banten 15811, Indonesia.</p>
                    </div>
                    <div className='mid_content'>
                        <img src={FooterLogo} alt="Logo OMB UMN 2024" />
                    </div>
                    <div className='right_content'>
                        <div className='list_content'>
                            <h1>Pranala</h1>
                            <div className='list_wrapper'>
                                <div className='each_list'>
                                    <img src={Website} alt="website" />
                                    <a href='#hero'>omb.umn.ac.id</a>
                                </div>
                                {/* <div className='each_list'>
                                    <img src={Image} alt="documntation website" />
                                    <a href='https://documntation.umn.ac.id/' target='_blank'>Ananta - Web Dokum OMB 2023</a>
                                </div> */}
                                <div className='each_list'>
                                    <img src={Youtube} alt="youtube" />
                                    <a href='https://www.youtube.com/@OMBUMN' target='_blank'>DocUMNtation</a>
                                </div>
                                <div className='each_list'>
                                    <img src={Spotify} alt="spotify" />
                                    <a href='https://open.spotify.com/show/3n5IKS6vFtpK1h1rgnlzKm?si=39ab47b3f2214e83' target='_blank'>Swara Bestari</a>
                                </div>
                            </div>
                        </div>
                        <div className='list_content'>
                            <h1>Kontak</h1>
                            <div className='list_wrapper'>
                                <div className='each_list'>
                                    <img src={Email} alt="email" />
                                    <a href='mailto:publicrelation.omb@gmail.com' target='_blank'>omb@umn.ac.id</a>
                                </div>
                                <div className='each_list'>
                                    <img src={Line} alt="line" />
                                    <a href='https://timeline.line.me/user/_dQto-n6wJSbyUlsQVlEfNHoStsNJwzSLtfVj2Xo' target='_blank'>@yqq6359s</a>
                                </div>
                                <div className='each_list'>
                                    <img src={Instagram} alt="instagram" />
                                    <a href='https://www.instagram.com/ombumn' target='_blank'>@ombumn</a>
                                </div>
                                <div className='each_list'>
                                    <img src={WhatsApp} alt="whatsapp" />
                                    <a href='https://wa.me/6285179959923' target='_blank'>085179959923</a>
                                </div>
                                <div className='each_list'>
                                    <img src={Facebook} alt="facebook" />
                                    <a href='https://www.facebook.com/ombumn/?_rdc=2&_rdr' target='_blank'>OMB UMN 2024</a>
                                </div>
                                <div className='each_list'>
                                    <img src={Twitter} alt="x" />
                                    <a href='https://x.com/ombumn' target='_blank'>@ombumn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_bottom'>
                    <div className='top_info'>
                        <p className='copyright'>© OMB UMN 2024</p>
                        <p className='slebew'>Dikelola oleh <span className="nayanika">Divisi Nayanika<span className="popover">Cie nyariin Nayanika... koornya, ya? 🤭</span></span></p>
                        <br />
                        <p className='update'>Konten diperbarui per tanggal 24 Juli 2024</p>
                    </div>
                </div>
            </div>
            <img className='wave-water' src={WaveWater} alt="wave water" />
        </footer>
    );
}
 
export default Footer;