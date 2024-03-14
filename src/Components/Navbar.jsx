import React from 'react';
import '../Style/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => { 
  return (
    <div className='header'>
     <div className="logo-item">
        <Link to={'/'}><h2>#VanLife</h2></Link>
     </div>
     <div className="left-item">
       <Link to={'/about'}><h4 className='items'>About</h4></Link>
      <Link to={'/vans'}><h4 className='items'>Vans</h4></Link>
     </div>
    </div>
  )
}

export default Navbar