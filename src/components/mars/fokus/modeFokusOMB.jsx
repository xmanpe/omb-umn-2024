import React, { useState, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './modeFokus.scss'

// import audio
import AudioOMB from '../../../audio/MarsOMB.mp3';

const lyrics = [
    { time: 1, text: 'Kamilah anak bangsa', translation: 'We are the children of the nation' },
    { time: 5, text: 'Prestasi nusantara', translation: 'Archipelago Achievement' },
    { time: 9, text: 'Merangkai makna bersumpah setia sebagai manusia', translation: 'Arranging the meaning of swearing allegiance as a human being' },
    { time: 18, text: 'Menjunjung tinggi ilmu sikap dan perilaku', translation: 'Upholding knowledge, attitude, and behavior' },
    { time: 26.5, text: 'Bersatu dalam semangat baru', translation: 'United in a new spirit' },
    { time: 30.5, text: 'Sampai di akhir', translation: 'Until the end' },
    { time: 32.5, text: 'Sampai di akhir', translation: 'Until the end' },
    { time: 35, text: 'Sampai di akhir waktu', translation: 'Until the end of time' }
];

const ModeFokusOMB = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handleListen = (time) => {
        setCurrentTime(time);

        const index = lyrics.findIndex((line, i) => {
            const nextLine = lyrics[i + 1];
            return time >= line.time && (!nextLine || time < nextLine.time);
        });

        if (index !== -1) {
            setActiveIndex(index);
        }
    };

    return (
        <div className="mode-fokus">
            {/* <h1 className='focus-title'>OMB</h1> */}
            <div className="audio">
                <ReactAudioPlayer
                    ref={audioRef}
                    src={AudioOMB}
                    controls
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onListen={(time) => handleListen(time)}
                    listenInterval={100}
                />
            </div>
            <div className='the-lyrics'>
                    <p>(Dinyanyikan 1x dengan berdiri tegap, bertepuk tangan dengan tempo ¾)</p>
                {lyrics.map((line, index) => (
                    <p
                        key={index}
                        className={`each-line ${isPlaying && index === activeIndex ? 'active' : ''}`}
                    >
                        {line.text} <br />
                        <i className={`each-line ${isPlaying && index === activeIndex ? 'active' : ''}`}>{line.translation}</i>
                    </p>
                ))}
            </div>
        </div>
    );
}

export default ModeFokusOMB;
