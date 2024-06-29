import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  const file = useRef();
  const input = useRef();
  const submit = () =>
    {
      console.log(input.current.value);
      console.log(file.current.files[0]);
      const form = new FormData();
      form.append('campo', input.current.value);
      form.append('file', file.current.files[0]);
      fetch('/lala', {
        method: 'POST',
        body: form
      })
    }
  return (
   
    <div className="App">
      <div>
        <span>Lala</span>
        <input type="text" name="campo" ref = {input}></input>
        <input type="file" ref={file}></input>
      </div>
      <input type="submit" value="Enviar"
      onClick={submit}
      ></input>
    </div>
   
  );
}

export default App;
