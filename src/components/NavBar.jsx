import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#282c34', color: 'white' }}>
      <div className="logo">
        <h1>Ecommerce</h1>
      </div>
      <div className="nav-links">
        <a href="#Inicio" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Inicio</a>
        <a href="#Productos" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Productos</a>
        <a href="#Sobre Nosotros" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Sobre Nosotros</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
