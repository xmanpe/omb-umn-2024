import { useEffect } from 'react';

const useSingleColumnTimeline = () => {
  useEffect(() => {
    const handleResize = () => {
      const timelineElement = document.querySelector('.vertical-timeline');
      if (timelineElement) {
        if (window.innerWidth <= 1440) {
          timelineElement.classList.remove('vertical-timeline--two-columns');
        } else {
          timelineElement.classList.add('vertical-timeline--two-columns');
        }
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
};

export default useSingleColumnTimeline;
