import React, { Suspense } from 'react';
import { Link,
   useLocation,
   useLoaderData,
   defer,
   Await} from 'react-router-dom';
import '../../Components/Server.js';
import { getVan } from '../../Utility/Api.js';


export function loader ({ params }) {
  return defer({vans: getVan(params.id)});
}


const VanDetail = () => {


const location = useLocation();
const dataPromise = useLoaderData();


// look for optional chaining
const search = location.state?.search || "";
const type = location.state?.type || "all";


const renderVanDetailElements = (data) => {
  return(
    <>
    <Link to={`..${search}`}
       relative = 'path'
      >
      <span className='back-button'>&larr; back to {type} vans</span>
      </Link>
      <div className='vans-item'>
    <img src={data.imageUrl} />
    <div className="description-bar">
          <h3 className='bar-items'>{data.vanname}</h3>
         <p className='bar-items'>${data.price}/day</p>
         <button className={`bar-items-${data.type}`}><i>{data.type}</i></button>
         <p className='bar-items'>{data.description}</p>
         <button className='rent'>Rent this van</button>
    </div>
    </div>
    </>
  )
}

  return (
    <div>
      <Suspense fallback={<h1>Loading Vans Detail...</h1>}>
      <Await resolve={dataPromise.vans}>
        {renderVanDetailElements}
      </Await>
      </Suspense>
    </div>
  )
}

export default VanDetail