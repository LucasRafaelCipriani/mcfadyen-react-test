import React from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/slices/productSlice';

import classes from '../../styles/ProductDetails/ProductColorSelector.module.css';

const ProductColorSelector = ({ product, sku }: any) => {
  const dispatch = useDispatch();

  const selectSKUHandler = (id: any) => {
    const foundSKU = product.skus.find((sk: any) => sk.id === id);

    if (foundSKU) {
      dispatch(productActions.selectSKU(foundSKU));
    }
  };

  return (
    <div className={classes['color-selector']}>
      <h3 className={classes['title']}>
        <span>COLOR</span> {sku.name}
      </h3>
      <ul className={classes['color-list']}>
        {product.skus.map((sk: any) => (
          <li
            key={sk.id}
            onClick={() => selectSKUHandler(sk.id)}
            className={sku.id === sk.id ? classes['active'] : ''}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/${sk.images[0]}`}
              alt={sk.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductColorSelector;
