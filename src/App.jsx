import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/login'/>}/>
      <Route path='/login' element={<Authentication/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' element={<div>Page not found 404</div>}/>
    </Routes>
  );
}

export default App;
