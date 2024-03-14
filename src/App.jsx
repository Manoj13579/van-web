import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Whole from './Components/Whole';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Vans from './Components/Vans';


const App = () => {

  

  return (
    <div>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Whole/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/vans' element={<Vans/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App