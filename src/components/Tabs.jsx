import { VisaData } from '../data';
import '../styles/TabStyle.scss'
const TabsList = [
    {
        innerText: "All",
        value: "all"
    },
    {
        innerText: "Instant",
        value: "instant"
    },
    {
        innerText: "In a week",
        value: "week"
    },
    {
        innerText: "In a month",
        value: "month"
    },

];

function Tabs() {
    return (
        <div className="tab-container">
            <section className='tab-container'>
                <section className='tab-section'>
                    <span className='tag-img'>
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.993 12.7334C11.0929 10.4427 11.4926 9.84507 11.8922 9.74547C12.9913 9.34708 14.49 12.5342 15.7888 12.1358C16.5881 11.9366 16.3883 10.5422 17.5873 8.84909C18.2866 7.85311 19.0859 7.25553 19.6854 6.85714M19.2858 15.3229L16.2884 16.7173L12.5916 18.3109C11.0929 19.008 9.39441 18.3109 8.69502 16.8169L5.69764 10.1439C5.39791 9.34708 5.39791 8.5503 5.69764 7.85311C5.99738 7.15593 6.49694 6.55834 7.19633 6.25955L13.8905 3.27162C15.3892 2.57444 17.0877 3.27162 17.7871 4.76559L20.7845 11.4386C21.3839 12.9326 20.6845 14.7253 19.2858 15.3229ZM12.5916 18.3109C11.0929 19.008 9.39441 18.3109 8.69502 16.8169L5.69764 10.1439C5.39791 9.34708 5.39791 8.5503 5.69764 7.85311C4.19895 7.95271 3 9.24748 3 10.7414V18.0121C3 19.7052 4.29887 21 5.89747 21H13.1911C14.7897 21 16.0886 19.7052 16.0886 18.1117V16.7173L12.5916 18.3109Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                    </span>
                    <hr />
                    <div className='tab-bar'>
                        {
                            TabsList.map((tab, index) =>
                                <button key={index}>{tab.innerText}</button>)
                        }
                    </div>
                </section>
            </section>
            <section className='place-cards'>
                <section className='cards-grid'>
                    {
                        VisaData.length > 0 && VisaData ? VisaData.map((data, index) => (
                            <section className='card' key={index}>
                                <div className='place-img'>
                                    <img src={`${data.img}`} alt="" />
                                    <span className='count-text'>{data.appliedVisas} Visas on Time</span>
                                </div>
                                <div className='place-content'>
                                    <section className='place-name'>
                                        <h3 className='place-title'>{data.place}</h3>
                                        <span className='price'>&#8377;{data.price}</span>
                                    </section>
                                    <section className='place-time'>
                                        <section className='place-time-content'>
                                            <p>Get on <span className='date-time'>{data.getOn}</span></p>
                                        </section>
                                        <section>

                                        </section>
                                    </section>
                                </div>
                            </section>
                        )) : <p>No results</p>
                    }

                    {/* <section className='card'>
                        <div className='place-img'>
                            <img src="https://media.atlys.com/b2c/country_thumbnails/tr:w-800/TH" alt="" />
                            <span className='count-text'>53K+ Visas on Time</span>
                        </div>
                        <div className='place-content'>
                            <section className='place-name'>
                                <h3 className='place-title'>United Arab Emirates</h3>
                                <span className='price'>&#8377;2,500</span>
                            </section>
                            <section className='place-time'>
                                <section className='place-time-content'>
                                    <p>Get on <span className='date-time'>12 Jun, 12:12 PM</span></p>
                                </section>
                                <section>

                                </section>
                            </section>
                        </div>
                    </section> */}

                </section>
            </section>
        </div>
    );
}

export default Tabs;