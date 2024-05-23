import { useState } from 'react';

export default function Item({ item }) {
  const [purchased, setPurchased] = useState(false);

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
      </li>
    </>
  );
}
