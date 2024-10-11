import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Discover from './Discover';
import Heritage from './Heritage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/alabay-gaurdian' element={<Discover/>}/>
      <Route path='/alabay-heritage' element={<Heritage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
