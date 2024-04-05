import React, { Suspense } from 'react';
import { Link,
   NavLink,
   Outlet,
   useLoaderData,
   defer,
   Await } from 'react-router-dom';
import { getVan } from '../../Utility/Api.js';
import { requireAuth } from '../../Utility/Auth.js';


export async function loader ({ params, request }) {
  await requireAuth(request);
  return defer ({ vans: getVan(params.id) });
}


const HostVansDetail = () => {

const dataPromise = useLoaderData();


const renderHostVansDetailElement = (data) => {
  return (
  <>
  <Link to=".."
       relative = 'path'
      >
      <span className='back-button'>&larr; back to all vans</span>
      </Link>
      <div className='hostvans-detail-container'>
      <img src={data.imageUrl} />
      <div>
      <button className={`hostvans-${data.type}`}><i>{data.type}</i></button>
      <h3>{data.name}</h3>
      <p>${data.price}/day</p>
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
      <Outlet context={ {data }}/>
  </>
  )
}

  return (
    <div>
      <Suspense fallback={<h1>Loading Host Vans Detail...</h1>}>
        <Await resolve={dataPromise.vans}>
        {renderHostVansDetailElement}
        </Await>
      </Suspense>
    </div>
  )
}

export default HostVansDetail