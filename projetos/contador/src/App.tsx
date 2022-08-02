import { useState } from 'react';

function App() {
  let [number, setNumber] = useState(0);

  const handleMinus = () => {
    if (number !== 0) {
      setNumber(number - 1)
    }
  }

  const handleMore = () => {
    setNumber(number + 1)
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <div>{number}</div>
      <button onClick={handleMore}>+</button>
    </div>
  )
}

export default App
