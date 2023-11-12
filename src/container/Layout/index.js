import React from 'react'
import { Outlet } from 'react-router-dom';

import Navbar from '../../sections/Navbar';
import Footer from '../../sections/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default Layout