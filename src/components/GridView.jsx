import { useEffect, useState } from 'react';
import '../styles/GridViewStyle.scss';

const GridView = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector('footer');

    const getFooterHeight = () => {
      return footer?.offsetHeight;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      const distanceFromBottom = documentHeight - (scrollY + windowHeight);

      const footerHeight = getFooterHeight();
      setIsVisible(distanceFromBottom > footerHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="grid-map-view-switcher"
      className={`switcher-container ${isVisible ? 'visible' : 'hidden'}`}
    >
      <div className="bg-blur" />
      <div className="switch-indicator" />

      <button className="switch-btn">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            d="M2 5.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C3.52 2 4.08 2 5.2 2h1.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C10 3.52 10 4.08 10 5.2v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C8.48 10 7.92 10 6.8 10H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C2 8.48 2 7.92 2 6.8V5.2zM14 5.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C15.52 2 16.08 2 17.2 2h1.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C22 3.52 22 4.08 22 5.2v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C20.48 10 19.92 10 18.8 10h-1.6c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C14 8.48 14 7.92 14 6.8V5.2zM2 17.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C3.52 14 4.08 14 5.2 14h1.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C10 15.52 10 16.08 10 17.2v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C8.48 22 7.92 22 6.8 22H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C2 20.48 2 19.92 2 18.8v-1.6zM14 17.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C15.52 14 16.08 14 17.2 14h1.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C22 15.52 22 16.08 22 17.2v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C20.48 22 19.92 22 18.8 22h-1.6c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C14 20.48 14 19.92 14 18.8v-1.6z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Show Grid
      </button>

      <button className="switch-btn">
        <svg className="icon" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 12c0 5.523-4.477 10-10 10M22 12c0-5.523-4.477-10-10-10M22 12c0-2.21-4.477-4-10-4S2 9.79 2 12M22 12c0 2.21-4.477 4-10 4S2 14.21 2 12M12 22C6.477 22 2 17.523 2 12M12 22c2.21 0 4-4.477 4-10S14.21 2 12 2M12 22c-2.21 0-4-4.477-4-10S9.79 2 12 2M2 12C2 6.477 6.477 2 12 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Show Map
      </button>
    </div>
  );
};

export default GridView;
