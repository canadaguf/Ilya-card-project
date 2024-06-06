import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import './App.css';
import MainPage from './components/MainPage.jsx';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

function App() {
  return (
<div className="ctn">
      <MainPage />
    </div>
  );
}

export default App;