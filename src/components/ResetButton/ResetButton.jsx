import axios from 'axios';

export default function ResetButton({ invList, fetchInventory }) {
  function reset() {
    invList.map((item) => resetPurchased(item.id));
    fetchInventory;
  }

  function resetPurchased(id) {
    axios
      .put(`/api/inventory/resetpurchase/${id}`)
      .then(() => fetchInventory())
      .catch((err) => console.error(err));
  }

  function clearShoppingCart() {
    axios
      .delete(`/api/inventory`)
      .then(() => fetchInventory())
      .catch((err) => console.error(err));
  }

  return (
    <>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => clearShoppingCart()}>Clear</button>
    </>
  );
}
