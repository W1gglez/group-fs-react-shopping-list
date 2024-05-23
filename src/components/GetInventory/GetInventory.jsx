
import Item from '../Item/Item';


export default function GetInventory({ invList, fetchInventory }) {
  console.log(invList);
  return (
    <>
      <ul>
        {invList.map((item) => (
          <Item
            key={item.id}
            item={item} fetchInventory={fetchInventory}
          />
        ))}
      </ul>
    </>
  );
}
