import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  const manejadorCarrito = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito`)
  };
  
  return (
    <div className="App">
      <Navbar />
      
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
