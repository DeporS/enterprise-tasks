import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ id, title, brand }) {
  return (
    <li>
      <Link to={`/product/${id}`}>{title}</Link> ({brand})
    </li>
  );
}

export default ProductItem;