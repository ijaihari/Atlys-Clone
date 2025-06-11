import './App.scss'
import Footer from './components/Footer';
import GridView from './components/GridView';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import VisaMetrics from './components/VisaMetrics';
function App() {
  return (

    <div className='app-container'>
      <Header />
      <Hero />
      <SearchBar />
      <Tabs />
      <GridView />
      <VisaMetrics />
      <Footer />

    </div>

  );
}

export default App;