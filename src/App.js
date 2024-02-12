import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {

  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
