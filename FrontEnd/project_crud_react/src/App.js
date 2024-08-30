// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Ocorreu um erro ao buscar os produtos!", error);
      });
  }, []);

  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleProductRemoved = (idProduct) => {
    setProducts(products.filter(product => product.idProduct !== idProduct));
  };

  const handleProductUpdated = (updatedProduct) => {
    setProducts(products.map(product =>
      product.idProduct === updatedProduct.idProduct ? updatedProduct : product
    ));
  };

  return (
    <Router>
      <div className="App container">
        <Link to="/add-product">
          <button className="btn btn-primary add-product-button">Adicionar Produto</button>
        </Link>
        <Routes>
          <Route 
            path="/" 
            element={
              <ProductList
                products={products}
                onProductRemoved={handleProductRemoved}
                onProductUpdated={handleProductUpdated}
              />
            } 
          />
          <Route 
            path="/add-product" 
            element={<AddProduct onProductAdded={handleProductAdded} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
