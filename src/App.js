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


      <div className="Contenido">
        <section id="home">
          <span id="home" />
          <hr />
          <hr />
          <hr />
          <Header />
          <SocialNetweork />
        </section>

        <section id="about">
          <span id="about" />
          <hr />
          <hr />
          <hr />
          <About />
        </section>

        <section id="services">
          <span id="services" />
          <hr />
          <hr />
          <hr />
          <Services />
        </section>

{/*
        <section id="proyects">
          <span id="proyects" />
          <hr />
          <hr />
          <hr />
          <Projects />
        </section>
*/}
        <section id="contact">
          <span id="contact" />
          <hr />
          <hr />
          <hr />
          <Contact />
        </section>
      </div>
    </LangProvider >
  );
}

export default App;
