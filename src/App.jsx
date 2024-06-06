import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Photo from './components/Photo';
import Info from './components/Info';
import Buttons from './components/Buttons';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import SideMenu from './components/SideMenu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app-container">
        <SideMenu />
        <Routes>
          <Route exact path="/" component={MainPage} />
          <Route path="/work-experience" component={WorkExperience} />
          <Route path="/education" component={Education} />
        </Routes>
      </div>
    </Router>
  );
}

function MainPage() {
  return (
    <div className="ctn">
      <Photo />
      <div className='ctn-mid-section'>
        <Info />
        <Buttons />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
