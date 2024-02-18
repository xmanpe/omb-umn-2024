import React, { useState, useEffect } from 'react';
import './PesertaWawancara.scss';
import scheduleData from './scheduleData';
import MagnifyGlasses from '../../images/Interface/Search_Magnifying_Glass.png'

const PesertaWawancara = () => {
    const selectedDivisi = JSON.parse(localStorage.getItem('selectedDivisi'));
    const divisionName = selectedDivisi?.name || "Error";

    const divisionSchedule = scheduleData[divisionName] || [];
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSchedule = divisionSchedule.map(schedule => ({
        ...schedule,
        participants: schedule.participants.filter(participant =>
            participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            participant.nim.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(schedule => schedule.participants.length > 0);

    return (
        <section className="peserta-wawancara_section">
            <div className="note-search">
                <div className="search_wrapper">
                    <input
                        type="text"
                        placeholder="Klik untuk mencari nama atau NIM..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            {filteredSchedule.map((schedule, index) => (
                <div className='peserta-wawancara_content' key={index}>
                    <div className='top_thing'>
                        <p>{schedule.room}</p>
                        <h1>{schedule.date}</h1>
                    </div>
                    <div className='peserta_wrapper'>
                        {schedule.participants.map((participant, idx) => (
                            <div className='each_peserta' key={idx}>
                                <p className='name'>{participant.name}</p>
                                <p className='time-nim'>{participant.nim}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default PesertaWawancara;
