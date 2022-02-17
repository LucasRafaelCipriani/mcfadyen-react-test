import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../store/slices/productSlice';

import classes from '../../styles/ProductDetails/ProductSizeSelector.module.css';

const ProductSizeSelector = ({ sku }: any) => {
  const dispatch = useDispatch();
  const { selectedSize } = useSelector((state: any) => state.productSlice);

  const selectSizeHandler = (sizeData: any) => {
    if (sizeData.available) {
      dispatch(productActions.selectSize(sizeData.name));
    }
  };

  useEffect(() => {
    dispatch(productActions.selectSize(sku.sizes[0].name));
  }, [dispatch, sku.sizes]);

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
            className={
              !size.available
                ? classes['not-available']
                : selectedSize === size.name
                ? classes['selected']
                : ''
            }
            key={index}
            onClick={() => selectSizeHandler(size)}
          >
            {size.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSizeSelector;
