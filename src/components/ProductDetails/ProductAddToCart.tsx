import React from 'react';
import { useDispatch } from 'react-redux';
import rightArrowSVG from '../../assets/Right.svg';
import { cartActions } from '../../store/slices/cartSlice';

import classes from '../../styles/ProductDetails/ProductAddToCart.module.css';

const ProductAddToCart = ({ sku, size }: any) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const cartItem = {
      id: sku.id,
      name: sku.name,
      size,
      price: sku.price,
      image: sku.images[0],
      quantity: 1,
    };

    dispatch(cartActions.addItem(cartItem));
  };

  return (
    <div className={classes['add-to-cart']}>
      <button
        type="button"
        className={classes['add-to-cart-btn']}
        onClick={() => addToCartHandler()}
      >
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
