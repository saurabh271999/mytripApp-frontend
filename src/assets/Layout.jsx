import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import Poster from './Poster';
import Popular from './Popular';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      {/* Remove Navbar here if you're already using it globally in App.jsx */}
      <div className="min-h-screen">
        <Outlet /> {/* This is where nested routes will render */}
      </div>
      <Banner />
                      <Poster />
                      <Popular />
      <Footer />
    </>
  );
};

export default Layout;
