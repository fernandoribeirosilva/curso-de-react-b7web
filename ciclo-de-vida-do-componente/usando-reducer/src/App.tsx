import { useReducer } from "react";
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

type ReducerState = {
  count: number;
};
type ReducerAction = {
  type: "increment" | "decrement" | "reset";
};

const initialState = { count: 0 };
const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
      break;
    case "decrement":
      if (state.count > 0) return { ...state, count: state.count - 1 };
      break;
    case "reset":
      return initialState;
      break;
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div className="p-5">
      Contagem: {state.count}
      <hr />
      <button
        className="m-3 p-3 border rounded bg-blue-400 transition ease-in-out hover:bg-blue-500 text-white"
        onClick={increment}
      >
        Adicionar
      </button>
      <button
        className="m-3 p-3 border rounded bg-blue-400 transition ease-in-out hover:bg-blue-500 text-white"
        onClick={decrement}
      >
        Remover
      </button>
      &nbsp;
      <button
        className="m-3 p-3 border rounded bg-blue-400 transition ease-in-out hover:bg-blue-500 text-white"
        onClick={reset}
      >
        Resetar
      </button>
    </div>
  );
}

export default App;
