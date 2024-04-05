import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import loginicon from '../assets/images/avatar-icon.png';


const Layout = () => { 
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  }
  return (
    <div className='site-wrapper'>
    <nav className='header'>
     <div className="logo-item">
        <Link to='/'><h2>#VanLife</h2></Link>
     </div>
     <div className="left-item">
       <NavLink to='about'className={({isActive})=> isActive? 'my-link': null}><h4 className='items'>About</h4></NavLink>
      <NavLink to='vans'className={({isActive})=> isActive? 'my-link': null}><h4 className='items'>Vans</h4></NavLink>
      <NavLink to='host'className={({isActive})=> isActive? 'my-link': null}><h4 className='items'>Host</h4></NavLink>
      <Link to='login' className='login-link'><img src={loginicon} /></Link>
     </div>
     <button onClick={fakeLogOut}>X</button>
    </nav>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout