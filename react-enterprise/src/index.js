import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [ 
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);