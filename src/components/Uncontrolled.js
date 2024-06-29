import logo from './logo.svg';
import './App.css';

function App() {
  const submit = (e) =>
    {
      e.preventDefault();
      const data= Array.from(new FormData(e.target))
      console.log(Object.fromEntries(data))
    }
  return (
    <form onSubmit={submit}>
    <div className="App">
      <header className="App-header">
        <span>
          lalala
        </span>
        <input type="text" name="campo"></input>
        <input type="text" name="campo2"></input>
        <input type="submit"></input>
      </header>
    </div>
    </form>
  );
}

export default App;
