import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

import TahapanObject from '../../images/rembakaAnindita/Tahapan_Object.png'
import Wave1 from '../../images/waves/WaveWhite_1.svg'
import Wave2 from '../../images/waves/WaveWhite_2.svg'

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Unity error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong with the Unity content.</h1>;
    }

    return this.props.children;
  }
}

const Dinamika = () => {
  const { unityProvider, loadingProgression } = useUnityContext({
    loaderUrl: "../build/rembaka_anindita.loader.js",
    dataUrl: "../build/rembaka_anindita.data.unityweb",
    frameworkUrl: "../build/rembaka_anindita.framework.js.unityweb",
    codeUrl: "../build/rembaka_anindita.wasm.unityweb",
  });

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Add a small delay before initializing Unity
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className="dinamika">
      <img className='wave' src={Wave1} alt="Wave1" />
      <div className="konten">
        {screenSize.width > 1200 &&
         <img className='tahapan' src={TahapanObject} alt="TahapanObject" />
        }
        <div className="unity" style={{ width: 330, height: 450 }}>
          <p className="loading" style={{ display: (loadingProgression === 1)? 'none' : 'block' }}>Memuat... {Math.round(loadingProgression * 100)}%</p>
          {isLoaded && (
            <ErrorBoundary>
              <Unity unityProvider={unityProvider} style={{ width: 330, height: 450, margin: "auto 0" }}  />
            </ErrorBoundary>
          )}
        </div>
        {screenSize.width <= 1200 &&
         <img className='tahapan' src={TahapanObject} alt="TahapanObject" />
        }
        <div className="cara_bermain">
          <h1>Cara Berdinamika</h1>
          <ol>
            <li>Ketuk tombol "Mulai" untuk berdinamika.</li><br />
            <li>Agar mendapatkan poin, gabungkan objek yang serupa untuk menciptakan objek baru.</li><br />
            <li>Jawab pertanyaan yang muncul untuk menambah poin dalam berdinamika. Pertanyaan akan terlihat setiap menggabungkan objek baru <i>(TRUE or FALSE)</i>.</li><br />
            <li>Jawablah pertanyaan dengan tepat! Karena jawaban yang benar akan mendapatkan 30 poin tambahan.</li><br />
            <li>Susun strategi untuk menciptakan Lotus Biru tanpa melampaui garis pembatas yang ada.</li><br />
          </ol>
        </div>
      </div>
      <img className='wave' src={Wave2} alt="Wave2" />
    </div>
  );
}

export default Dinamika;