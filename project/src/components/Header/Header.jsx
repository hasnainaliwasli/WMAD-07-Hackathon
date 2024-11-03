import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import "../../styles/header.css";
import { useSelector } from 'react-redux';
import useAuth from '../../customHooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../global/firebase.config';

export default function Header() {
  const menuRef = useRef(null);
  const headerRef = useRef(null)
  const navigate = useNavigate()
  const quantityInCart = useSelector((store) => store.cart.totalQuantity)

  // console.log("quantityInCart", quantityInCart)

  const { currentUser, loading } = useAuth();

  const toggleMenu = () => menuRef.current.classList.toggle("active_menu");
  const navigateToCart = () => {
    navigate('/cart')
  }
  const navigateToFavourite = () => {
    navigate('/favourite')
  }

  const handleLogout = () => {
    signOut(auth).then(() => {
      notify("You are Logged out", 'info')
    }).catch((error) => {
      notify("Something wen wrong", 'error')
    })
  }



  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        headerRef.current.classList.add("sticky_header")
      }
      else {
        headerRef.current.classList.remove("sticky_header")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nav_links = [
    { path: '/home', name: "Home" },
    { path: '/offers', name: "Special Offers" },
    { path: '/menu', name: "Browse Menu" },
    { path: '/track', name: "Track Order" },
  ];

  return (
    <div ref={headerRef} >
      <Container>
        <Row>
          <div className="nav_wrapper">
            {/* Logo */}
            <div className="logo">
              <h1 className='logo_heading'>OrderNow</h1>
            </div>

            {/* Navigation Links */}
            <div className="navigation" ref={menuRef}>
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => isActive ? 'nav_active' : ''}
                      onClick={toggleMenu} // Closes the menu on link click (for mobile)
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navbar Icons */}
            <div className="nav_right">
              <span className="fav_icon">
                <i onClick={navigateToFavourite} className="ri-heart-fill"></i>
                <span className="badge">3</span>
              </span>
              <span className="fav_icon">
                <i onClick={navigateToCart} className="ri-shopping-cart-fill c"></i>
                <span className="badge">{quantityInCart}</span>
              </span>
              <span className="fav_icon ">
                {!currentUser ? <div className='favAndBtn'>
                  <i className="ri-account-circle-fill"></i>
                  <NavLink className='header_auth_btn' to='/signin'>Signup/Signin</NavLink>
                </div> :

                  <div className='favAndBtn'>
                    <button onClick={handleLogout} className='header_auth_btn btn p-1' style={{color:'white'}}>Logout</button>
                  </div>
                }
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
