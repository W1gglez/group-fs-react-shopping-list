import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [invList, setInvList] = useState([]);

  async function fetchInventory() {
    try {
      const result = await axios.get('/api/inventory');
      setInvList(result);
    } catch (err) {
      console.error('Error', err);
    }
  }

  useEffect(() => fetchInventory, []);

  return (
    <div className='App'>
      <Header />
      <main>
        <p>Under Construction...</p>
      </main>
    </div>
  );
}

export default App;
