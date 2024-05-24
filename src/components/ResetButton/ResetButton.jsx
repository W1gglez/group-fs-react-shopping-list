import axios from 'axios';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: "Are you sure?",
      text: "This will remove EVERYTHING!!",
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
          title: "Deleted!",
          text: "SUCCESS",
          icon: "success",
          imageUrl: "https://i.gifer.com/1Q49.gif",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        axios
          .delete(`/api/inventory`)
          .then(() => fetchInventory())
          .catch((err) => console.error(err));
      }
    });



  }

  return (
    <>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => clearShoppingCart()}>Clear</button>
    </>
  );
}
