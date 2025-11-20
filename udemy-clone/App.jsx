import React from 'react';
import './styles.css';
import Header from './Header';
import Hero from './Hero';
import SkillsSection from './SkillsSection';
import CareerSection from './CareerSection';
import CoursesSection from './CoursesSection';
import TrustedCompanies from './TrustedCompanies';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <SkillsSection />
      <CareerSection />
      <CoursesSection />
      <TrustedCompanies />
    </div>
  );
}

export default App;