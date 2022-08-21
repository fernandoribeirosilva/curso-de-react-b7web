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
      return { ...state, count: state.count++ };
      break;
    case "decrement":
      return { ...state, count: state.count-- };
      break;
    case "reset":
      return initialState;
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div className="p-5"></div>;
}

export default App;
