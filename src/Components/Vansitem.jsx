import React from 'react';
import '../Style/Vansitem.css';

const Vansitem = (props) => {
    console.log(props)

  return (
    <div className='vans-item'>
        <img src={props.imageUrl} />
    </div>
  )
}

export default Vansitem