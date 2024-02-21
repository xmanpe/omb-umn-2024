import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.scss';

// Import icons
import Arrow from '../../images/Arrow/Arrow_Right_MD_purple.svg';
import HomeNotActive from '../../images/icons/Home.svg';
import HomeActive from '../../images/icons/Home_Active.svg';
import WawancaraNotActive from '../../images/icons/Calendar.svg'
import WawancaraActive from '../../images/icons/Calendar_Active.svg'
import KoorNotActive from '../../images/icons/Timeline.svg'
import KoorActive from '../../images/icons/Timeline_Active.svg'

const divisiName = [
    { name: 'BALWANA' },
    { name: 'SARKARA' },
    { name: 'LAVANYA' },
    { name: 'BIMASENA'},
    { name: 'CAKSANA' },
    { name: 'SAKHA' },
    { name: 'BASKARA' },
    { name: 'GAJENDRA' },
    { name: 'NAYANIKA' }
];

const BottomNav = () => {
    const location = useLocation();
    const [selectedDivisiName, setSelectedDivisiName] = useState('');
    const [activeTab, setActiveTab] = useState(null); // State to manage active tab
    const [showOptions, setShowOptions] = useState(false); // State to manage extended navbar for divisi names
    const [showKoorSubMenu, setShowKoorSubMenu] = useState(false); // State to manage extended navbar for koor submenu

    useEffect(() => {
        const selectedDivisi = localStorage.getItem('selectedDivisi');
        if (selectedDivisi) {
            const parsedDivisi = JSON.parse(selectedDivisi);
            setSelectedDivisiName(parsedDivisi.name);
        }
    }, []);

    const handleOptionClick = (divisi) => {
        localStorage.setItem('selectedDivisi', JSON.stringify(divisi));
        setSelectedDivisiName(divisi.name);
        window.location.href = '/jadwal-wawancara';
        toggleOptions(); // Close the extended navbar after clicking a divisi
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const toggleKoorSubMenu = () => {
        setShowKoorSubMenu(!showKoorSubMenu);
    };

    const handleTabClick = (tabPath) => (e) => {
        e.preventDefault(); // Prevent default behavior of anchor element
    
        // Check if the tabPath is for the Home page
        if (tabPath === "/") {
            window.location.href = "/";
        } else {
            // Rest of your code to handle other tab clicks
            if (tabPath === '/jadwal-wawancara') {
                toggleOptions(); // Toggle extended navbar for divisi names
                setShowKoorSubMenu(false); // Close extended navbar for koor submenu
            } else if (tabPath === '/koor') {
                toggleKoorSubMenu(); // Toggle extended navbar for koor submenu
                setShowOptions(false); // Close extended navbar for divisi names
            } 
            
            setActiveTab(tabPath); // Set active tab
        }
    };
    

    const tabs = [
        { path: '/', icon: HomeNotActive, activeIcon: HomeActive, text: 'Beranda' },
        { path: '/jadwal-wawancara', icon: WawancaraNotActive, activeIcon: WawancaraActive, text: `Jadwal Wawancara ${selectedDivisiName}` },
        { path: '/koor', icon: KoorNotActive, activeIcon: KoorActive, text: 'Timeline' },
    ];

    return (
        <div className='the-whole-navbar'>
            {showOptions && (
                <nav className='extended-navbar'>
                    <p className='title-nav'>Jadwal Wawancara</p>
                    {divisiName.map((divisi, index) => (
                        <div className='each-extended' key={index} onClick={() => handleOptionClick(divisi)}>
                            <p>Divisi {divisi.name}</p>
                            <img src={Arrow} alt="" />
                        </div>
                    ))}
                </nav>
            )}
            {showKoorSubMenu && (
                <nav className='extended-navbar'>
                    <p className='title-nav'>Linimasa OMB UMN 2024</p>
                    {/* Add your submenu options here */}
                </nav>
            )}
            <nav className="navigation-bar">
                {tabs.map((tab, index) => (
                    <div key={index} onClick={() => handleTabClick(tab.path)}>
                        <Link
                            className={`each-tab ${tab.path === location.pathname ? 'active' : ''}`}
                            to={tab.path}
                            onClick={handleTabClick(tab.path)}
                            style={{textDecoration: "none"}}
                        >
                            <img src={tab.path === location.pathname ? tab.activeIcon : tab.icon} alt={tab.text} />
                            {tab.path === location.pathname && <p>{tab.text}</p>}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default BottomNav;