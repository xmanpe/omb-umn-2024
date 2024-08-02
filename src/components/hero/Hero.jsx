import React from 'react';
import './Hero.scss';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper/modules';

// import components
import AnnCard from '../cards/ann card/AnnCard';
import AnnCard2 from '../cards/ann card/AnnCard2';
import AnnCard3 from '../cards/ann card/AnnCard3';
import AnnCard4 from '../cards/ann card/AnnCard4';

// import supergraphics
import Supergrafis from '../../images/supergrafis/Hero Supergrafis.png'

// import images
import LogoOMB2024 from '../../images/Logo OMB 2024.png'
import TaglineOMB2024 from '../../images/Tagline OMB 2024.png'
import Wave from '../../images/waves/Wave One.png'
import NewWave from '../../images/waves/Wave Baru.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
    return (
        <section className="hero_section" id='hero'>
            <img className='hero_supergrafis' src={Supergrafis} alt="Supergrafis" />
            <div className='the_hero_content'>
                <div className='logo_section'>
                    <img className='logo_omb' src={LogoOMB2024} alt="Logo OMB 2024" />
                    <img className='tagline_omb' src={TaglineOMB2024} alt="Tagline OMB 2023" />
                </div>
            </div>

            <div className='announcement_swiper'>
                <Swiper
                    spaceBetween={16}
                    modules={[Navigation, Pagination, Autoplay, A11y, Mousewheel]}
                    // slidesPerView={1.3}
                    breakpoints={{
                        432: {
                            slidesPerView: 1,
                        },
                        560: {
                            slidesPerView: 1,
                        },
                        810: {
                            slidesPerView: 1,
                        },
                        1200: {
                            slidesPerView: 2,
                        },
                        1440: {
                            slidesPerView: 2,
                        },
                        1920: {
                            slidesPerView: 2,
                        },
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    mousewheel={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide><AnnCard /></SwiperSlide>
                    <SwiperSlide><AnnCard3 /></SwiperSlide>
                    <SwiperSlide><AnnCard2 /></SwiperSlide>
                    <SwiperSlide><AnnCard4 /></SwiperSlide>
                </Swiper>
            </div>

            <div className='bem_section'>
                <p>BAGIAN DARI BEM UMN</p>
            </div>

            <img className='wave' src={Wave} alt="Wave" />
            <img className='new-wave' src={NewWave} alt="wave baru" />
        </section>
    );
}

export default Hero;
