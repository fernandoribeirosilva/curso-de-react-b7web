import { useReducer } from "react";

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

export const useContagem = () => {
  return useReducer(reducer, initialState);
};
