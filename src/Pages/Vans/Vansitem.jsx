import React from 'react';
import '../../Style/Vansitem.css';
import { Link } from 'react-router-dom';

const Vansitem = (props) => {


  return (
    <div className='vans-item'>
     <Link to={`/vans/${props.id}`}>
        <img src={props.imageUrl} />
        <div className="description-bar">
          <h3 className='bar-items'>{props.name}</h3>
         <p className='bar-items'>${props.price}/day</p>
         <button className={`bar-items-${props.type}`}><i>{props.type}</i></button>

        </div>
    </Link>
    </div>
  )
}

export default Vansitem