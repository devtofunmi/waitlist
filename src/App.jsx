import React from 'react';
import './index.css';
import Navbar from './Navbar';
import MainSection from './MainSection';
import Marque from './Marque';

function App() {
  return (
    <div className=" p-4">
      <Navbar />
      <Marque />
      <MainSection />
    </div>
  );
}

export default App;
