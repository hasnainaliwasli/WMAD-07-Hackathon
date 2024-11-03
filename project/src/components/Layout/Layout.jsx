import React from 'react'
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import AllRoutes from './../../routers/AllRoutes';

export default function Layout() {
  return (
    <>
      <Header />
      <div>
        <AllRoutes />
      </div>
      <Footer />
    </>
  )
}
