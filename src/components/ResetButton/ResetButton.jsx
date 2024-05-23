import axios from 'axios';
import { useState } from 'react';

export default function ResetButton ({ setButtonClicked}) {

    function reset() { 
       setButtonClicked(false) ;
}
function clearShoppingCart() {
    axios.delete(`/api/inventory`)
       .then(() => fetchInventory())
       .catch(err => console.error(err));
 }

return (
    <>
    <button onClick={()=>(reset())}>Reset</button> <button onClick={()=>(clearShoppingCart())}>Clear</button>
    </>
)
}