import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Whole from './Components/Whole';
import About from './Components/About';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Whole/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App