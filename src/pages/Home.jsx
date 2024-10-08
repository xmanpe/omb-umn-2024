import React, { useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import SmallModal from "../components/small modal/SmallModal";
import ApaItuOMB from "../components/apa itu omb/ApaItuOMB";
import YouTube from "../components/youtube/YouTube";
import Ananta from "../components/ananta/Ananta";
import SwaraBestari from "../components/swara-bestari/SwaraBestari";
import Footer from "../components/footer/Footer";
import InfoPWRevisi from "../components/informasi-penting-wajib/InfoPWRevisi";
import SIO from "../components/sio/SIO";

const Home = () => {
  const [showExperience, setShowExperience] = useState(false);

  useEffect(() => {
    localStorage.setItem("scrollPosition", window.pageYOffset);

    const scrollPosition = localStorage.getItem("scrollPosition");

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
    }

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowExperience(screenWidth >= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showExperience && <SmallModal />}
      {/* {showExperience && <Experience />} */}
      <Hero />
      <ApaItuOMB />
      <YouTube />
      <SwaraBestari />
      {/* <SIO /> */}
      <InfoPWRevisi />
      <Footer />
    </>
  );
};

export default Home;
