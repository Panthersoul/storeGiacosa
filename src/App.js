import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Hola Mundo!" />
      <Counter stock={10} initial={0} />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
