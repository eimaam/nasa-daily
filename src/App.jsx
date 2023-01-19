import React from 'react';
import { ImageToday } from './components/contentPage/ImageToday';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Login } from './components/Login';
import { SignUp } from './components/Signup';
import { UserProvider } from './context/UserContext';
import toast, { Toaster } from 'react-hot-toast';
import { ProtectedRoutes } from './Routes/ProtectedRoutes';



function App() {
  return (
    <BrowserRouter>
    <UserProvider>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='photooftheday' element={<ImageToday />} />
        </Route>
      </Routes>
      <Toaster />
    </UserProvider>
    </BrowserRouter>
  );
}

export default App;
