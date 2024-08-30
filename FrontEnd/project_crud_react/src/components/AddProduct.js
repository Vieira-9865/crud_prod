// src/AddProduct.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProduct({ onProductAdded }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleAddProduct = () => {
   
    if (!name || !value) {
      alert('Por favor, preencha todos os campos obrigatórios: Nome e Preço.');
      return;
    }

    const newProduct = {
      name,
      description,
      value: parseFloat(value),
    };

    axios.post('http://localhost:8080/products', newProduct)
      .then(response => {
        alert('Produto adicionado com sucesso!');
        onProductAdded(response.data);
        navigate('/'); 
      })
      .catch(error => {
        console.error("Ocorreu um erro ao adicionar o produto!", error);
      });
  };

  return (
    <div className="add-product">
      <h2>Adicionar Produto</h2>
      <div className="form-group">
        <label>Nome do Produto:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Insira o nome do produto"
        />
      </div>
      <div className="form-group">
        <label>Descrição:</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Insira a descrição"
        />
      </div>
      <div className="form-group">
        <label>Preço:</label>
        <input
          type="number"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite o preço do produto"
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddProduct}>
        Adicionar Produto
      </button>
      <button className="btn btn-secondary" onClick={() => navigate('/')}>
        Voltar
      </button>
    </div>
  );
}

export default AddProduct;
 