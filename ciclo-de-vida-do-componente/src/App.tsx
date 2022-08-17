import { useEffect, useState } from 'react'

/* 
  1 - etapa do siclo de vida do componente (renderização)
    quando um componente vai ser renderizando, primeiro ele é criado na memória,
    isso é chamado de montagem do componente (primeiro siclo de vida do componente).

  2 - etapa do siclo de vida do componente (atualização)
    se ele tiver state e que vai sofrer alterações, ele vai ser atualizado.
    então a cada atualização do componente, também atribuir a um siclo de vida a cada 
    uma desta alterações.

  3 - etapa do siclo de vida do componente (destruição)
    quando o componente é removido da memória.
*/

function App() {
  const [name, setName] = useState<string>('Pedro');

  useEffect(() => {
    alert(`Olá`);
  }, [name]);

  const handleClick = () => {
    setName('Fernando');
  }

  return (
    <div className="flex flex-col items-center bg-slate-200 p-5">
      <h1 className='mx-5'>Hello <span className='underline'>{name}</span></h1>
      <button
        className="w-60 h-11 bg-slate-400 text-white p-2 mx-5 mt-3 rounded hover:bg-slate-500 ease-in-out duration-300 "
        onClick={handleClick}
      >Mudar nome</button>
    </div>
  )
}

export default App
