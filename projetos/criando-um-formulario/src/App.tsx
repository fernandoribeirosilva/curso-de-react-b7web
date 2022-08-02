import { useState } from 'react';

import { Input } from './components/Input';

const App = () => {
  let [name, setName] = useState('');
  let [sobrenome, setSobrenome] = useState('');
  let [idade, setIdade] = useState('');

  const handleChangeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleChangeInputSobrenome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSobrenome(event.target.value);
  }

  const handleChangeInputIdade = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdade(event.target.value);
  }

  return (
    <div>

      <Input
        type="text"
        value={name}
        label='Nome'
        change={handleChangeInputName}
      />

      <Input
        type="text"
        value={sobrenome}
        label='Sobrenome'
        change={handleChangeInputSobrenome}
      />

      <Input
        type="text"
        value={idade}
        label='Idade'
        change={handleChangeInputIdade}
      />

      <hr />

      Olá {name} {sobrenome}, tudo bem?<br />
      Você tem {idade} anos.
    </div>
  );
}

export default App;