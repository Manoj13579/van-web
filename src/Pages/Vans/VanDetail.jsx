import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../Components/Server.jsx';
import '../../Style/Vansitem.css';


const VanDetail = () => {

const params = useParams();
const [vansDataP, setVansDataP] = useState("");

console.log(vansDataP)
    useEffect(()=>{
    fetch(`/api/vans/${params.id}`)
    .then((res) => res.json())
        .then((json) => {
          setVansDataP(json.vans)
    })
  },[params.id])

  return (
    <div>
    {vansDataP ? (
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
    ) : (<h1>Loading...</h1>)}
    </div>
  )
}

export default VanDetail