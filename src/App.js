import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import About from './pages/About'; 
import Book from './pages/Book'; 
import Calendar from './pages/Calendar'; 
// import Business from './pages/Business';
import Footer from "./components/Footer";  
import Header from "./pages/Header"; 
import Home from './pages/Home'; 
import Locations from './pages/Locations'; 
import Navbar from './components/Navbar'; 
import Sell from './pages/Sell';
import Services from './pages/Services'; 
import Testimonials from './pages/Testimonials';  
import { BrowserRouter as Router, Route } from 'react-router-dom'; 


function App() {
  return (
    <>

    <Router>

    <div>
      
    <Header />

    <Navbar />

    <div className="app-container">

    <Route exact path = '/' component = {Home} />
    <Route exact path = "/about" component = {About} />

    <Route exact path = "/services" component = {Services} />
    <Route exact path = "/testimonials" component = {Testimonials}/>

    <Route exact path = "/sell" component = {Sell} />
    {/* <Route exact path = "/business" component = {Business} /> */}

    <Route exact path = "/locations" component = {Locations} />
    <Route exact path = "/book" component = {Book}/>

    <Route exact path = "/calendar" component = {Calendar} />

    </div>

    <Footer />

    </div>

    </Router>

    </>
  );
}

export default App;
