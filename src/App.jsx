import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Photo from './components/Photo';
import Info from './components/Info';
import Buttons from './components/Buttons';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import InterestsPage from './components/InterestsPage';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <Router>
      <div className="app-container">
        <SideMenu />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/work-experience" component={WorkExperience} />
          <Route path="/education" component={Education} />
        </Switch>
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
