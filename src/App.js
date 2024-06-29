import React, { useState } from 'react';

export const App = () => {
  const [value, setValue] = useState({normal: 'por defecto', texto: '', select: ''});

  const handleChange = (e) => {
    console.log(e.target.name)
    setValue({
      ...value,
      [e.target.name]: e.target.value});

  };
  console.log(value);
  return (
    <div>
      {value.length < 5 && <span>longitud mínima 5</span>}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="texto" value={value.text} onChange={handleChange} />
      <select name="select" value={value.select} onChange={handleChange}>
        <option value="chanchofeliz">Chancho feliz</option>
        <option value="chanchitofeliz">Chanchito feliz</option>
        <option value="chanchitoemocionado">Chanchito emocionado</option>
        <option value="felipe">Felipe</option>
      </select>
    </div>
  );
};

export default App;