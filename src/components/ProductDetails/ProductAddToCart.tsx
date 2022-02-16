import React from 'react';
import rightArrowSVG from '../../assets/Right.svg';

import classes from './ProductAddToCart.module.css';

const ProductAddToCart = () => {
  return (
    <div className={classes['add-to-cart']}>
      <button type="button" className={classes['add-to-cart-btn']}>
        Add to Bag
        <img src={rightArrowSVG} alt="Right Arrow" />
      </button>
      <div className={classes['promotion']}>
        <p>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
        <p>Speak to a Personal Stylist CHAT NOW</p>
      </div>
    </div>
  );
};

export default ProductAddToCart;
