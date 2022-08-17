import { ChangeEvent, useEffect, useState } from 'react'

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
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  // No useEffect, deve ser passado 2 parâmetros 
  // 1 - função que será executada.
  //  esta função deve ser executada quando o componente for renderizado ou criado.
  //2 - array de dependências
  //  estas dependência é a variável que será monitorada para saber se ela mudou o
  //  valor, ele vai ser executado novamente.
  useEffect(() => {
    setFullName(`${name} ${lastName}`);
  }, [name, lastName]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }


  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={name}
        placeholder="Digite o seu nome"
        className="w-96 border-2 border-purple-700 my-2"
        onChange={handleNameChange}
      />
      <input
        type="text"
        value={lastName}
        placeholder="Digite o seu sobrenome"
        className="w-96 border-2 border-purple-700 my-2"
        onChange={handleLastNameChange}
      />
      <p className="mt-5">Nome Completo: {fullName}</p>
    </div>
  )
}

export default App
