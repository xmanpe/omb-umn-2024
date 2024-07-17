import React, { useState, useEffect, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './mars.scss';

// Import images here
import Wave3 from '../../images/waves/Wave One 3.png';
import Superputihkiri from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih-kiri.svg';
import Superputihkanan from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih-kanan.svg';
import SupergrafisKembang from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih - kembang.svg';
import SupergrafisKunang from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih - kunang.svg';
import SupergrafisLebah from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih - lebah.svg';
import SupergrafisTangkai from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih - 2 tangkai.svg';

// Import audio here
import AudioOMB from '../../audio/MarsOMB.mp3';
import AudioUMN from '../../audio/MarsUMN.mp3';

function Mars() {
  const [currentLyric, setCurrentLyric] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [lastPauseTime, setLastPauseTime] = useState(0);
  const [lastLyricIndex, setLastLyricIndex] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false); // State to track if seeking is in progress

  // Lyrics for MARS OMB
  const lyricsOMB = [
    "Kamilah anak bangsa",
    "Prestasi nusantara",
    "Merangkai makna bersumpah setia sebagai manusia",
    "Menjunjung tinggi ilmu sikap dan perilaku",
    "Bersatu dalam semangat baru",
    "Sampai di akhir",
    "Sampai di akhir",
    "Sampai di akhir waktu"
  ];

  // Timestamps for MARS OMB (in milliseconds)
  const timeStampsOMB = [0, 5000, 9500, 18000, 26000, 30500, 33000, 34500, 42000];

  // Define syncLyrics function
  const syncLyrics = () => {
    const audioElement = audioRef.current.audioEl.current;
    // Check if the audio is playing and within valid lyric range
    if (isPlaying && audioElement.currentTime * 1000 < timeStampsOMB[lyricsOMB.length - 1]) {
      for (let i = lyricsOMB.length - 1; i >= 0; i--) {
        if (audioElement.currentTime * 1000 >= timeStampsOMB[i]) {
          setCurrentLyric(i);
          break;
        }
      }
    }
  };

  useEffect(() => {
    let interval;
    const audioElement = audioRef.current.audioEl.current;

    const updateCurrentTime = () => {
      if (!isSeeking) {
        setAudioCurrentTime(audioElement.currentTime * 1000); // Convert to milliseconds
        syncLyrics();
      }
    };

    if (audioElement) {
      audioElement.addEventListener('timeupdate', updateCurrentTime);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('timeupdate', updateCurrentTime);
      }
    };
  }, [isPlaying, isSeeking]);

  const handlePlay = () => {
    const audioElement = audioRef.current.audioEl.current;

    if (audioElement) {
      if (lastPauseTime > 0) {
        audioElement.currentTime = lastPauseTime / 1000; // Convert back to seconds
        setCurrentLyric(lastLyricIndex);
      }
      audioElement.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    const audioElement = audioRef.current.audioEl.current;

    if (audioElement) {
      audioElement.pause();
      setIsPlaying(false);
      setLastPauseTime(audioCurrentTime);
      setLastLyricIndex(currentLyric);
    }
  };

  const handleSeeked = () => {
    const audioElement = audioRef.current.audioEl.current;

    if (audioElement) {
      setIsSeeking(false); // Mark seeking as finished
      // Update current time based on audio element's currentTime
      setAudioCurrentTime(audioElement.currentTime * 1000);
      // Sync lyrics to the correct position after seek
      syncLyrics();
    }
  };

  const handleSeeking = () => {
    setIsSeeking(true); // Mark seeking in progress
  };

  return (
    <div className="mars-container">
      {/* Images */}
      <img src={SupergrafisKembang} alt="" className='supergrafis-kembang' />
      <img src={SupergrafisKunang} alt="" className='supergrafis-kunang' />
      <img src={SupergrafisLebah} alt="" className='supergrafis-lebah' />
      <img src={SupergrafisTangkai} alt="" className='supergrafis-tangkai' />
      <img src={Superputihkanan} alt="" className='supergrafis-air-kanan' />
      <img src={Superputihkiri} alt="" className='supergrafis-air-kiri' />

      {/* Waves */}
      <div className="wave-container">
        <img src={Wave3} alt="Wave one 3" className='wave-one-3' />
      </div>

      {/* Title */}
      <div className="mars-title">
        <img src={Superputihkiri} alt="" className='supergrafis-mars' />
        <h1>MARS</h1>
        <img src={Superputihkanan} alt="" className='supergrafis-mars' />
      </div>

      {/* Content */}
      <div className="mars-content">
        {/* MARS OMB Section */}
        <div className="mars-omb">
          <div className="mars-omb-title">
            <h2>MARS OMB</h2>
          </div>
          <div className="mars-omb-content">
            {lyricsOMB.map((line, index) => (
              <p key={index} className={currentLyric === index ? 'active' : ''}>
                {line}
              </p>
            ))}
            <p>
              <b>(Dinyanyikan 1x dengan berdiri tegap, bertepuk tangan dengan tempo ¾)</b>
            </p>
          </div>
          <div className="mars-omb-audio">
            <ReactAudioPlayer
              ref={audioRef}
              src={AudioOMB}
              controls
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={() => setIsPlaying(false)}
              onSeeked={handleSeeked} // Handle seeked event
              onSeeking={handleSeeking} // Handle seeking event
            />
          </div>
        </div>

        {/* MARS UMN Section */}
        <div className="mars-umn">
          <div className="mars-umn-title">
            <h2>MARS UMN</h2>
          </div>
          <div className="mars-umn-content">
            <p>
              Universitas Multimedia Nusantara<br />
              Majukan ilmu dan teknologi bagi nusa bangsa<br />
              Universitas Multimedia Nusantara<br />
              Ciptakan profesional muda dan wirausaha<br />
              Baktikan karyaku kepada bangsaku melalui tridharma<br />
              Merintis langkahku menuju suksesku melalui almamaterku<br />
              Universitas Multimedia Nusantara<br />
              Demi kejayaan bangsa Indonesia<br />
              <br />
              <b>(Dinyanyikan 2x dengan posisi berdiri tegap dan tangan kanan
                diletakkan di dada sebelah kiri dengan telapak tangan dikepal)</b>
            </p>
          </div>
          <div className="mars-umn-audio">
            <ReactAudioPlayer
              src={AudioUMN}
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mars;
