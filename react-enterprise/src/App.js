import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom'; // Import Outlet
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => console.error("Error fetching data", error));
  }, []);

  return (
    <div className="App">
      <Outlet context={{ products }} />
    </div>
  );
}

export default App;