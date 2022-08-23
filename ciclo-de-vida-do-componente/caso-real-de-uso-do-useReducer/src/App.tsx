/* 
  quando eu quero trocar alguma informação de uma variável, incrementar ou mudar o nome
  eu uso o useState. 

  O Reducer tem o mesmo papel do useState, mas ele é mais complexo.

  1 parâmetro - Ele recebe no primeiro parâmetro uma função.
    Essa função recebe dois parâmetros sempre, no primeiro parâmetro o estado 
    atual do reducer. E no segundo é que ação que eu vou executar. ou seja esta função
    vai ser executada toda vez que eu precisar mudar o estado do reducer.

  2 parâmetro - são os valores iniciais do meu reducer.
*/

import { ChangeEvent, useState } from "react";
import { usePeopleList } from "./reducers/peopleList";

function App() {
  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handleAddButton = () => {
    if (nameInput) {
      dispatch({
        type: "ADD",
        payload: { name: nameInput },
      });
      setNameInput("");
    }
  };

  const deletePerson = (id: string) => {
    dispatch({
      type: "DEL",
      payload: { id },
    });
  };

  const handleOrderButton = () => {
    dispatch({
      type: "ORDER",
    });
  };

  return (
    <div className="p-5 box-border">
      <div className="mb-4">
        <input
          type="text"
          className="border-2 rounded-md p-1 text-sm transition duration-300 ease focus:outline-none focus:border-sky-400"
          value={nameInput}
          onChange={handleInputChange}
        />
        <button
          className="ml-4 bg-blue-400 p-1 rounded-md text-white transition duration-300 ease-in-out hover:bg-blue-500"
          onClick={handleAddButton}
        >
          Adicionar
        </button>
      </div>
      <hr />

      <button
        className="mt-4 bg-blue-400 p-1 rounded-md text-white transition duration-300 ease-in-out hover:bg-blue-500"
        onClick={handleOrderButton}
      >
        Ordenar
      </button>
      <br />

      <span className="block pt-4">Lista de Pessoas:</span>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button
              className="ml-2 text-rose-500 transition duration-300 ease-in-out hover:text-rose-700"
              onClick={() => deletePerson(item.id)}
            >
              [ deletar ]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
