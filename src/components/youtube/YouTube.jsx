import { useCallback } from 'react';

import './YouTube.scss';

// import images
import Wave from '../../images/waves/Wave Two.png'
import SecondWave from '../../images/waves/Wave Three.png'

// import icons
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg'

// import supergraphics
import BottomAir from '../../images/supergrafis/Bottom Air.svg'

const YouTube = () => {

    const openYouTubeLink = useCallback(() => {
        window.open("https://www.youtube.com/@OMBUMN", "_blank");
    }, []);

    return (
        <section className="youtube_section">
            <img className='wave_two' src={Wave} alt="Wave" />
            <div className='youtube_content'>
                <div className='the_title'>
                    <h1>Lotus Biru memancarkan senja benderang,<br />Apa kabar calon pejuang? </h1>
                </div>
                <div className='video_player'> 
                    <iframe src="https://www.youtube.com/embed/2kEr_VZhWcw?si=a-ukASx9MkqjD-iv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='cta_button'>
                    <button onClick={openYouTubeLink}>YouTube OMB UMN
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
            </div>
            <img className='wave_three' src={SecondWave} alt="Wave" />
            <img className='bottom_air' src={BottomAir} alt="Supergrafis" />
        </section>
    );
}
 
export default YouTube;