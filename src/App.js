import './App.css';
import Counter from './Counter';
import NameForm from './Form';


function App() {
  return (
    <div className="App">

      <header className='App-header'>
        <h1> Pokemon Fetch Game</h1>
        <p className='rule'>Enter a valid number between 1 to 151 or Increment/Decrement  Pokemon to get desire Pokemon Picture. If Pokemon number is not valid it will generate random Pokemon. </p>
        <NameForm />
        <Counter />
      </header>
    </div>
  );
}

export default App;
