import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Photos = () => {

const { paramId } = useOutletContext();

  return (
    <div className='hostvans-nav-detailcontainer-photos'><img src={paramId.imageUrl}/></div>
  )
}

export default Photos