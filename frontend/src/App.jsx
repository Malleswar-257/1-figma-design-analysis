import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import HeroSection from './components/HeroSection.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <HeroSection />
      <Card />
      <Footer />
    </div>
  );
}

export default App;