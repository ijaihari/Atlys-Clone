import '../styles/MetricsStyle.scss';

const NewsData = [
    {
        pubImg: 'https://www.atlys.com/_next/image?url=https%3A%2F%2Fnext-cdn.atlys.com%2F_next%2Fstatic%2Fmedia%2FfeaturedForbes.4d6cf4d8.png&w=828&q=75',
        text: 'How Government can Streamline Visas'
    },
    {
        pubImg: 'https://www.atlys.com/_next/image?url=https%3A%2F%2Fnext-cdn.atlys.com%2F_next%2Fstatic%2Fmedia%2FfeaturedFastCompany.f5d21058.png&w=1080&q=75',
        text: 'The 10 most innovative travel companies of 2022'
    },
    {
        pubImg: 'https://www.atlys.com/_next/image?url=https%3A%2F%2Fnext-cdn.atlys.com%2F_next%2Fstatic%2Fmedia%2FfeaturedWashingtonPost.517d77a2.png&w=1080&q=75',
        text: 'Gamechangers: atlys as Winner in Technology sector'
    },
    {
        pubImg: 'https://www.atlys.com/_next/image?url=https%3A%2F%2Fnext-cdn.atlys.com%2F_next%2Fstatic%2Fmedia%2FfeaturedTechCrunch.9f157784.png&w=1080&q=75',
        text: 'Atlys raises $4.25M to make visas faster and easier'
    },

]

function VisaMetrics() {
    return <div className='visametrics'>
        <section className='metrics-container'>
            <section className='metrics-content'>
                <div className='title'>
                    <h2 className='title-content'>Visas On Time</h2>
                    <div></div>
                </div>
            </section>
            <section className='metrics-bar'>
                <div className='f-metric'>
                    <p>99.2%</p>
                    <div>
                        <p>Visas on time</p>
                        <p>Never miss your trip. Visas on Atlys come 2x faster</p>
                    </div>
                </div>


                <div className='s-metric'>
                    <p>5L+</p>
                    <div>
                        <p>Visas Processed</p>
                        <p>In just over a year, we are <br className='largeview-breakpoint' />
                            India's second largest visa <br className='largeview-breakpoint' />
                            processing platform
                        </p>
                    </div>
                </div>
                <div className='th-metric'>
                    <p>4.91
                        <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7243 3.78351C17.758 1.98894 17.2749 1.09165 16.6331 0.796724C16.0739 0.539763 15.4303 0.539763 14.8711 0.796723C14.2293 1.09165 13.7462 1.98894 12.7799 3.78351L11.0757 6.94845C10.7656 7.52419 10.6106 7.81206 10.3909 8.03143C10.1964 8.22565 9.96583 8.37999 9.71212 8.48578C9.42556 8.60526 9.10033 8.63881 8.44988 8.70592L5.43343 9.01714C2.97773 9.27051 1.74988 9.39719 1.21538 9.94861C0.751311 10.4274 0.540859 11.0973 0.647789 11.7554C0.77095 12.5134 1.70579 13.3195 3.57547 14.9316L5.50865 16.5985C6.15284 17.154 6.47494 17.4317 6.65984 17.7758C6.82317 18.0797 6.90946 18.4191 6.91114 18.7642C6.91305 19.1548 6.76272 19.5527 6.46205 20.3483L5.564 22.725C4.64861 25.1475 4.19092 26.3587 4.4582 27.0938C4.69005 27.7315 5.21444 28.2187 5.86738 28.4032C6.62008 28.6158 7.7945 28.0706 10.1434 26.98L14.3305 25.036C14.8532 24.7933 15.1146 24.672 15.3871 24.6241C15.6286 24.5817 15.8756 24.5817 16.1171 24.6241C16.3896 24.672 16.651 24.7933 17.1737 25.036L21.3608 26.98C23.7097 28.0706 24.8841 28.6158 25.6368 28.4032C26.2897 28.2187 26.8141 27.7315 27.046 27.0938C27.3133 26.3587 26.8556 25.1475 25.9402 22.725L25.0421 20.3483C24.7415 19.5527 24.5911 19.1548 24.593 18.7642C24.5947 18.4191 24.681 18.0797 24.8443 17.7758C25.0292 17.4317 25.3513 17.154 25.9955 16.5985L27.9287 14.9316C29.7984 13.3195 30.7332 12.5134 30.8564 11.7554C30.9633 11.0973 30.7529 10.4274 30.2888 9.94861C29.7543 9.39719 28.5265 9.27051 26.0707 9.01714L23.0543 8.70592C22.4039 8.63881 22.0786 8.60526 21.7921 8.48578C21.5384 8.37999 21.3078 8.22565 21.1132 8.03143C20.8935 7.81206 20.7385 7.52419 20.4285 6.94845L18.7243 3.78351Z" fill="white"></path></svg>
                    </p>
                    <div>
                        <p>Rating</p>
                        <p>Across Trustpilot, app stores, and expert reviews, we've scored highest-in-class <br className='largeview-breakpoint' /> reviews</p>
                    </div>
                </div>

            </section>
        </section>

        <section className='news-container'>
            <p className='title'>Atlys In The News</p>
            <section className='news-grid'>
                {
                    NewsData.map((data, index) => <div key={index} className='news-card'>
                        <img src={data.pubImg} alt="" />
                        <p className='text'>{data.text}</p>
                    </div>)
                }
            </section>
        </section>
    </div>
}

export default VisaMetrics;
