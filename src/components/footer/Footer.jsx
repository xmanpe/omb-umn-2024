import { useLocation } from 'react-router';

import './Footer.scss';

// import icons
import Line from '../../images/icons/line.svg'
import Instagram from '../../images/icons/instagram.svg'
import Facebook from '../../images/icons/facebook.svg'
import Website from '../../images/icons/Navigation/Globe.svg'
import Youtube from '../../images/icons/youtube.svg'
import Email from '../../images/icons/Communication/Mail.svg'

// import images
import FooterLogo from '../../images/Logo OMB 2024 - Biru.png'
import Wave from '../../images/waves/Wave Two.png'

const Footer = () => {
    const location = useLocation();
    const isJadwalWawancaraPage = location.pathname === '/hasil-seleksi';
    const isPesertaMengulangPage = location.pathname === '/peserta-mengulang';

    return (
        <footer className='footer_section'>
            {isPesertaMengulangPage && <img className='wave' src={Wave} alt="Wave" />}
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
                                    <img src={Facebook} alt="facebook" />
                                    <a href='https://www.facebook.com/ombumn/?_rdc=2&_rdr' target='_blank'>OMB UMN 2024</a>
                                </div>
                            </div>
                        </div>
                        <div className='list_content'>
                            <h1>Pranala</h1>
                            <div className='list_wrapper'>
                                <div className='each_list'>
                                    <img src={Website} alt="website" />
                                    <a href='#hero'>omb.umn.ac.id</a>
                                </div>
                                <div className='each_list'>
                                    <img src={Youtube} alt="youtube" />
                                    <a href='https://www.youtube.com/@OMBUMN' target='_blank'>DocUMNtation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_bottom'>
                    <div className='top_info'>
                        <p className='copyright'>© OMB UMN 2024</p>
                        <p className='slebew'>Dikelola oleh Divisi NAYANIKA</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;