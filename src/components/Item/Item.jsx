import axios from 'axios';

export default function Item({ item, fetchInventory }) {
  function removeItem(id) {
    axios
      .delete(`/api/inventory/${id}`)
      .then(() => fetchInventory())
      .catch((err) => console.error(err));
  }

  function purchaseItem(id) {
    console.log(id);
    axios
      .put(`/api/inventory/purchase/${id}`)
      .then(() => fetchInventory())
      .catch((err) => console.error(err));
  }

  return (
    <>
      <li>
        {item.name} Quantity: {item.quantity} Unit: {item.unit}
        {item.purchased === true ? (
          <button disabled>Added to Cart</button>
        ) : (
          <button
            onClick={() => {
              purchaseItem(item.id);
            }}
          >
            Purchase Item
          </button>
        )}
        {<button onClick={() => removeItem(item.id)}>Remove</button>}
      </li>
    </>
  );
}
