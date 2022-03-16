import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/login'/>}/>
      <Route path='/login' element={<div>login</div>}/>
      <Route path='/home' element={<div>home</div>}/>
      <Route path='*' element={<div>Page not found 404</div>}/>
    </Routes>
  );
};

export default App
