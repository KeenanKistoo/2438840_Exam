import React from 'react';
import Nav from './Components/NavBar/Nav';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Design from './Pages/Design/Design';
import Explore from './Pages/Explore/Explore';
import Theory from './Pages/Theory/Theory';
import Art from './Pages/Art/Art';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/design' element={<Design/>}/>
          <Route path='/theory' element={<Theory/>}/>
          <Route path='/art' element={<Art/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
        
    </>
  );
}

export default App;
