import React, {useEffect} from 'react';
import '../App.css';
import '../particles.min';
import particlesConfig from '../particlesjs-config.json';

function Home() {

  useEffect(() => {

    window.particlesJS('particles-js', particlesConfig);


    const canvas = document.getElementById('triangulo');
    const ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.moveTo(50, 600); 
    ctx.lineTo(600, 600); 
    ctx.lineTo(325, 50);
    ctx.closePath();

    ctx.lineWidth = 2; 
    ctx.strokeStyle = '#fff'; 
    ctx.stroke();
  }, []);

  return (
    <div className="App">
      <header id="particles-js" className="App-header">
        <div id='figuras'>
          <div className='geometria' id='circulo'></div>
          <div className='geometria' id='circulo2'></div>
          <canvas width="600" height="600" id='triangulo'></canvas>
          <div className='geometria' id='rectangulom'></div>
          <div className='geometria' id='rectangulo'></div>
          <div className='geometria' id='desarrollador'><p>Desarrollador Web</p></div>
          <div className='geometria' id='tecnico'><p>Técnico informático</p></div>
          <button className='geometria' id='boton'><p>DESCARGAR CV</p></button>
          <div id='info'>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg></a>
            <p>000</p>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg></a>
            <p>000</p>
          </div>
        </div>

        <div id='nombre'>
          <h1 id='alejandro'><span></span>ALEJANDRO</h1>
          <h1 id='mostazo'>MOSTAZO</h1>
        </div>


        <footer>
          <a href='https://www.linkedin.com/in/alejandro-mostazo-94a1a2184' target="_blank">01 <b>Linkedin</b></a> <a href="tel:+34 656574068" target="_blank" className='indent'>03 <b> +34 656 57 40 68</b></a> <br/>
          <a href='https://github.com/AlejandroMostazo' target="_blank">02 <b>GitHub</b></a><a href="mailto:alejandromostazo39@gmail.com" target="_blank" className='indent'>04 <b>alejandromostazo39@gmail.com</b></a>
        </footer>
      </header>
    </div>
  );
}

export default Home;