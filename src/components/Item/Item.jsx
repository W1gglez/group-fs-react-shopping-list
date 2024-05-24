import axios from 'axios';
import Swal from 'sweetalert2';
import 'animate.css';

export default function Item({ item, fetchInventory }) {
  function removeItem(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title : "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          imageUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnVra2xkbGxyZ2RpeWYyY2F0ZnpsNzBoNms3MHBiaTkwd3p5Z2hxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k3YNVBrbn2KqbXEgDJ/giphy.gif",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image",
          hideClass: {
            popup: `
              animate__animated
              animate__tada
              animate__flip
              animate__faster
            `
          }
        });
        axios
          .delete(`/api/inventory/${id}`)
          .then(() => fetchInventory())
          .catch((err) => console.error(err));
      }
      }
    )};

  function purchaseItem(id) {
    console.log(id);
    axios
      .put(`/api/inventory/purchase/${id}`)
      .then(() => fetchInventory())
      .catch((err) => console.error(err));
  }
function sunModal() {
  Swal.fire({
    imageUrl: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdpNzcxNDRrZjB2eDJzdjBnZ3c2Z3JuNzVjdmZleW1wdXE0N2pvayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10ltVBrN9bO5d6/giphy.webp",
  
  });
}


  if(item.name.includes('s','u','n')){
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
          <button onClick={()=> sunModal()}><strong>🌞</strong></button>
        </li>
      </>
    );
  }
  else {return (
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


  }


