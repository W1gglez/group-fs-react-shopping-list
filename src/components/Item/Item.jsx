import { useState } from 'react';
import axios from 'axios';
export default function Item({ item, fetchInventory }) {
  const [purchased, setPurchased] = useState(false);


  function removeItem(id) {
    axios.delete(`/api/inventory/${id}`)
       .then(() => fetchInventory())
       .catch(err => console.error(err));
 }
  return (
    <>
      <li>
        {item.name} Quantity: {item.quantity} Unit: {item.unit}
        {purchased ? (
          <button
            onClick={() => setPurchased(true)}
            disabled
          >
            Added to Cart
          </button>
        ) : (
          <button onClick={() => setPurchased(true)}>Purchase Item</button>
        )}
        {<button onClick={() => removeItem(item.id) }>Remove</button>}
      </li>
    </>
  );
}
