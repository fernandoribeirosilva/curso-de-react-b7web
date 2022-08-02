import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div >
      <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show && <p>bla bla bla</p>}
    </div>
  )
}

export default App
