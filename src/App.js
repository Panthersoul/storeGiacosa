import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  
  const manejadorCarrito = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito`)
  };
  
  return (
    <div className="App">
      <Navbar />
      <ItemDetailContainer />
      {/* <ItemListContainer />*/}
      
    </div>
  );
}

export default App;
