import { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState<string>('Pedro');

  useEffect(() => {
    alert(`Olá`);
  }, [name]);

  const handleClick = () => {
    setName('Fernando');
  }

  return (
    <div className="flex flex-col items-center bg-slate-200">
      <h1 className='mx-5'>Hello <span className='underline'>{name}</span></h1>
      <button
        className="w-60 h-11 bg-slate-400 text-white p-2 mx-5 mt-3 rounded hover:bg-slate-500 ease-in-out duration-300 "
        onClick={handleClick}
      >Mudar nome</button>
    </div>
  )
}

export default App
