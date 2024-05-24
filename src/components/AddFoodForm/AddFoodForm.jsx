import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';



export default function AddFoodForm({ fetchInventory }) {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemUnit, setItemUnit] = useState('');

 

  function submitHandler(event) {
    event.preventDefault();
    axios
      .post('/api/inventory', {
        name: itemName,
        quantity: itemQuantity,
        unit: itemUnit,
      })
      .then(() => {
        fetchInventory();
        setItemName('');
        setItemQuantity(0);
        setItemUnit('');
      })
      .catch((err) => {
        alert('Error Adding Item');
        console.log(err);
      });
  }
  return (
    <>
      <Container fluid>
      <form onSubmit={submitHandler}>
        <Form.Group data-bs-theme="dark" className="mb-3, mx-auto" controlId="formItemName">
        <Form.Label >Item Name:</Form.Label>
        <Form.Control
          value={itemName}
          onChange={(evt) => setItemName(evt.target.value)}
          name='name'
          placeholder='Name'
          size="lg"
          type="text"
          className='w-25'
          
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formItemQuantity">
        <Form.Label>Quantity:</Form.Label>
        <Form.Control

          value={itemQuantity}
          onChange={(evt) => setItemQuantity(evt.target.value)}
          name='quantity'
          placeholder='Quantity'
          size="lg"
          type="number"
          className='w-25'
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formItemUnit">
        <Form.Label>Unit:</Form.Label>
        <Form.Control

          value={itemUnit}
          onChange={(evt) => setItemUnit(evt.target.value)}
          name='unit'
          placeholder='Unit'
          size="lg"
          type="text"
          className='w-25'
        />
        </Form.Group>
        <button class="btn btn-primary">Submit</button>
      </form>
    </Container>
    </>
  );
}
