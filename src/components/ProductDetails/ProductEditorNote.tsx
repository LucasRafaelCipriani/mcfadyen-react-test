import React from 'react';
import { useSelector } from 'react-redux';

import classes from '../../styles/ProductDetails/ProductEditorNote.module.css';

const ProductEditorNote = () => {
  const { selectedProduct } = useSelector((state: any) => state.productSlice);

  if (!selectedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <section className={classes['editor-section']}>
      <p className={classes['title']}>A note from the editor</p>
      <p className={classes['note']}>{selectedProduct.editor.note}</p>
      <p className={classes['author']}>
        By <span>{selectedProduct.editor.name}</span>,{' '}
        {selectedProduct.editor.ocupation}
      </p>
    </section>
  );
};

export default ProductEditorNote;
