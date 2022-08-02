import React, { useState } from 'react';

function App() {
  let [name, setName] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <div>
      Nome:
      <input type="text" value={name} onChange={handleChangeInput} />
      <hr />
      Seu nome é: {name}
    </div>
  )
}

export default App
