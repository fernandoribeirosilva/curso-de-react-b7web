import { useState } from 'react';
import { Botao } from './components/Botao';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Botao />
    </div>
  )
}

export default App
