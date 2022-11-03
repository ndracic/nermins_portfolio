import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer'
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Aboutme />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
