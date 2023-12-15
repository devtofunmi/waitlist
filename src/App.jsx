import React from 'react';
import './index.css';
import Navbar from './Navbar';
import MainSection from './MainSection';
import Marque from './Marque';

function App() {
  return (
    <div className="h-screen w-full bg-black p-4">
      <Navbar />
      <MainSection />
      <Marque />
    </div>
  );
}

export default App;
