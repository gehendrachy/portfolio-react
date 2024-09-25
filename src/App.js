import logo from './logo.svg';
import './App.css';
import { HeroImage, Slider1, Slider2, Slider3 } from './components/image';
import { Header } from './components/Header';
import { HeroAndBanner } from './components/HeroAndBanner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
        <div>
                <input type="checkbox"  id="darkcircle"></input>
    <div className="wrapper">
        <label for="darkcircle"><i className  ="fa-solid fa-circle-half-stroke"></i></label>
        <Header/>
        
       <HeroAndBanner/>
        
        <Skills/>
        
       <Projects/>
        
        <AboutMe/>
        
        <Contact/>
        
        <Footer/>
    </div>
        </div>
    
    
  );
};

export default App;
