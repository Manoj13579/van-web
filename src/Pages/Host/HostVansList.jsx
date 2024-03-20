import React from 'react'
import { Link } from 'react-router-dom'

const HostVansList = (props) => {

console.log(props)

  return (
      <Link to={`/host/hostvans/${props.id}`}>
    <div className='hostvans-container'>
        <img src={props.imageUrl} />
        <div className="descriptions">
      <h3>{props.name}</h3>
      <p>${props.price}/day</p>
    </div>
    </div>
        </Link>
  )
}

export default HostVansList