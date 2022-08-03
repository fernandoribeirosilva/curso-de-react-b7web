import { useState } from 'react'

function App() {
  const [padding, setPadding] = useState(0);

  const handleClick = () => {
    setPadding(20);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ backgroundColor: '#ff0000', color: '#fff', border: 0, padding }}
      >Clique a qui</button>
    </div>
  )
}

export default App
