import ResetButton from '../ResetButton/ResetButton';
import Item from '../Item/Item';


export default function GetInventory({ invList }) {
  console.log(invList);
  return (
    <>
      <ul>
        <Item invList={invList} />
      </ul>
        <ResetButton/>
    </>
  );
}
