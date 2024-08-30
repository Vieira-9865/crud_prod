// src/ProductList.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import EditProduct from './EditProduct';

function ProductList({ products, onProductRemoved, onProductUpdated }) {

  const handleDelete = (idProduct) => {
    if (window.confirm('Tem certeza que você deseja apagar o produto?')) {
      axios.delete(`http://localhost:8080/products/${idProduct}`)
        .then(response => {
          alert('Produto removido com sucesso!');
          onProductRemoved(idProduct);
        })
        .catch(error => {
          console.error("Ocorreu um erro ao deletar o produto!", error);
        });
    }
  };

  return (
    <Container>
      <h1 className="text-center my-4">Nunes Sports</h1>
      <Row>
        {products.map(product => (
          <Col key={product.idProduct} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>Preço: </strong>${product.value}</Card.Text>
                <div className="d-flex justify-content-between">
                  <EditProduct product={product} onProductUpdated={onProductUpdated} />
                  <Button variant="danger" onClick={() => handleDelete(product.idProduct)}>
                    Remover
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
