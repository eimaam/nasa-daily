import React from 'react';
import { ImageToday } from './components/contentPage/ImageToday';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { Nav } from './components/Nav';


function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='photooftheday' element={<ImageToday />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
