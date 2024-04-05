import React, { Suspense } from 'react';
import { useLoaderData, Link, Await, defer } from 'react-router-dom';
import { getHostVans } from '../../Utility/Api.js';
import { requireAuth } from '../../Utility/Auth.js';



export async function loader ({ request }) {
  await requireAuth(request);
  return defer ({ hostvans: getHostVans() });
}

const HostVans = () => {

const dataPromise = useLoaderData();


const hostvanslist = (hostvans) => {
  const allHostVans = hostvans.map(hostvan => (
    <Link to={hostvan.id}
     key = {hostvan.id}
     >
     <div className='hostvans-container'
     key={hostvan.id}
     >
        <img src={hostvan.imageUrl} />
        <div className="descriptions">
      <h3>{hostvan.name}</h3>
      <p>${hostvan.price}/day</p>
    </div>
    </div>
        </Link>
));
return(
  <div>
    {allHostVans}
  </div>
)
}


return (
    <div><h1>Your listed vans</h1>
    <Suspense fallback={<h1>Loading Hostvans...</h1>}>
    <Await resolve={dataPromise.hostvans}>
      {hostvanslist}
    </Await>
    </Suspense>
    </div>
  )
}

export default HostVans