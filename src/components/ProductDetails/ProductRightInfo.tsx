import React from 'react';
import { useSelector } from 'react-redux';

import ProductAddToCart from './ProductAddToCart';
import ProductColorSelector from './ProductColorSelector';
import ProductInfo from './ProductInfo';
import ProductSizeSelector from './ProductSizeSelector';

const ProductRightInfo = () => {
  const { selectedProduct, selectedSKU, selectedSize } = useSelector(
    (state: any) => state.productSlice
  );

  if (!selectedProduct || !selectedSKU) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <ProductInfo product={selectedProduct} sku={selectedSKU} />
      <ProductColorSelector product={selectedProduct} sku={selectedSKU} />
      <ProductSizeSelector sku={selectedSKU} />
      <ProductAddToCart sku={selectedSKU} size={selectedSize} />
    </section>
  );
};

export default ProductRightInfo;
