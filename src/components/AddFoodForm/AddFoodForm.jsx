import React from "react";
import { useState } from "react";
import axios from "axios";

export default function AddFoodForm () {
    const [itemNameForm, setItemNameForm] = useState('');
    const [itemQuantityForm, setItemQuantityForm] = useState(0);
    const [itemUnitForm, setItemUnitForm] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        axios.post("/api/inventory", newStudent)
        .then((response) => {
          //getSomething
        })
        .catch((err) => {
          alert("Error Adding inventory");
          console.log(err);
        });

    }
    return (
        <>
        <form onSubmit={submitHandler}>
            <label for="name">Item Name:</label>        
            <input value={foodForm} onChange={(evt) => setItemNameForm(evt.target.value)} name="name" placeholder="name"></input>
            <label for="quantity">How Many?:</label>
            <input value={foodForm} onChange={(evt) => setItemQuantityForm(evt.target.value)}  name="quantity" placeholder="Quantity"></input>
            <label for="unit">Unit:</label>
            <input value={foodForm} onChange={(evt) => setItemUnitForm(evt.target.value)}  name="unit" placeholder="Unit"></input>
            <button>Submit</button>
            </form>
        </>

    )
}