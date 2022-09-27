import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './pages/CartContainer/CartContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContext } from './context/CartContext';

function App() {
  
  const manejadorCarrito = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito`)
  };
  
  return (
    <CartContext.Provider value={[]}>
        <BrowserRouter>
              <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="detail/:id" element={<ItemDetailContainer />} />
              <Route path="category/:categoryId" element={<ItemListContainer />} />
              <Route path="cart" element={ <CartContainer /> } />
            </Routes>        
            <div className="App">
            </div>
        </BrowserRouter>
    </ CartContext.Provider >

    

  
  );
}

export default App;
