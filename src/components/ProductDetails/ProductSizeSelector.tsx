import React from 'react';
import { useSelector } from 'react-redux';

import classes from './ProductSizeSelector.module.css';

const ProductSizeSelector = () => {
  const { selectedProduct, selectedSKU } = useSelector(
    (state: any) => state.productSlice
  );

  if (!selectedProduct || !selectedSKU) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes['size-selector']}>
      <div className={classes['size-info']}>
        <h3>
          <span>SIZE</span> L
        </h3>
        <button className="btn-link">SIZE GUIDE</button>
      </div>
      <ul className={classes['sizes']}>
        {selectedSKU.sizes.map((size: string, index: number) => (
          <li key={index}>{size}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSizeSelector;
