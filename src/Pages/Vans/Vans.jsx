import React, { useState, useEffect } from 'react';
import '../../Components/Server.js';
import Vansitem from './Vansitem.jsx';
import { getVans } from '../../Utility/Api.js';
import { useLoaderData, useSearchParams, } from 'react-router-dom';


 export function loader () {
   return getVans();
 };

const Vans = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const vansData = useLoaderData();
  

  const displayedVans = typeFilter ? vansData.filter(vans => vans.type === typeFilter) : vansData; 

  const allVans = displayedVans.map((prevstate)=>{
    return(<Vansitem
    key = {prevstate.id}
    searchParams={searchParams}
    typeFilter={typeFilter}
    {...prevstate}
    />)
  });
  
  const handleFilterChange = (key, value) => {
  setSearchParams(prevParams => {
    if (value === null){
      prevParams.delete(key)
    }
    else {
      prevParams.set(key, value)
    }
    return (prevParams)
  })
  }

  
  
  return (
    <div>
         <div className='vans-container'>
        <h2>Explore our vans options</h2>
        <div className="all-buttons">
           <button  className={`bar-items simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={()=>handleFilterChange("type", "simple")}><h4>Simple</h4></button>
            <button className={`bar-items luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={()=>handleFilterChange("type", "luxury")}><h4>Luxury</h4></button>
            <button className={`bar-items rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={()=>handleFilterChange("type", "rugged")}><h4>Rugged</h4></button>
        </div>
        {typeFilter ? (<div className='vans-filter'>
            <button onClick={() => handleFilterChange("type", null)}>clear all filters</button>
        </div>) : null}
    </div>
    <div className="vans-organize">
    {allVans}
    </div>
    </div>
  )
}

export default Vans