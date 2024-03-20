import React, { useState, useEffect } from 'react';
import '../../Components/Server.jsx';
import Vansitem from './Vansitem.jsx';
import '../../Style/Vansitem.css';

const Vans = () => {

    const [vansData, setVansData] = useState([]);

    useEffect(()=>{
    fetch("/api/vans")
    .then((res) => res.json())
        .then((json) => {
          setVansData(json.vans)
    })
  },[])
  const allVans = vansData.map((prevstate)=>{
    return(<Vansitem
    key = {prevstate.id}
    {...prevstate}
    />)
  })

  return (
    <div>
         <div className='vans-container'>
        <h2>Explore our vans options</h2>
        <div className="all-buttons">
            <button><h4>Simple</h4></button>
            <button><h4>Luxury</h4></button>
            <button><h4>Rugged</h4></button>
        </div>
    </div>
    <div className="vans-organize">
    {allVans}
    </div>
    </div>
  )
}

export default Vans