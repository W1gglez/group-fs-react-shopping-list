export default function GetInventory({ invList }){
console.log(invList);
return(
<>
    <ul>
        {invList.map((item) => (<li> Name: {item.name} Qty: {item.quantity} Unit: {item.unit}<button> Buy</button> <button>Remove</button></li>))}
    </ul>

</>


    )
}