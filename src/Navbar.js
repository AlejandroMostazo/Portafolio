import React, { useState } from 'react';
import './css/menu.css';
import { Link, Outlet } from 'react-router-dom';


function Navbar() {
  const [esvisible, actualizar] = useState(false);

  const cambiar = () => {
    actualizar(!esvisible);
  };

  return (
    <div>
      <Link to={'/'} id='home' style={{ zIndex: esvisible ? '4' : '7'}}>
        <h2>A</h2>
        <h2 id='m'>M</h2>
      </Link>
      <div id='bolas'>
        <div id='menu' onClick={cambiar} className={ esvisible ? 'menu-active' : ''}></div>
      </div>
      <div id='animacion' className={ esvisible ? 'animacion-active' : ''}>
      </div>
      <div id='contenedor' style={{opacity: esvisible ? '1' : '0',
                                   zIndex: esvisible ? '5' : '0'}}> 
        <Link to={'./Experiencia'}  onClick={cambiar}><h1>EXPERIENCIA</h1></Link> 
        <Link to={'./Proyectos'}  onClick={cambiar}><h1>PROYECTOS</h1></Link> 
        <Link to={'./About'}  onClick={cambiar}><h1>SOBRE MI</h1></Link> 
        <Link to={'./Conocimientos'}  onClick={cambiar}><h1>CONOCIMIENTOS</h1></Link> 
        <Link to={'./Contacto'}  onClick={cambiar}><h1>CONTACTO</h1></Link> 
      </div>
      <Outlet/>
    </div>
  );
}

export default Navbar;
