import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import { Navbar } from 'react-bootstrap';


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
