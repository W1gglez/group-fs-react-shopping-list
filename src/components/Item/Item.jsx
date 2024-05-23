export default function Item({ invList }) {
  return (
    <>
      {invList.map((item) => (
        <li>
          {item.name} Quantity: {item.quantity} Unit: {item.unit}
        </li>
      ))}
    </>
  );
}
