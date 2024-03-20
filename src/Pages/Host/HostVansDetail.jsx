import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';


const HostVansDetail = () => {

const params = useParams();
const[paramId, setParamId] = useState(null);

useEffect(()=>{
fetch(`/api/host/vans/${params.id}`)
.then((res)=> res.json())
.then((data) => {setParamId(data.vans)
})
},[params.id]);

if(!paramId){
  return <h1>Loading...</h1>
}

  return (
    <div>
      <Link to=".."
       relative = 'path'
      >
      <span className='back-button'>&larr; back to all vans</span>
      </Link>
      <div>
      <img src={paramId.imageUrl} />
      <div className='holder'>
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