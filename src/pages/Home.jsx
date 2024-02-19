import React, { useState, useEffect } from 'react';

// import components
import Hero from '../components/hero/Hero';
import SmallModal from '../components/small modal/SmallModal';
import ApaItuOMB from '../components/apa itu omb/ApaItuOMB';
import YouTube from '../components/youtube/YouTube';
import Divisi from '../components/divisi/Divisi';
import Ananta from '../components/ananta/Ananta';
import Footer from '../components/footer/Footer';
import BottomNav from '../components/bottomnav/BottonNav';

import Experience from '../components/experience/Experience';


const Home = () => {
    const [showExperience, setShowExperience] = useState(false);

    useEffect(() => {
        localStorage.setItem('scrollPosition', window.pageYOffset);
        // Retrieve scroll position from local storage
        const scrollPosition = localStorage.getItem('scrollPosition');

        // Scroll to the previous position
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition));
        }
        // Check screen size on component mount and resize
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setShowExperience(screenWidth >= 1200);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        
        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <BottomNav />
            {showExperience && <SmallModal />}
            {/* {showExperience && <Experience />} */}
            <Hero />
            <ApaItuOMB />
            <YouTube />
            <Divisi />
            <Ananta />
            <Footer />
        </>
    );
}
 
export default Home;