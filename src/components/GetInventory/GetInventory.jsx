import { useState } from 'react';
import Item from '../Item/Item';
import ResetButton from '../ResetButton/ResetButton';



export default function GetInventory({ invList, fetchInventory }) {
  console.log(invList);
  const [buttonClicked, setButtonClicked] = useState(false)
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
   <ResetButton buttonClicked={buttonClicked}
   setButtonClicked={setButtonClicked}/>
    
    </>
  );
}
