import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  const manejadorCarrito = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito`)
  };
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="detail/:id" element={<ItemDetailContainer />} />
      </Routes>

      <div className="App">
     
      
     
     
   </div>


    </BrowserRouter>
  
  );
}

export default App;
