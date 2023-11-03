import React, { useEffect } from 'react';
import '../App.css';
import '../particles.min';
import particlesConfig from '../particlesjs-config.json';
import Navbar from '../Navbar';

function Experiencia() {
  useEffect(() => {
    window.particlesJS('particles-js', particlesConfig);
  }, []);

  return (
    <div className="App">
      <header id="particles-js" className="App-header">
      </header>
    </div>
  );
}

export default Experiencia;
