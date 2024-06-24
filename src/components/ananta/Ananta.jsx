import { useCallback } from 'react';

import './Ananta.scss';

// import icons
import ArrowRight from '../../images/Arrow/Arrow_Right_MD_Brown.svg'

// import images
import Stacks from '../../images/Stacks.png'
import Wave from '../../images/waves/Wave Two.png'
import SecondWave from '../../images/waves/Wave Three.png'
import Kupu from '../../images/ananta/kupu.png'

const Ananta = () => {

    const openYouTubeLink = useCallback(() => {
        window.open("https://documntation.umn.ac.id/", "_blank");
    }, []);

    return (
        <section className="ananta_section">
            <img className='wave_ananta_top' src={SecondWave}alt="Wave" />
            <div className='ananta_content'>
                <img className='kupu_top' src={Kupu} alt="Kupu ananta" />
                <div className='the_content'>
                    <div className='left'>
                        <img src={Stacks} alt="Stack images" />
                    </div>
                    <div className='right'>
                        <div className='the_title'>
                            <h1>Kilas Balik Ananta</h1>
                            <p>Ingatkah tatkala itu? <br />Melalui Ananta, perjuangan Kupu-kupu Bidadari telah terukir dan dikenang abadi. Kini, tiba saatnya pejuang Lotus Biru mengukir kenangan dalam sejarah baru! </p>
                        </div>
                        <div className='cta_button'>
                        <button onClick={openYouTubeLink}>Ananta
                            <img src={ArrowRight} alt="Arrow Icon" />
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <img className='wave_ananta_bottom' src={SecondWave} alt="Wave" />
        </section>
    );
}
 
export default Ananta;