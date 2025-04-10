import React from 'react'
import { Outlet } from 'react-router';
import Navbar from './Component/home/Navbar';
import Footer from './Component/home/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App