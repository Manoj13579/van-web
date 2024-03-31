import React from 'react';
import HostVansList from './HostVansList.jsx';
import {useLoaderData} from 'react-router-dom';
import { getHostVans } from '../../Utility/Api.js';
import { requireAuth } from '../../Utility/Auth.js';



export async function loader () {
  await requireAuth();
  return getHostVans();
}

const HostVans = () => {

const hostVans = useLoaderData();


const hostvanslist = hostVans.map((prevstate)=>{
return(<HostVansList
key = {prevstate.id}
{...prevstate}
/>)
})


return (
    <div><h1>Your listed vans</h1>
    <div>
      {hostvanslist}
    </div>
    </div>
  )
}

export default HostVans