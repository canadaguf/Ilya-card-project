import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import './App.css';
import Photo from './components/Photo';
import Info from './components/Info';
import Buttons from './components/Buttons';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

function App() {
  const { collapseSidebar } = useProSidebar();

  return (
    <Router>
      <div id="app" style={{ height: "100vh", display: "flex" }}>
        <Sidebar style={{ height: "100vh" }}>
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: '#13395e',
                  color: '#b6c8d9',
                },
              },
            }}
          >
            <MenuItem component={<a href="/work-experience" />}>Work Experience</MenuItem>
            <MenuItem component={<a href="/education" />}>Education</MenuItem>
          </Menu>
        </Sidebar>
        <main style={{ padding: "10px", width: "100%" }}>
          <Routes>
            <Route exact path="/" component={<MainPage />} />
            <Route path="/work-experience" component={<WorkExperience /} />
            <Route path="/education" component={<Education />} />
          </Routes>
        </main>
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
