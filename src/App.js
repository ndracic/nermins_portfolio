import './App.css';
// import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import background from './images/bg.jpeg'
import Resume from './components/Resume';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
// import Aboutme from './components/Aboutme';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <Navbar />
      <Homepage />
      <Resume />
      <Aboutme />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
