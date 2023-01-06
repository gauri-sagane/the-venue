import './resources/styles.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured/Featured';
import VenueNfo from './components/venueNfo/VenueNfo';
import Highlights from './components/highlights/Highlights';

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Featured />
      </>
      <>
        <VenueNfo />
      </>
      <>
        <Highlights />
      </>
      <div style={{backgroundColor: 'red', height:'800px'}}></div>
      <div style={{backgroundColor: 'blue', height:'800px'}}></div>
      <div style={{backgroundColor: 'green', height:'800px'}}></div>
      <div style={{backgroundColor: 'yellow', height:'800px'}}></div>
      <Footer/>
    </div>
  );
}

export default App;
