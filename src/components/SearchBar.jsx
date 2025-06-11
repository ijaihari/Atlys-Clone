import '../styles/SearchBarStyle.scss';
import { LuSearch } from "react-icons/lu";
import { useState, useEffect } from 'react';
import DropMenu from './DropMenu';

function SearchBar() {
    const [placeholder, setPlaceholder] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const updatePlaceholder = () => {
        if (window.innerWidth >= 768) {
            setPlaceholder('Search for a destination...');
        } else {
            setPlaceholder('Enter destination');
        }
    };

    useEffect(() => {

        updatePlaceholder();

        window.addEventListener('resize', updatePlaceholder);
        return () => {
            window.removeEventListener('resize', updatePlaceholder);
        };
    }, []);


    return (
        <div className="search-container">
            <div className="search-inner">
                <form className="relative">
                    <span className="search-icon">
                        <LuSearch />
                    </span>
                    <input
                        onFocus={() => setIsVisible(true)}
                        onBlur={() => setIsVisible(false)}
                        className="search-input"
                        type="text"
                        placeholder={placeholder}
                        aria-label="Destination Search"
                    />
                </form>
                {
                    isVisible && <DropMenu />
                }
            </div>
        </div>
    );
}

export default SearchBar;
