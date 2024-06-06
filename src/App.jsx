import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import './App.css';
import MainPage from './components/MainPage.jsx';
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
            <MenuItem><Link to="/work-experience">Work Experience</Link></MenuItem>
            <MenuItem><Link to="/education">Education</Link></MenuItem>
          </Menu>
        </Sidebar>
        <main style={{ padding: "10px", width: "100%" }}>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;