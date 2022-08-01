import React from 'react';
import { Index } from './Pages/Index';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

 const AppRoutes = () => {
  
    return (

  <Routes>

 <Route path='/' element={<Index/>}/>
 <Route path='/home' element={<Home/>}/>
 <Route path='*'element={<NotFound/>}/> 




  </Routes>

       )
}

export {AppRoutes};