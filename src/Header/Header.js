import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => {
  const [itemCount] = useState(0);

  return ( 
    <>
      <header>
        <h1>
          <a href="/">ReactMeals</a>
        </h1>
        <div className="cart-button"> 
          <a href="/cart">
            <FontAwesomeIcon icon={faShoppingCart} /> Your Cart
          </a>
          <span className="cart-count">{itemCount}</span>
        </div>
      </header>
      <img src="./React_Header.jpg" alt="React Header" className="header-image" />
    </>
  );
};

export default Header;
