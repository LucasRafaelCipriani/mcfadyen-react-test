import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../store/slices/productSlice';

import classes from './ProductColorSelector.module.css';

const ProductColorSelector = () => {
  const dispatch = useDispatch();

  const { selectedProduct, selectedSKU } = useSelector(
    (state: any) => state.productSlice
  );

  if (!selectedProduct || !selectedSKU) {
    return <p>Loading...</p>;
  }

  const selectSKUHandler = (id: any) => {
    const foundSKU = selectedProduct.skus.find((sku: any) => sku.id === id);

    if (foundSKU) {
      dispatch(productActions.selectSKU(foundSKU));
    }
  };

  return (
    <div className={classes['color-selector']}>
      <h3 className={classes['title']}>
        <span>COLOR</span> {selectedSKU.name}
      </h3>
      <ul className={classes['color-list']}>
        {selectedProduct.skus.map((sku: any) => (
          <li
            key={sku.id}
            onClick={() => selectSKUHandler(sku.id)}
            className={sku.id === selectedSKU.id ? classes['active'] : ''}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/${sku.images[0]}`}
              alt={sku.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductColorSelector;
