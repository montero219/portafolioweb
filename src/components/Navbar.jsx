import React, { useState } from 'react';
// import { Link } from 'react-scroll';

// import logo from "../assets/logo.svg";
// eslint-disable-next-line no-unused-vars
import styles from './stylescomponent.css'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  
  const cambiarSeccion = (seccion) => {
    setSeccionActiva(seccion);
  };
  
  const descargarCV = () => {
    const rutaCV = 'VD.pdf';
    const enlace = document.createElement('a');
    enlace.href = rutaCV;
    enlace.download = `cv_Juan_Montero_${new Date()}.pdf`;
    enlace.click();
  };
  return (
    <div className='container-navbar'>
      <section className='navbar-align' >
      <div className='items-navbar-style'>
        <a href="#inicio" className={seccionActiva === 'inicio' ? 'inicio' : ''} onClick={() => cambiarSeccion('inicio')}>Inicio</a>
        <a href="#experiencia" className={seccionActiva === 'experiencia' ? 'experiencia' : ''} onClick={() => cambiarSeccion('experiencia')}>Experiencia</a>
        <a href="#sobreMi" className={seccionActiva === 'sobreMi' ? 'sobreMi' : ''} onClick={() => cambiarSeccion('sobreMi')}>Sobre mi</a>
        <a href="#Contactme" className={seccionActiva === 'Contactme' ? 'Contactme' : ''} onClick={() => cambiarSeccion('Contactme')}>Contacto</a>

      </div>
        <div className='CV' onClick={descargarCV} >Descargar VD</div>
      </section>
      <section className='ico-nav'>
        <FaBars/>
      </section>
    </div>
  );
}

export default Navbar;
