import React from 'react';
import { Link, useLocation, useLoaderData } from 'react-router-dom';
import '../../Components/Server.js';
import { getVans } from '../../Utility/Api.js';


export function loader ({params}) {
  return getVans(params.id);
}


const VanDetail = () => {


const location = useLocation();
const vansDataP = useLoaderData();


// look for optional chaining
const search = location.state?.search || "";
const type = location.state?.type || "all";


  return (
    <div>
      <Link to={`..${search}`}
       relative = 'path'
      >
      <span className='back-button'>&larr; back to {type} vans</span>
      </Link>
      <div className='vans-item'>
    <img src={vansDataP.imageUrl} />
    <div className="description-bar">
          <h3 className='bar-items'>{vansDataP.name}</h3>
         <p className='bar-items'>${vansDataP.price}/day</p>
         <button className={`bar-items-${vansDataP.type}`}><i>{vansDataP.type}</i></button>
         <p className='bar-items'>{vansDataP.description}</p>
         <button className='rent'>Rent this van</button>
    </div>
    </div>
    </div>
  )
}

export default VanDetail