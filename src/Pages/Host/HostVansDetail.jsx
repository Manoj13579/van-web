import React from 'react';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../Utility/Api.js';
import { requireAuth } from '../../Utility/Auth.js';


export async function loader ({params}) {
  await requireAuth();
  return getHostVans(params.id);
}


const HostVansDetail = () => {

const paramId = useLoaderData();

  return (
    <div>
      <Link to=".."
       relative = 'path'
      >
      <span className='back-button'>&larr; back to all vans</span>
      </Link>
      <div className='hostvans-detail-container'>
      <img src={paramId.imageUrl} />
      <div>
      <button className={`hostvans-${paramId.type}`}><i>{paramId.type}</i></button>
      <h3>{paramId.name}</h3>
      <p>${paramId.price}/day</p>
      </div>
      </div>
      <nav className="hostvansdetail-navlinks">
      <NavLink to='.' end className={({isActive})=>
    isActive ? "nav-links" : null
    }><h4>Detail</h4></NavLink>
      <NavLink to='price'
      className={({isActive})=>
      isActive ? "nav-links" : null
      }
      ><h4>price</h4></NavLink>
      <NavLink to='photos'
      className={({isActive})=>
    isActive ? "nav-links" : null
    }
      ><h4>photos</h4></NavLink>
      </nav>
      <Outlet context={ {paramId }}/>
    </div>
  )
}

export default HostVansDetail