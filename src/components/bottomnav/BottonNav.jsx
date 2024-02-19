import { Link } from 'react-router-dom';
import './BottomNav.scss';

// import icons
import HomeNotActive from '../../images/Interface essential/Home.png';
import HomeActive from '../../images/Interface essential/Home2.png';

const BottomNav = () => {
  const tabs = [
    { path: '/', icon: HomeActive, text: 'Beranda' },
    { path: '/jadwal-wawancara', icon: HomeNotActive, text: 'Jadwal Wawancara' },
    // Add more tabs as needed
  ];

  return (
    <nav className="navigation-bar">
      {tabs.map((tab, index) => (
        <Link
          key={index}
          className={`each-tab ${tab.path === window.location.pathname ? 'active' : ''}`}
          to={tab.path}
        >
          <img src={tab.icon} alt={tab.text} />
          {/* Show text only for active tab */}
          {tab.path === window.location.pathname && <p>{tab.text}</p>}
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
