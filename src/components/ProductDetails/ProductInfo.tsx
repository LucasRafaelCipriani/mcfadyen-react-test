import React from 'react';
import { useSelector } from 'react-redux';

import classes from './ProductInfo.module.css';

const ProductInfo = () => {
  const { selectedProduct, selectedSKU } = useSelector(
    (state: any) => state.productSlice
  );

  if (!selectedProduct || !selectedSKU) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes['product-info']}>
      <h2 className={classes['title']}>{selectedProduct.name}</h2>
      <p className={classes['description']}>{selectedProduct.description}</p>
      <p className={classes['price']}>${selectedSKU.price}</p>
    </div>
  );
};

export default ProductInfo;
