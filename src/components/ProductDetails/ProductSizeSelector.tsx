import React from 'react';
import { useSelector } from 'react-redux';

import classes from '../../styles/ProductDetails/ProductSizeSelector.module.css';

const ProductSizeSelector = ({ sku }: any) => {
  const { selectedSize } = useSelector((state: any) => state.productSlice);

  return (
    <div className={classes['size-selector']}>
      <div className={classes['size-info']}>
        <h3>
          <span>SIZE</span> {selectedSize}
        </h3>
        <button className="btn-link">SIZE GUIDE</button>
      </div>
      <ul className={classes['sizes']}>
        {sku.sizes.map((size: any, index: number) => (
          <li
            className={!size.available ? classes['not-available'] : ''}
            key={index}
          >
            {size.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSizeSelector;
