// src/EditProduct.js
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function EditProduct({ product, onProductUpdated }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [value, setValue] = useState(product.value);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = () => {
    const updatedProduct = { name, description, value };

    axios.put(`http://localhost:8080/products/${product.idProduct}`, updatedProduct)
      .then(response => {
        onProductUpdated(response.data); 
        handleClose();
        alert('Produto atualizado com sucesso!');
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar produto!", error);
      });
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nome do Produto</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formValue">
              <Form.Label>Preço</Form.Label>
              <Form.Control type="number" value={value} onChange={(e) => setValue(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProduct;
