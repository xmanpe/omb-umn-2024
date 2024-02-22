import React, { useState, useEffect } from 'react';
import HeroWawancara from "../components/hero-wawancara/HeroWawancara";
import PesertaWawancara from "../components/peserta-wawancara/PesertaWawancara";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";

const JadwalWawancara = () => {
    const [loading, setLoading] = useState(true);

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
    
        // Check if all components are loaded when window loads
        window.onload = () => {
            if (checkAllComponentsLoaded()) {
            setLoading(false);
            }
        };
    
        // Cleanup function
        return () => {
            window.onload = null; // Remove event listener on component unmount
        };
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className='component'>
                        <HeroWawancara />
                    </div>
                    <div className='component'>
                        <PesertaWawancara />
                    </div>
                    <div className='component'>
                        <Footer />
                    </div>
                </>
            )}
        </>
    );
}
 
export default JadwalWawancara;