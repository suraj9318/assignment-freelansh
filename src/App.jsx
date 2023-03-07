import './App.css'
import Feature from './componets/Feature';
import GetStarted from './componets/GetStarted';
import Hero from './componets/Hero';
import Navbar from './componets/Navbar';
import ThemeLine from './componets/ThemeLine';


import feature1 from './assets/images/feature1.png'
import feature2 from './assets/images/feature2.png'
import Footer from './componets/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <GetStarted/>
    <Hero/>
    <ThemeLine/>
    <div className="container-fluid feature-container">
    <Feature img={feature1}/>
    <Feature img={feature2}/>
    
    </div>
    <Footer/>
    </>
  );
}

export default App;
