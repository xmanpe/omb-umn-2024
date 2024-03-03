import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.scss';

// Import icons
import Arrow from '../../images/Arrow/Arrow_Right_MD_purple.svg';
import StopSign  from '../../images/icons/Stop_Sign.svg';
import HomeNotActive from '../../images/icons/Home.svg';
import HomeActive from '../../images/icons/Home_Active.svg';
import WawancaraNotActive from '../../images/icons/Calendar.svg'
import WawancaraActive from '../../images/icons/Calendar_Active.svg'
import KoorNotActive from '../../images/icons/Timeline.svg'
import KoorActive from '../../images/icons/Timeline_Active.svg'
import TentangNotActive from '../../images/icons/Tentang.svg'
import TentangActive from '../../images/icons/Tentang_Active.svg'
import InformasiNotActive from '../../images/icons/Informasi.svg'
import InformasiActive from '../../images/icons/Informasi_Active.svg'
import FaqNotActive from '../../images/icons/Faq.svg'
import FaqActive from '../../images/icons/Faq_Active.svg'
import BingkaiNotActive from '../../images/icons/Bingkai.svg'
import BingkaiActive from '../../images/icons/Bingkai_Active.svg'

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

    const [showOptions, setShowOptions] = useState(false);
    const [showKoorSubMenu, setShowKoorSubMenu] = useState(false);
    const [showTentangSubMenu, setShowTentangSubMenu] = useState(false);
    const [showInformasiSubMenu, setShowInformasiSubMenu] = useState(false);

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
        window.location.href = '/hasil-seleksi';
        toggleOptions(); // Close the extended navbar after clicking a divisi
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const toggleTentangSubMenu = () => {
        setShowTentangSubMenu(!showTentangSubMenu);
    }

    // const toggleKoorSubMenu = () => {
    //     setShowKoorSubMenu(!showKoorSubMenu);
    // };

    const handleTabClick = (tabPath) => (e) => {
        e.preventDefault(); // Prevent default behavior of anchor element
    
        // Check if the tabPath is for the Home page
        if (tabPath === "/") {
            window.location.href = "/";
        } else {
            if (tabPath === '/hasil-seleksi') {
                toggleOptions(); // Toggle extended navbar for divisi names
                // setShowKoorSubMenu(false); // Close extended navbar for koor submenu
            } 
            // else if (tabPath === '/koor') {
            //     toggleKoorSubMenu(); 
            //     setShowOptions(false);
            // }
            else if (tabPath === '/tentang') {
                toggleTentangSubMenu();
                setShowOptions(false);
            }

            
            setActiveTab(tabPath); // Set active tab
        }
    };

    const tabs = [
        { path: '/', icon: HomeNotActive, activeIcon: HomeActive, text: 'Beranda' },
        { path: '/hasil-seleksi', icon: WawancaraNotActive, activeIcon: WawancaraActive, text: `Hasil Seleksi ${selectedDivisiName}` },
        { path: '/tentang', icon: TentangNotActive, activeIcon: TentangActive, text: 'Tentang' },
        // { path: '/informasi', icon: InformasiNotActive, activeIcon: InformasiActive, text: 'Informasi' },
        // { path: '/faq', icon: FaqNotActive, activeIcon: FaqActive, text: 'FAQ' },
        // { path: '/bingkai', icon: BingkaiNotActive, activeIcon: BingkaiActive, text: 'Bingkai' },
        // { path: '/koor', icon: KoorNotActive, activeIcon: KoorActive, text: 'Linimasa' },
    ];

    return (
        <div className='the-whole-navbar'>
            {showOptions && (
                <nav className='extended-navbar'>
                    <p className='title-nav'>Hasil Seleksi</p>
                    {divisiName.map((divisi, index) => (
                        <div className='each-extended' key={index} onClick={() => handleOptionClick(divisi)}>
                            <p>Divisi {divisi.name}</p>
                            <img src={Arrow} alt="" />
                        </div>
                    ))}
                </nav>
            )}
            {showTentangSubMenu && (
                <nav className='extended-navbar'>
                    <p className='title-nav'>Tentang</p>
                    <div className='each-extended'>
                        <p>Mengenal OMB UMN 2024</p>
                        <img src={StopSign} alt="" />
                    </div>
                    <div className='each-extended'>
                        <p>Pelaksanaan</p>
                        <img src={StopSign} alt="" />
                    </div>
                    <div className='each-extended'>
                        <p>Divisi</p>
                        <img src={StopSign} alt="" />
                    </div>
                    <div className='each-extended'>
                        <p>Mars</p>
                        <img src={StopSign} alt="" />
                    </div>
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