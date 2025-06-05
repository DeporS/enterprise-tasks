import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';

function ProductDetail() { 
    const { products } = useOutletContext(); 
    const { id } = useParams();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
        <div>
            <h2>Product not found!</h2>
            <Link to="/">Back to list</Link>
        </div>
    );
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '10px' }} />
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <hr />
      <Link to="/">Back to list</Link>
    </div>
  );
}

export default ProductDetail;