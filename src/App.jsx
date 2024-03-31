import React from 'react';
import {RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
   Route,
} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Vans, { loader as vansLoader } from './Pages/Vans/Vans';
import VanDetail, { loader as vanDetailLoader } from './Pages/Vans/VanDetail';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';
import HostLayout from './Pages/Host/HostLayout';
import HostVans, { loader as hostVansLoader}
from './Pages/Host/HostVans';
import HostVansDetail, { loader as hostVansDetailLoader} 
from './Pages/Host/HostVansDetail';
import Detail from './Pages/Host/Detail';
import Price from './Pages/Host/Price';
import Photos from './Pages/Host/Photos';
import NotFound from './Pages/NotFound';
import Error from './Components/Error';
import Login, { loader as loginLoader, action as loginAction } from './Components/Login';
import { requireAuth } from './Utility/Auth';





const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />}
    loader={loginLoader}
    action={loginAction}
     />
    <Route path='vans' element={<Vans />}
     loader={vansLoader}
     errorElement={<Error />}
    />
    <Route path='vans/:id' element={<VanDetail />}
    loader={vanDetailLoader}
    />
    
    <Route  path='host' element={<HostLayout />}
    >
    <Route 
    index 
    element={<Dashboard />}
    loader={async () => await requireAuth()}
    />
    <Route 
    path='income' 
    element={<Income />}
    loader={async () => await requireAuth()}
    />
    <Route 
    path='reviews' 
    element={<Reviews />}
    loader={async () => await requireAuth()}
    />
    <Route 
    path='hostvans' 
    element={<HostVans />}
    loader = {hostVansLoader}
    />
    <Route 
    path='hostvans/:id' 
    element={<HostVansDetail />}
    loader = {hostVansDetailLoader}
    >
    <Route 
    index 
    element={<Detail />}
    loader={async () => await requireAuth()}
    />
    <Route 
    path='price' 
    element={<Price />}
    loader={async () => await requireAuth()}
    />
    <Route 
    path='photos' 
    element={<Photos />}
    loader={async () => await requireAuth()}
    />
    </Route>
    </Route>
    <Route path='*' element={<NotFound />} />
    </Route>
))


const App = () => {

  
  
  return (
    <div>
   <RouterProvider router = {router}/>
    </div>
  )
}

export default App