import React from 'react';
import {useOutletContext} from 'react-router-dom';

const Detail = () => {

  const { data } = useOutletContext();
  

  return (
    <div className='hostvans-nav-detailcontainer'>
    <h4>Name: <span>{data.name}</span></h4>
    <h4>Description: <span>{data.description}</span></h4>
    <h4>Visibility: <span>public</span></h4>
    </div>
  )
}

export default Detail