import './App.css';

import About from './pages/About'; 
import Book from './pages/Book'; 
import Business from './pages/Business';
import Footer from "./components/Footer";  
import Home from './pages/Home'; 
import Locations from './pages/Locations'; 
import Navbar from './components/Navbar'; 
import Sell from './pages/Sell';
import Services from './pages/Services'; 
import Testimonials from './pages/Testimonials';  

function App() {
  return (
    <div className="App">
      
    <Navbar />

    <Home />
    <About />
    <Services />
    <Testimonials />
    <Sell />
    <Business />
    <Locations />
    <Book />

    <Footer />

    </div>
  );
}

export default App;
