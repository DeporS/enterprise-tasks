import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { useOutletContext } from 'react-router-dom';

function ProductList() { 
  const { products } = useOutletContext();
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>List of products</h2>
      <label htmlFor="filterInput">Filter by product title: </label>
      <input
        type="text"
        id="filterInput"
        value={filter}
        onChange={handleFilterChange}
      />
      <hr />
      <ul>
        {products
          .filter(product =>
            product.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map(product => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              brand={product.brand}
            />
          ))}
      </ul>
    </div>
  );
}

export default ProductList;