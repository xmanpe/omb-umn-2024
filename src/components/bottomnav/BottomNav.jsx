import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
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

const tabsConfig = [
    { path: '/', icon: HomeNotActive, activeIcon: HomeActive, text: 'Beranda' },
    { path: '/faq', icon: FaqNotActive, activeIcon: FaqActive, text: 'FAQ' },
    { 
        path: '/whatever', 
        icon: MenuNotActive, 
        activeIcon: MenuActive, 
        text: 'Informasi OMB UMN 2024',
        subMenu: [
            { path: '/atribut-peserta', text: 'Atribut Peserta', icon: AtributNotActive },
            { path: '/linimasa', text: 'Linimasa', icon: TimelineNotActive },
            { path: '/mars', text: 'Mars', icon: MarsNotActive },
            { path: '/mobilitas-peserta', text: 'Mobilitas Peserta', icon: MobilitasNotActive },
            { path: '/pelaksanaan', text: 'Pelaksanaan', icon: PelaksanaanNotActive },
            { path: '/tentang-omb', text: 'Tentang OMB UMN 2024', icon: TentangNotActive },
        ]
    },
];

const BottomNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState({ path: location.pathname, text: '' });
    const [subMenu, setSubMenu] = useState(null);

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
        if (tab.subMenu) {
            setSubMenu(subMenu === tab.path ? null : tab.path);
        } else {
            setActiveTab({ path: tab.path, text: tab.text });
            navigate(tab.path);
            setSubMenu(null);
        }
    };

    const handleSubMenuClick = (item) => {
        setActiveTab({ path: item.path, text: item.text });
        navigate(item.path);
        setSubMenu(null);
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
            {subMenu && (
                <nav className='extended-navbar'>
                    {tabsConfig.find(tab => tab.path === subMenu).subMenu.map((item, index) => (
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
                            to={tab.path}
                            onClick={(e) => {
                                if (tab.subMenu) {
                                    e.preventDefault();
                                    handleTabClick(tab)(e);
                                }
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