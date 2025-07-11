import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Opportunities from './components/Opportunities';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero />
            <Opportunities />
          </>
        );
      case 'opportunities':
        return <Opportunities />;
      case 'about':
        return <About />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Opportunities />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;