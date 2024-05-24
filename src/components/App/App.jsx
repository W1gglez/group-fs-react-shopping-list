import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';
import { useState, useEffect } from 'react';
import AddFoodForm from '../AddFoodForm/AddFoodForm.jsx';
import GetInventory from '../GetInventory/GetInventory.jsx';


function App() {
  const [invList, setInvList] = useState([]);

  useEffect(() => fetchInventory, []);

  async function fetchInventory() {
    try {
      const result = await axios.get('/api/inventory');
      setInvList(result.data);
    } catch (err) {
      console.error('Error', err);
    }
  }



  return (
    <div className='App'>
      <Header />
      <main>
        <AddFoodForm fetchInventory={fetchInventory} />
        <GetInventory
          invList={invList}
          fetchInventory={fetchInventory}
        />
      </main>
    </div>
  );
}

export default App;
