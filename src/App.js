import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import { LangProvider } from "./context/LangContext";
import Particles from "react-particles-js";
import Header from './components/Header';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <LangProvider>
      <NavBar />
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900

              }
            },
            shape:{
              type: faSquare,
            }
          }
        }}
      />
      <Header />

    </LangProvider>
  );
}

export default App;
