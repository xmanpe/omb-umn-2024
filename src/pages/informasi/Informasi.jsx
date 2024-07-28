import React from 'react';
// import components
import Header from '../../components/header/Header';
import Timeline from '../../components/timeline/Timeline';

// import pages
import Footer from '../../components/footer/Footer';

const InformasiOMB = () => {
    return (
        <>
            <Header 
                top="Informasi OMB"
                bottom={<>Yuk, simak Informasi OMB UMN 2024!</>}
            />  
              <Timeline />
              {/* <AtributPeserta /> */}
            <Footer />
        </>
    );
}
 
export default InformasiOMB;