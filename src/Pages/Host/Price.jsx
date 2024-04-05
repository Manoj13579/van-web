import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Price = () => {

  const { data } = useOutletContext();

  return (
    <div className='hostvans-nav-detailcontainer-price'><h4>Price: ${data.price}<span>/day</span></h4></div>
  )
}

export default Price