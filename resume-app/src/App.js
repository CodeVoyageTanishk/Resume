// src/App.js
import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Summary />
            <WorkExperience />
            <Education />
            <TechnicalSkills />
            <Certifications />
            <Footer />
        </div>
    );
}

export default App;
