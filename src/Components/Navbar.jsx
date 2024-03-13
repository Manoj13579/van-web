import React from 'react';
import '../Style/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => { 
  return (
    <div className='header'>
     <div className="right-item">
        <Link to={'/'}><h1>#VanLife</h1></Link>
     </div>
     <div className="left-item">
       <Link to={'/about'}><h3 className='items'>About</h3></Link>
       <h3 className='items'>Vans</h3>
     </div>
    </div>
  )
}

export default Navbar