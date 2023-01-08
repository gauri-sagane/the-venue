import './resources/styles.css';
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured/Featured';
import VenueNfo from './components/venueNfo/VenueNfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venuenfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name='pricing'>
        <Pricing />
      </Element>
      <Element name='location'>
        <Location />
      </Element>
      
      <Footer/>
    </div>
  );
}

export default App;
