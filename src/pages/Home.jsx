import React, { useState, useEffect } from 'react';
import Loading from '../components/loading/Loading';
import Hero from '../components/hero/Hero';
import SmallModal from '../components/small modal/SmallModal';
import ApaItuOMB from '../components/apa itu omb/ApaItuOMB';
import YouTube from '../components/youtube/YouTube';
import Divisi from '../components/divisi/Divisi';
import Ananta from '../components/ananta/Ananta';
import Footer from '../components/footer/Footer';
import BottomNav from '../components/bottomnav/BottonNav';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showExperience, setShowExperience] = useState(false);

  useEffect(() => {
    // Function to check if all components are loaded
    const checkAllComponentsLoaded = () => {
      const components = document.querySelectorAll('.component');
      for (let i = 0; i < components.length; i++) {
        if (components[i].complete === false) {
          return false;
        }
      }
      return true;
    };

    // Check if all components are loaded every 500ms
    const checkLoading = setInterval(() => {
      if (checkAllComponentsLoaded()) {
        setLoading(false);
        clearInterval(checkLoading); // Stop checking once all components are loaded
      }
    }, 500);

    // Cleanup interval on component unmount
    return () => clearInterval(checkLoading);
  }, []);

  useEffect(() => {
    localStorage.setItem('scrollPosition', window.pageYOffset);

    const scrollPosition = localStorage.getItem('scrollPosition');

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
    }

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowExperience(screenWidth >= 1200);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <BottomNav /> */}
          {showExperience && <SmallModal />}
          {/* {showExperience && <Experience />} */}
          <div className="component">
            <Hero />
          </div>
          <div className="component">
            <ApaItuOMB />
          </div>
          <div className="component">
            <YouTube />
          </div>
          <div className="component">
            <Divisi />
          </div>
          <div className="component">
            <Ananta />
          </div>
          <div className="component">
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
