import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const HostLayout = () => {
  return (
    <>
    <nav className='host-navbar'>
       <NavLink to='.' end className={({isActive})=>isActive ? 'my-link' : null}><h4>Dashboard</h4></NavLink> 
       <NavLink to='income'className={({isActive})=>isActive ? 'my-link' : null}><h4>Income</h4></NavLink>
       <NavLink to='hostvans'className={({isActive})=>isActive ? 'my-link' : null}><h4>Vans</h4></NavLink> 
       <NavLink to='reviews'className={({isActive})=>isActive ? 'my-link' : null}><h4>Review</h4></NavLink> 
    </nav>
        <Outlet/>
        </>
  )
}

export default HostLayout