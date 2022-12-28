import './App.css';
import About from './components/About Section/About';
import Footer from './components/Footer Section/Footer';
import Home from './components/Home Section/Home';
import Navbar from './components/Navbar Section/Navbar';
import Project from './components/Project Section/Project';
import Skill from './components/Skills Section/Skill';
import Contact from './components/Contact Section/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
