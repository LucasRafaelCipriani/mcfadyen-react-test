import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from '../../styles/ProductDetails/ProductOtherLinks.module.css';

const ProductOtherLinks = () => {
  const { products } = useSelector((state: any) => state.productSlice);

  return (
    <section className={classes['links-section']}>
      <ul className={classes['links']}>
        {products.map((product: any) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductOtherLinks;
