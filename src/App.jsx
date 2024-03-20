import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Components/About';
import Vans from './Pages/Vans/Vans';
import VanDetail from './Pages/Vans/VanDetail';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';
import HostLayout from './Pages/Host/HostLayout';
import HostVans from './Pages/Host/HostVans';
import HostVansDetail from './Pages/Host/HostVansDetail';
import Detail from './Pages/Host/Detail';
import Price from './Pages/Host/Price';
import Photos from './Pages/Host/Photos';


const App = () => {

  

  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='vans' element={<Vans/>}/>
    <Route path='vans/:id' element={<VanDetail/>}/>
    
    <Route path='host' element={<HostLayout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path='income' element={<Income/>}/>
    <Route path='hostvans' element={<HostVans/>}/>
    <Route path='reviews' element={<Reviews/>}/>
    <Route path='hostvans/:id' element={<HostVansDetail/>}>
    <Route index element={<Detail/>}/>
    <Route path='price' element={<Price/>}/>
    <Route path='photos' element={<Photos/>}/>
    </Route>
    </Route>
    </Route>
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App