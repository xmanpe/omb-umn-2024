// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './BottomNav.scss';

// // import icons
// import Arrow from '../../images/Arrow/Arrow_Right_MD_purple.svg'
// import HomeNotActive from '../../images/Interface essential/Home.svg';
// import HomeActive from '../../images/Interface essential/Home2.svg';
// import WawancaraNotActive from '../../images/Layout/grid-2.svg';
// import WawancaraActive from '../../images/Layout/grid-2white.svg';

// const BottomNav = () => {
//   const tabs = [
//     { path: '/', icon: HomeNotActive, activeIcon: HomeActive, text: 'Beranda' },
//     { path: '/jadwal-wawancara', icon: WawancaraNotActive, activeIcon: WawancaraActive, text: 'Jadwal Wawancara' },
//   ];

//   const location = useLocation()
//   const [showOptions, setShowOptions] = useState(false)

//   const toggleOptions = () => {
//     setShowOptions(!showOptions)
//   };

//   return (
//     <div className='the-whole-navbar'>
//         <nav className='extended-navbar'>
//             <div className='each-extended'>
//                 <p>Option 1</p>
//                 <img src={Arrow} alt="" />
//             </div>
//             <div className='each-extended'>
//                 <p>Option 2</p>
//                 <img src={Arrow} alt="" />
//             </div>
//         </nav>
//         <nav className="navigation-bar">
//         {tabs.map((tab, index) => (
//             <Link
//             key={index}
//             className={`each-tab ${tab.path === location.pathname ? 'active' : ''}`}
//             to={tab.path}
//             >
//                 <img src={tab.path === location.pathname ? tab.activeIcon : tab.icon} alt={tab.text} />
//                 {tab.path === location.pathname && <p>{tab.text}</p>}
//             </Link>
//         ))}
//         </nav>
//     </div>
//   );
// };

// export default BottomNav;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.scss';

// import icons
import Arrow from '../../images/Arrow/Arrow_Right_MD_purple.svg'
import HomeNotActive from '../../images/Interface essential/Home.svg';
import HomeActive from '../../images/Interface essential/Home2.svg';
import WawancaraNotActive from '../../images/Layout/grid-2.svg';
import WawancaraActive from '../../images/Layout/grid-2white.svg';
import KoorNotActive from '../../images/Interface essential/Clock.svg'
import KoorActive from '../../images/Interface essential/Clock_white.svg'

const BottomNav = () => {
  const tabs = [
    { path: '/', icon: HomeNotActive, activeIcon: HomeActive, text: 'Beranda' },
    { path: '/jadwal-wawancara', icon: WawancaraNotActive, activeIcon: WawancaraActive, text: 'Jadwal Wawancara' },
    { path: '/koor', icon: KoorNotActive, activeIcon: KoorActive, text: 'Timeline' },
  ];

  const location = useLocation();
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
        setShowOptions(!showOptions);
  };

  const handleOptionClick = () => {
    // Handle navigation for each extended option here
    // Example: history.push('/your-route');
  };

  const handleTabClick = (tabPath) => (e) => {
    if (tabPath === '/jadwal-wawancara') {
      e.preventDefault(); // Prevent default navigation behavior
      toggleOptions();
    }
  };

  return (
    <div className='the-whole-navbar'>
      {showOptions && (
        <nav className='extended-navbar'>
            <p className='title-nav'>Jadwal Wawancara</p>
            <div className='each-extended' onClick={handleOptionClick}>
                <p>Divisi 1</p>
                <img src={Arrow} alt="" />
            </div>
            <div className='each-extended' onClick={handleOptionClick}>
                <p>Divisi 2</p>
                <img src={Arrow} alt="" />
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
