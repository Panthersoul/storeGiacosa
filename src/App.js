import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  
  const manejadorCarrito = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito`)
  };
  
  return (
    <div className="App">
      <Navbar />
      
      <ItemListContainer />
      <ItemCount stock={10} initial={0} onAdd={manejadorCarrito}/> 
      <header className="App-header">

      
       
      </header>
      
    </div>
  );
}

export default App;
