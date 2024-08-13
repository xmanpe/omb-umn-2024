import React, { useState, useEffect } from 'react';
import HeroWawancara from "../components/hero-wawancara/HeroWawancara";
import PesertaWawancara from "../components/peserta-wawancara/PesertaWawancara";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";

const JadwalWawancara = () => {
    return (
        <>
            <HeroWawancara />
            <PesertaWawancara />
            <Footer />
        </>
    );
}
 
export default JadwalWawancara;