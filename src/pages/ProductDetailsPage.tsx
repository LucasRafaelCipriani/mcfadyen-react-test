import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import ProductImageCarousel from '../components/ProductDetails/ProductImageCarousel';
import ProductLeftInfo from '../components/ProductDetails/ProductLeftInfo';
import ProductRightInfo from '../components/ProductDetails/ProductRightInfo';
import { productActions } from '../store/slices/productSlice';

import classes from './ProductDetailsPage.module.css';

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.productSlice);

  useEffect(() => {
    const selectedProduct = products.find(
      (product: any) => String(product.id) === productId
    );

    if (selectedProduct) {
      dispatch(productActions.selectProduct(selectedProduct));
      dispatch(productActions.selectSKU(selectedProduct.skus[0]));
    } else {
      navigate('/error');
    }
  }, [dispatch, products, productId, navigate]);

  return (
    <main className={classes['pdp-page']}>
      <ProductLeftInfo />
      <ProductImageCarousel />
      <ProductRightInfo />
    </main>
  );
};

export default ProductDetailsPage;
