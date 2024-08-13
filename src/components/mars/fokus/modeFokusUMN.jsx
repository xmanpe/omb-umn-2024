import React, { useState, useRef, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './modeFokus.scss';

// import audio
import AudioUMN from '../../../audio/MarsUMN.mp3';

const lyrics = [
    { time: 9, text: 'Universitas Multimedia Nusantara', translation: 'Multimedia Nusantara University' },
    { time: 17, text: 'Majukan ilmu dan teknologi bagi nusa bangsa', translation: 'Advancing science and technology for the nation' },
    { time: 25, text: 'Universitas Multimedia Nusantara', translation: 'Multimedia Nusantara University' },
    { time: 33, text: 'Ciptakan profesional muda dan wirausaha', translation: 'Creating young professionals and entrepreneurs' },
    { time: 41, text: 'Baktikan karyaku kepada bangsaku melalui tridharma', translation: 'Dedicating my work to my nation through tridharma' },
    { time: 49, text: 'Merintis langkahku menuju suksesku melalui almamaterku', translation: 'Pioneering my steps towards my success through my alma mater' },
    { time: 58, text: 'Universitas Multimedia Nusantara', translation: 'Multimedia Nusantara University' },
    { time: 65, text: 'Demi kejayaaan bangsa Indonesia', translation: 'For the glory of the Indonesian nation' }
];

const ModeFokusUMN = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handleListen = (time) => {
        setCurrentTime(time);

        const loopedTime = time % 72;

        const index = lyrics.findIndex((line, i) => {
            const nextLine = lyrics[i + 1];
            return loopedTime >= line.time && (!nextLine || loopedTime < nextLine.time);
        });

        if (index !== -1) {
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const audioElement = audioRef.current?.audioEl.current;
        if (audioElement) {
            const handleTimeUpdate = () => handleListen(audioElement.currentTime);
            audioElement.addEventListener('timeupdate', handleTimeUpdate);
            return () => {
                audioElement.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, []);

    return (
        <div className="mode-fokus">
            <div className="audio">
                <ReactAudioPlayer
                    ref={audioRef}
                    src={AudioUMN}
                    controls
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                />
            </div>
            <div className='the-lyrics'>
                <p>(Dinyanyikan 2x dengan posisi berdiri tegap dan tangan kanan diletakkan di dada sebelah kiri dengan telapak tangan dikepal)</p>
                {lyrics.map((line, index) => (
                    <p
                        key={index}
                        className={`each-line ${isPlaying && index === activeIndex ? 'active' : ''}`}
                    >
                        {line.text} <br />
                        <i className={`each-line ${isPlaying && index === activeIndex ? 'active' : ''}`}>{line.translation}</i>
                    </p>
                ))}
                <p>(Diulang dari awal)</p>
            </div>
        </div>
    );
}

export default ModeFokusUMN;
