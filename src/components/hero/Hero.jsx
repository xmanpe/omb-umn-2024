import './Hero.scss';

// import components
import AnnCard from '../cards/ann card/AnnCard';
import AnnCard2 from '../cards/ann card/AnnCard2';
import AnnCard3 from '../cards/ann card/AnnCard3';

// import supergraphics
import Supergrafis from '../../images/supergrafis/Hero Supergrafis.png'

// import images
import LogoOMB2024 from '../../images/Logo OMB 2024.png'
import TaglineOMB2024 from '../../images/Tagline OMB 2024.png'
import Wave from '../../images/waves/Wave One.png'
import NewWave from '../../images/waves/Wave Baru.png'

const Hero = () => {
    return (
        <section className="hero_section" id='hero'>
            <img className='hero_supergrafis' src={Supergrafis} alt="Supergrafis" />
            <div className='the_hero_content'>
                <div className='logo_section'>
                    <img className='logo_omb' src={LogoOMB2024} alt="Logo OMB 2024" />
                    <img className='tagline_omb' src={TaglineOMB2024} alt="Tagline OMB 2023" />
                </div>
                <div className='announcement_section'>
                    <AnnCard />
                    <AnnCard2 />
                    <AnnCard3 />
                </div>
                <div className='bem_section'>
                    <p>BAGIAN DARI BEM UMN</p>
                </div>
            </div>
            <img className='wave' src={Wave} alt="Wave" />
            <img className='new-wave' src={NewWave} alt="wave baru" />
        </section>
    );
}
 
export default Hero;