import './App.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner';
import {Skills} from './components/Skills';
import { Projects } from './components/Projects';
import { About } from "./components/About";
import { ContactCard } from './components/ContactCard'; 
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App(){
  return(
    <div className='App'>
      <NavBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <About/>
      <ContactCard/>
      <Footer/>
    </div>
  )
}

export default App;