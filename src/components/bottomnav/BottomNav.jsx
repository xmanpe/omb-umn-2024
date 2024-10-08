import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.scss';

// Import icons
import Arrow from '../../images/Arrow/Arrow_Right_MD_purple.svg';
import StopSign from '../../images/icons/Stop_Sign.svg';
import HomeNotActive from '../../images/icons/Home.svg';
import HomeActive from '../../images/icons/Home_Active.svg';
import TentangNotActive from '../../images/icons/Tentang.svg';
import TentangActive from '../../images/icons/Tentang_Active.svg';
import PelaksanaanNotActive from '../../images/icons/Pelaksanaan.svg';
import PelaksanaanActive from '../../images/icons/Pelaksanaan_Active.svg';
import FaqNotActive from '../../images/icons/Faq.svg';
import FaqActive from '../../images/icons/Faq_Active.svg';
import MenuNotActive from '../../images/icons/Menu.svg';
import MenuActive from '../../images/icons/Menu_Active.svg';
import MobilitasNotActive from '../../images/icons/Mobilitas.svg';
import MobilitasActive from '../../images/icons/Mobilitas_Active.svg';
import AtributNotActive from '../../images/icons/Atribut.svg';
import AtributActive from '../../images/icons/Atribut_Active.svg';
import MarsNotActive from '../../images/icons/Mars.svg';
import MarsActive from '../../images/icons/Mars_Active.svg';
import TimelineNotActive from '../../images/icons/Timeline.svg';
import TimelineActive from '../../images/icons/Timeline_Active.svg';
import DivisiNotActive from '../../images/icons/Divisi.svg';
import DivisiActive from '../../images/icons/Divisi_Active.svg';
import DinamikaNotActive from '../../images/icons/Dinamika.svg';
import DinamikaActive from '../../images/icons/Dinamika_Active.svg';
import BingkaiNotActive from '../../images/icons/Bingkai.svg';
import BingkaiActive from '../../images/icons/Bingkai_Active.svg';
import PenugasanNotActive from '../../images/icons/Penugasan.svg';
import PenugasanActive from '../../images/icons/Penugasan_Active.svg';

const tabsConfig = [
    { path: '/', icon: HomeNotActive, activeIcon: HomeActive, text: 'Beranda' },
    { path: '/tentang-omb', icon: TentangNotActive, activeIcon: TentangActive, text: 'Tentang OMB UMN 2024', },
    { path: '/faq', icon: FaqNotActive, activeIcon: FaqActive, text: 'FAQ' },
    { 
        icon: MenuNotActive, 
        activeIcon: MenuActive, 
        text: 'Informasi OMB UMN 2024',
        subMenu: [
            { path: '/aksi-sosial', text: 'Aksi Sosial', icon: PenugasanNotActive },
            { path: '/atribut-peserta', text: 'Atribut Peserta', icon: AtributNotActive },
            { path: '/bingkai-resmi', text: 'Bingkai Resmi', icon: BingkaiNotActive },
            { path: '/divisi', text: 'Divisi', icon: DivisiNotActive },
            { path: '/linimasa', text: 'Linimasa', icon: TimelineNotActive },
            { path: '/mars', text: 'Mars', icon: MarsNotActive },
            { path: '/mobilitas-peserta', text: 'Mobilitas Peserta', icon: MobilitasNotActive },
            { path: '/pelaksanaan', text: 'Pelaksanaan', icon: PelaksanaanNotActive },
            { path: '/rembaka-anindita', text: 'Rembaka Anindita', icon: DinamikaNotActive },
        ]
    },
];

const BottomNav = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState({ path: location.pathname, text: '' });
    const [subMenu, setSubMenu] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const currentPath = location.pathname;
        let activeTabConfig = tabsConfig.find(tab => tab.path === currentPath);
        
        if (!activeTabConfig) {
            for (const tab of tabsConfig) {
                if (tab.subMenu) {
                    const subItem = tab.subMenu.find(sub => sub.path === currentPath);
                    if (subItem) {
                        activeTabConfig = subItem;
                        break;
                    }
                }
            }
        }

        setActiveTab({ 
            path: currentPath, 
            text: activeTabConfig ? activeTabConfig.text : ''
        });

        setSubMenu(null);
    }, [location.pathname]);

    const handleTabClick = (tab) => (e) => {
        e.preventDefault();
        if (location.pathname === '/rembaka-anindita' && tab.path && tab.path !== '/rembaka-anindita') {
            window.location.href = tab.path;
        } else if (tab.subMenu) {
            if (subMenu === tab.text) {
                setIsClosing(true);
                setTimeout(() => {
                    setSubMenu(null);
                    setIsClosing(false);
                }, 500);
            } else {
                setSubMenu(tab.text);
            }
        } else if (tab.path) {
            setActiveTab({ path: tab.path, text: tab.text });
            window.location.href = tab.path;
            if (subMenu) {
                setIsClosing(true);
                setTimeout(() => {
                    setSubMenu(null);
                    setIsClosing(false);
                }, 500);
            }
        }
    };

    const handleSubMenuClick = (item) => {
        setActiveTab({ path: item.path, text: item.text });
        setIsClosing(true);
        setTimeout(() => {
            window.location.href = item.path;
            setSubMenu(null);
            setIsClosing(false);
        }, 500);
    };

    const anantaButton = () => {
        window.location.href = 'https://documntation.umn.ac.id';
    };

    const getActiveTabInfo = (path) => {
        const mainTab = tabsConfig.find(tab => tab.path === path);
        if (mainTab) return mainTab;

        for (const tab of tabsConfig) {
            if (tab.subMenu) {
                const subItem = tab.subMenu.find(sub => sub.path === path);
                if (subItem) return { ...subItem, icon: tab.icon, activeIcon: tab.activeIcon };
            }
        }
        return null;
    };

    const activeTabInfo = getActiveTabInfo(activeTab.path);

    return (
        <div className='the-whole-navbar'>
            {(subMenu || isClosing) && (
                <nav className={`extended-navbar ${isClosing ? 'fadeOutFromTop' : ''}`}>
                    {tabsConfig.find(tab => tab.text === subMenu).subMenu.map((item, index) => (
                        <div 
                            className={`each-extended ${item.path === activeTab.path ? 'active' : ''}`} 
                            key={index} 
                            onClick={() => handleSubMenuClick(item)}
                        >
                            <p>{item.text}</p>
                            <img src={item.icon} alt={item.text} />
                        </div>
                    ))}
                </nav>
            )}
            <nav className="navigation-bar">
                {tabsConfig.map((tab, index) => (
                    <div key={index} onClick={handleTabClick(tab)}>
                        <Link
                            className={`each-tab ${tab.path === activeTab.path || (tab.subMenu && tab.subMenu.some(sub => sub.path === activeTab.path)) ? 'active' : ''}`}
                            to={tab.path || '#'}
                            onClick={(e) => {
                                e.preventDefault();
                                handleTabClick(tab)(e);
                            }}
                            style={{ textDecoration: "none" }}
                        >
                            <img src={activeTabInfo && (tab.path === activeTab.path || (tab.subMenu && tab.subMenu.some(sub => sub.path === activeTab.path))) ? activeTabInfo.activeIcon : tab.icon} alt={tab.text} />
                            {(tab.path === activeTab.path || (tab.subMenu && tab.subMenu.some(sub => sub.path === activeTab.path))) && <p>{activeTab.text}</p>}
                            <div className='tooltip'>{tab.text}</div>
                        </Link>
                    </div>
                ))}
                <div className='the-border'>
                    <div className='ananta-button' onClick={anantaButton}>
                        <p>Ananta</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default BottomNav;