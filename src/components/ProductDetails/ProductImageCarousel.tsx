import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classes from './ProductImageCarousel.module.css';

const ProductImageCarousel = () => {
  const { selectedProduct, selectedSKU } = useSelector(
    (state: any) => state.productSlice
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (!selectedProduct || !selectedSKU) {
    return <p>Loading...</p>;
  }

  return (
    <section className={classes.carousel}>
      <Slider {...settings}>
        {selectedSKU.images.map((image: string, index: number) => (
          <div key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/${image}`}
              alt={selectedProduct.name}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductImageCarousel;
