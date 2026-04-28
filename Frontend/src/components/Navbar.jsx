import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/useCartStore';
import CartDrawer from './CartDrawer';
import './Navbar.css';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);
  
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          Gazioğlu <span>Çiftlik</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><a href="/#products">Ürünlerimiz</a></li>
          <li><Link to="/about">Hakkımızda</Link></li>
        </ul>
        <div className="nav-actions">
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            Sepet ({cartCount})
          </button>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
