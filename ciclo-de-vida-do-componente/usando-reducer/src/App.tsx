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

import { useContagem } from "./reducers/comtagem";

function App() {
  const [contagem, contagemDispatch] = useContagem();

  const increment = () => contagemDispatch({ type: "increment" });
  const decrement = () => contagemDispatch({ type: "decrement" });
  const reset = () => contagemDispatch({ type: "reset" });

  return (
    <div className="p-5">
      Contagem: {contagem.count}
      <hr />
      <button
        className="m-3 p-3 rounded bg-blue-400 transition ease-in-out hover:bg-blue-500 text-white"
        onClick={increment}
      >
        Adicionar
      </button>
      <button
        className="m-3 p-3 rounded bg-blue-400 transition ease-in-out hover:bg-blue-500 text-white"
        onClick={decrement}
      >
        Remover
      </button>
      <button
        className="m-3 p-3 rounded bg-blue-400 transition ease-in-out hover:bg-blue-500 text-white"
        onClick={reset}
      >
        Resetar
      </button>
    </div>
  );
}

export default App;
