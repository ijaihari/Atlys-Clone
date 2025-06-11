import '../styles/DropMenuStyle.scss';

const destinations = [
    {
        name: 'United Arab Emirates',
        time: '1 day',
        link: '//visa/dubai-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/AE',
    },
    {
        name: 'Egypt',
        time: '4 days',
        link: '//visa/egypt-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/EG',
    },
    {
        name: 'Singapore',
        time: '16 days',
        link: '//visa/singapore-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/SG',
    },
    {
        name: 'Japan',
        time: '21 days',
        link: '//visa/japan-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/JP',
    },
    {
        name: 'Türkiye',
        time: '3 hours',
        link: '//visa/turkey-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/TR',
    },
    {
        name: 'Malaysia',
        time: '28 minutes',
        link: '//visa/malaysia-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/MY',
    },
    {
        name: 'Vietnam',
        time: '6 days',
        link: '//visa/vietnam-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/VN',
    },
    {
        name: 'Oman',
        time: '2 days',
        link: '//visa/oman-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/OM',
    },
    {
        name: 'Thailand',
        time: '3 hours',
        link: '//visa/thailand-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/TH',
    },
    {
        name: 'Sri Lanka',
        time: '56 minutes',
        link: '//visa/sri-lanka-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/LK',
    },
    {
        name: 'Georgia',
        time: '11 days',
        link: '//visa/georgia-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/GE',
    },
    {
        name: 'United States',
        time: '46 days',
        link: '//visa/usa-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/US',
        note: 'appointment ',
    },
    {
        name: 'United Kingdom',
        time: '34 days',
        link: '//visa/uk-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/GB',
    },
    {
        name: 'Canada',
        time: '90 days',
        link: '//visa/canada-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/CA',
    },
    {
        name: 'France',
        time: '25 days',
        link: '//visa/france-visa',
        img: 'https://media.atlys.com/image/upload/f_auto,w_200/country_thumbnails/FR',
    },
];

const DropMenu = () => {
    return (
        <div className="destination-popup">
            <div className="destination-container">
                <div className="destination-scroll">
                    <h1 className="title">Most Popular Destinations</h1>
                    <div className="destination-list">
                        {destinations.map((dest, index) => (
                            <a key={index} href={dest.link} className="destination-link">
                                <div className="destination-image">
                                    <img src={dest.img} alt={dest.name} />
                                </div>
                                <div className="destination-details">
                                    <h3 className="destination-name">{dest.name}</h3>
                                    <p className="destination-visa">
                                        Visa <span>in </span>
                                        <span className="highlight">{dest.note || ''}{dest.time}</span>
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropMenu;
