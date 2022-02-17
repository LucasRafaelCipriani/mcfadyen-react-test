import React from 'react';

import classes from '../../styles/ProductDetails/ProductInfo.module.css';

const ProductInfo = ({ product, sku }: any) => {
  return (
    <div className={classes['product-info']}>
      <h2 className={classes['title']}>{product.name}</h2>
      <p className={classes['description']}>{product.description}</p>
      <p className={classes['price']}>${sku.price}</p>
    </div>
  );
};

export default ProductInfo;
