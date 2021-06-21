import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import { LangProvider } from "./context/LangContext";
import Header from './components/Header';
import SocialNetweork from './components/SocialNetweork';
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {

  const location = useLocation()

  return (
    <LangProvider>
        <NavBar />
        
        <span id="home" />
        <Header />
        <SocialNetweork />

        <span id="about" />
        <About />
        
        <span id="services" />
        <Services />

        <span id="proyects" />
        <Projects />

        <span id="contact" />
        <Contact />

    </LangProvider >
  );
}

export default App;
