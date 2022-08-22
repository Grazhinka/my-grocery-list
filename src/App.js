import './App.css';
import { List } from './list';
import listGro from './listGro.webp'
import man from './man.webp'

function App() {
  return (
    <div className="App">
      <img src={listGro} width='200px' alt='list'/>
      <h1>Grocery list</h1>
      <  List />
      <img src={man} width='200px' alt='man'/>
    </div>
  );
}

export default App;

