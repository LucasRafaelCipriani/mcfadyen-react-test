import React from 'react';

import ProductAddToCart from './ProductAddToCart';
import ProductColorSelector from './ProductColorSelector';
import ProductInfo from './ProductInfo';
import ProductSizeSelector from './ProductSizeSelector';

const ProductRightInfo = () => {
  return (
    <section>
      <ProductInfo />
      <ProductColorSelector />
      <ProductSizeSelector />
      <ProductAddToCart />
    </section>
  );
};

export default ProductRightInfo;
