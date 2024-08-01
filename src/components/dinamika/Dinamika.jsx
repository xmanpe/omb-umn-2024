import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

import TahapanObject from '../../images/rembakaAnindita/Tahapan_Object.png'
import X from '../../images/Menu/Close_MD.svg'

import './Dinamika.scss';

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

const Dinamika = ({ onClose }) => {
  
  const handleClose = () => {
    window.location.href = '/rembaka-anindita';
  };

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

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className="overlay">
    <div className="modal">
        <div className='close_button'>
            <img src={X} alt="Close button" onClick={handleClose} />
        </div>
        <div className='dinamika_section'>
          <div className="unity">
            <p className="loading" style={{ display: (loadingProgression === 1)? 'none' : 'block' }}>Memuat... {Math.round(loadingProgression * 100)}%</p>
            {isLoaded && (
              <ErrorBoundary>
                <Unity className="unity-game" unityProvider={unityProvider}  />
              </ErrorBoundary>
            )}
            <p className="axel">Dibuat oleh NAYANIKA - Axel Ferdinand</p>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Dinamika;