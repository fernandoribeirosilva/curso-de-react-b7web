import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Photo } from './components/Photo/Photo'

function App() {
  const [name, setName] = useState('Fernando');
  let [number, setNumber] = useState(0);

  const handleClick = () => {
    setName('Paulo');
    setNumber(number += 10)
  }

  return (
    <div>
      <Header title='Título da página' />
      {/* todos os components que eu criar ele fechar nele mesmo, e passando uma prop */}
      <div>Ola, {name}, tudo bem. {number}</div>{/* usando variáveis */}

      <Photo legend="Google" >
        <img src="http://www.google.com.br/google.jpg" alt="Google" />
      </Photo>

      <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default App
