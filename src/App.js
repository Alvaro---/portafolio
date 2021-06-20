import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import { LangProvider } from "./context/LangContext";

function App() {
  return (
    <LangProvider>
      <NavBar />
    </LangProvider>
  );
}

export default App;
