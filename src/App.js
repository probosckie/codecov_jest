import logo from './logo.svg';
import Button from './Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={() => console.log('button clicked')}>here is a button</Button>
        
      </header>
    </div>
  );
}

export default App;
