import React from "react";
import { useState } from "react";
import axios from "axios";


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
      <form onSubmit={submitHandler}>
        <label>Item Name:</label>
        <input required
          value={itemName} 
          onChange={(evt) => setItemName(evt.target.value)}
          name='name'
          placeholder='Name'
        ></input>
        <label>Quantity:</label>
        <input required
          value={itemQuantity}
          onChange={(evt) => setItemQuantity(evt.target.value)}
          name='quantity'
          placeholder='Quantity'
        ></input>
        <label>Unit:</label>
        <input required
          value={itemUnit}
          onChange={(evt) => setItemUnit(evt.target.value)}
          name='unit'
          placeholder='Unit'
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}
