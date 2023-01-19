import React from 'react';
import { ImageToday } from './components/contentPage/ImageToday';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Login } from './components/Login';
import { SignUp } from './components/Signup';


function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='photooftheday' element={<ImageToday />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
