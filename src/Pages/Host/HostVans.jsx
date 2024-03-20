import React, { useEffect, useState } from 'react';
import HostVansList from './HostVansList.jsx';

const HostVans = () => {

  const [hostVans, setHostVans] = useState([]);


  useEffect(()=>{
  fetch("/api/host/vans")
  .then((res)=> res.json())
  .then((data)=>{setHostVans(data.vans)})
  },[]);

const hostvanslist = hostVans.map((prevstate)=>{
return(<HostVansList
key = {prevstate.id}
{...prevstate}
/>)
})


return (
    <div><h1>Your listed vans</h1>
    {hostVans.length > 0 ? (<div>
      {hostvanslist}
    </div>) : (<h1>Loading...</h1>)}
    </div>
  )
}

export default HostVans