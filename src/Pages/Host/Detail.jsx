import React from 'react';
import {useOutletContext} from 'react-router-dom';

const Detail = () => {

  const { paramId } = useOutletContext();
  

  return (
    <div className='hostvans-nav-detailcontainer'>
    <h4>Name: <span>{paramId.name}</span></h4>
    <h4>Description: <span>{paramId.description}</span></h4>
    <h4>Visibility: <span>public</span></h4>
    </div>
  )
}

export default Detail