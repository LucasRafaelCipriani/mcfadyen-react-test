import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from '../../styles/ProductDetails/ProductLeftInfo.module.css';

const ProductLeftInfo = () => {
  const { selectedProduct } = useSelector((state: any) => state.productSlice);
  const [selectedTopic, setSelectedTopic] = useState('details');

  if (!selectedProduct) {
    return <p>Loading...</p>;
  }

  const availableTopics = ['details', 'delivery', 'fit', 'share'];

  return (
    <section className={`hidden-mobile ${classes['pdp-left-info']}`}>
      <ul className={classes['topics']}>
        {availableTopics.map((topic: string, index: number) => (
          <li
            key={index}
            className={selectedTopic === topic ? classes['active'] : ''}
            onClick={() => setSelectedTopic(topic)}
          >
            {topic}
          </li>
        ))}
      </ul>
      <p className={classes['topic-data']}>{selectedProduct[selectedTopic]}</p>
      <p className={classes['extra-info']}>
        See the <button className="btn-link">EDITOR'S NOTE</button>
      </p>
      <p className={classes['extra-info']}>
        Learn about the <button className="btn-link">DESIGNER</button>
      </p>
    </section>
  );
};

export default ProductLeftInfo;
