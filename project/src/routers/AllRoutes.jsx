import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Favourite from '../pages/favourite';
import Menu from '../pages/Menu';
import SpecialOffer from '../pages/SpecialOffer';
import Track from '../pages/Track';
import ProtectedRoutes from './ProtectedRoutes';
import ProductDetails from './../pages/ProductDetails';

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='menu' element={<Menu />} />
      <Route path='offers' element={<SpecialOffer />} />
      <Route path='track' element={<Track />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetails />} />
      <Route path='cart' element={<Cart />} />
      <Route path='favourite' element={<Favourite />} />
      <Route path='checkout' element={
        <ProtectedRoutes>
          <Checkout />
        </ProtectedRoutes>
      } />
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
    </Routes>
  )
}

export default AllRoutes