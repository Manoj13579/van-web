import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Photos = () => {

const { data } = useOutletContext();

  return (
    <div className='hostvans-nav-detailcontainer-photos'><img src={data.imageUrl}/></div>
  )
}

export default Photos